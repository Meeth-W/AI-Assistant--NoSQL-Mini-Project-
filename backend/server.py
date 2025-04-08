import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from functions.database import Users
from functions.ollama import HandleRequest

app = FastAPI()

@app.get("/")
def read_root():
    return {"Status": f"Server is running"}

users = Users()
@app.get('/api/v1/create_account')
def create_account(username: str, password: str, name: str, context: str):
    """
    Creates a new user account with additional character details.
    Args:
        username (str): The username for the account.
        password (str): The password for the account.
        name (str): The character name associated with the user.
        context (str): A context of the character.
    Returns:
        dict: Status message indicating success or failure.
    """
    return users.add_user(username, password, {
        "name": name,
        "context": context
    })

@app.get('/api/v1/delete_account')
def delete_account(username: str, password: str):
    """
    Deletes a users aaccount from the database.
    Args: 
        username (str): The username for the account.
        password (str): The password for the account.
    Returns: 
        dict: Status message indiciated sucess of failiure.
    """
    return users.remove_user(username, password)

@app.get('/api/v1/verify_account')
def verify_account(username: str, password: str):
    """
    Verifies the user's account.
    Args:
        username (str): The username for the account.
        password (str): The password for the account.
    Returns:
        dict: Status message indicating success or failure.
    """
    return users.verify(username, password)

@app.get('/api/v1/get_account')
def get_account(username: str, password: str):
    """
    Retrieves the user's account details.
    Args:
        username (str): The username for the account.
        password (str): The password for the account.
    Returns:
        dict: The user's account details.
    """
    return users.get_user(username, password)

@app.get('/api/v1/get_users')
def get_users():
    """
    Retrieves all users from the database.
    Returns:
        list: A list of all users in the database.
    """
    return users.get_users()

handler = HandleRequest()
@app.get('/api/v1/send_message')
def send_message(username: str, password: str, message: str):
    """
    Sends a message to the Ollama model and handles user and conversation data.
    Args:
        username (str): The username of the user.
        password (str): The user's password.
        message (str): The user's input message.
    Returns:
        dict: A response containing the bot's reply.
    """
    return handler.send_message(username, password, message)

@app.get('/api/v1/get_history')
def get_history(username: str):
    """
    Retrieves the chat history for a user.
    Args:
        username (str): The username of the user.
    Returns:
        list: A list of chat history entries for the user.
    """
    return handler.messages.get_history(username)

@app.get('/api/v1/clear_history')
def clear_history(username: str):
    """
    Clears the chat history for a user.
    Args:
        username (str): The username of the user.
    Returns:
        dict: Status message indicating success or failure.
    """
    return handler.messages.clear_history(username)

origins = [
    "http://localhost:5173",  
    "http://127.0.0.1:5173", 
]
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],  
    allow_headers = ["*"], 
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)