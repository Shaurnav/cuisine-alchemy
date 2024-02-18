from langchain_community.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
from simulation import DialogueAgent, DialogueSimulator


def process_simulation_input(chef: list[str], custom: str):
    topic, names = determine_topic_and_names(chef, custom)
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


def determine_topic_and_names(chef: list[str], custom: str):
    if custom and len(chef) == 1:
        names = {"Custom", f"{chef[0]}"}
        topic = f"Finding a novel dish idea that combines both the CUSTOM culture and {chef[0]} culture"
    elif len(chef) == 2:
        names = {f"{chef[0]}", f"{chef[1]}"}
        suffix = f", with this requirement: {custom}" if custom else ""
        topic = f"Finding a novel dish idea that combines both the {chef[0]} culture and {chef[1]} culture" + suffix
    else:
        raise ValueError("Invalid input for 'chef' and 'custom'")
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
    return f"""{conversation_description}\n\nYour name is {name}.\n\nYour description is as follows: {description}\n\nYour goal is to come up with a recipe that combines both of your cultures. Remember that it's only you and the other chef, do not mention the moderator.

    DO push back on the other person if the new recipe does not have a balance of cultures.
    DO focus on being creative.
    DO take risks and aim to be quirky.
    DO use elements from your own culture as you're reasoning about the recipe.
    DO come up with a name for the dish when you're done.

    If a requirement was given, make sure to incorporate it into the dish.

    DO NOT fabricate any dishes.

    Do not add anything else.

    Stop speaking the moment you finish speaking from your perspective.
    """


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

def get_recipe(message: str):
    system_message = SystemMessage(
        content="""
        Your goal is to generate the final combined recipe is.

        Do give a recipe of the dish.
        Do take into account both cultures.
        Do make sure the dish is balanced.


        Do not add anything else.
        Do not sound like part of a conversation.

        Stop when you are done with the recipe.
        """)
    recipe = ChatOpenAI(temperature=1.0)(
        [system_message, HumanMessage(content=message)]).content
    return recipe


def summarize_message(message: str):
    system_message = SystemMessage(
        content="""
        For the following text, create an 80 word post. Use a fun but not too overstated tone for a social media / blog post. Use emojis. Start the tweet with a sentence about the two countries meeting each other for a brand-new fusion dish where the 2 countries are determined from the text. Give a succinct name to the dish that incorporates the main 2-3 ingredients and then describe it properly. Write the post from the perspective of a user who used our site to generate this dish idea and wants to share it with their friends because they think it's cool. No hashtags. End the tweet: \"Create your own creative combinations at foodagent.com\"
        """)
    summerized_message = ChatOpenAI(temperature=1.0)(
        [system_message, HumanMessage(content=message)]).content
    return summerized_message
