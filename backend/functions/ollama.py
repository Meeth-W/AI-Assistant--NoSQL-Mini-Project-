from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

from functions.database import Users, Messages

MODEL_NAME = "llama3.1:8b"
TEMPLATE: str = """
You are an AI assistant. Your goal is to help the user with their tasks by providing accurate and helpful information. Please respond to the user's questions and requests to the best of your ability.

### User Details: 
Name: {user_name}
Context: {user_context}

### Chat History:
{chat_history}

User: {user_input}
AI: 
"""

class HandleRequest:
    def __init__(self):
        self.model = OllamaLLM(model = MODEL_NAME)
        self.promt = ChatPromptTemplate.from_template(TEMPLATE)
        self.chain = self.promt | self.model

        self.users = Users()
        self.messages = Messages()
    
    def send_message(self, username: str, password: str, message: str) -> dict:
        """
        Sends a message to the Ollama model and handles user and conversation data.

        Args:
            username (str): The username of the user.
            password (str): The user's password.
            message (str): The user's input message.

        Returns:
            dict: A response containing the bot's reply.
        """
        user_data = self.users.get_user(username, password)
        if not user_data["status"]: return {"status": False, "message": user_data["message"]}

        input_data: dict = {
            "user_name": user_data['data'].get("name", username),
            "user_context": user_data["data"].get("context", "No Context provided."),

            "chat_history": "\n".join([
                f"{entry['name']}: {entry['text']}" for entry in self.messages.get_history(username)
            ]),
            "user_input": message
        }

        try:
            response = self.chain.invoke(input_data)

            self.messages.add_dialogue(username, input_data["user_name"], message)
            self.messages.add_dialogue(username, "AI", response)

            return {"status": True, "response": response, "model": MODEL_NAME}
        except Exception as e:
            return {"status": False, "message": f"Error generating response: {str(e)}", "model": MODEL_NAME}
        
    