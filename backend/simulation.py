from langchain_community.chat_models import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage
from typing import Callable

class DialogueAgent:
    def __init__(self, name: str, system_message: SystemMessage, model: ChatOpenAI) -> None:
        self.name = name
        self.system_message = system_message
        self.model = model
        self.prefix = f"{self.name}: "
        self.message_history = ["Here is the conversation so far."]

    def reset(self):
        self.message_history = ["Here is the conversation so far."]

    def send(self) -> str:
        message = self.model([
            self.system_message,
            HumanMessage(content="\n".join(
                self.message_history + [self.prefix])),
        ])
        return message.content

    def receive(self, name: str, message: str) -> None:
        self.message_history.append(f"{name}: {message}")


class DialogueSimulator:
    def __init__(self, agents: list[DialogueAgent], selection_function: Callable[[int, list[DialogueAgent]], int]) -> None:
        self.agents = agents
        self._step = 0
        self.select_next_speaker = selection_function

    def reset(self):
        for agent in self.agents:
            agent.reset()

    def inject(self, name: str, message: str):
        for agent in self.agents:
            agent.receive(name, message)
        self._step += 1

    def step(self) -> tuple[str, str]:
        speaker_idx = self.select_next_speaker(self._step, self.agents)
        speaker = self.agents[speaker_idx]
        message = speaker.send()
        for receiver in self.agents:
            receiver.receive(speaker.name, message)
        self._step += 1
        return speaker.name, message
