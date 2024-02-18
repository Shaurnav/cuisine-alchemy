from langchain_community.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
from simulation import DialogueAgent, DialogueSimulator


def process_simulation_input(chief: list[str], custom: str):
    topic, names = determine_topic_and_names(chief, custom)
    conversation_description = generate_conversation_description(topic, names)
    agent_descriptions = {name: generate_agent_description(
        name, custom, conversation_description) for name in names}
    agent_system_messages = {name: generate_system_message(
        name, description, conversation_description) for name, description in agent_descriptions.items()}
    specified_topic = specify_topic(topic, names)
    agents = initialize_agents(agent_system_messages)
    simulator = DialogueSimulator(agents, select_next_speaker)
    simulator.reset()
    simulator.inject("Moderator", specified_topic)
    return simulator


def determine_topic_and_names(chief: list[str], custom: str):
    if custom and len(chief) == 1:
        names = {"Custom Chef", f"{chief[0]} Chef"}
        topic = f"Finding a novel dish idea that combines both the CUSTOM culture and {chief[0]} culture"
    elif not custom and len(chief) == 2:
        names = {f"{chief[0]} Chef", f"{chief[1]} Chef"}
        topic = f"Finding a novel dish idea that combines both the {chief[0]} culture and {chief[1]} culture"
    else:
        raise ValueError("Invalid input for 'chief' and 'custom'")
    return topic, names


def generate_conversation_description(topic: str, names: set):
    return f"Here is the topic of conversation: {topic}\nThe participants are: {', '.join(names)}"


def generate_agent_description(name: str, custom: str, conversation_description: str, word_limit=50):
    additional_content = f", this is how they describe Custom Chef's culture: \"{custom}\"." if name == "Custom Chef" else ""
    agent_specifier_prompt = SystemMessage(
        content=f"{conversation_description}\nPlease reply with a creative description of {name}{additional_content}, in {word_limit} words or less.")
    human_message = HumanMessage(
        content="Speak directly to {name}. Give them a point of view. Do not add anything else.")
    agent_description = ChatOpenAI(temperature=1.0)(
        [agent_specifier_prompt, human_message]).content
    return agent_description


def generate_system_message(name: str, description: str, conversation_description: str):
    return f"{conversation_description}\n\nYour name is {name}.\n\nYour description is as follows: {description}\n\n[Instructions for combining cultures]"


def specify_topic(topic: str, names: set):
    system_message = SystemMessage(
        content="You can make the topic more specific.")
    human_message = HumanMessage(
        content=f"{topic}\n\nYou are the moderator. Please make the topic more specific. Speak directly to the participants: {', '.join(names)}.")
    specified_topic = ChatOpenAI(temperature=1.0)(
        [system_message, human_message]).content
    return specified_topic


def initialize_agents(agent_system_messages: dict):
    return [DialogueAgent(
        name=name,
        system_message=SystemMessage(content=system_message),
        model=ChatOpenAI(model_name="gpt-4", temperature=0.2),
    ) for name, system_message in agent_system_messages.items()]


def select_next_speaker(step: int, agents: list[DialogueAgent]) -> int:
    return step % len(agents)
