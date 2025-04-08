import os
from pymongo import MongoClient
from typing import List, Dict

class Database:
    def __init__(self):
        self.client = MongoClient("mongodb://localhost:27017/")
        self.db = self.client["assistant"]

class Users(Database):
    def __init__(self):
        super().__init__()
        self.collection = self.db["users"]
        self.collection.create_index("username", unique=True)

    def add_user(self, username: str, password: str, data: dict) -> dict:
        if self.collection.find_one({"username": username}):
            return {"status": False, "message": "User already exists"}
        self.collection.insert_one({"username": username, "password": password, "data": data})
        return {"status": True, "message": "User added successfully"}

    def remove_user(self, username: str, password: str) -> dict:
        result = self.collection.delete_one({"username": username, "password": password})
        if result.deleted_count == 0:
            return {"status": False, "message": "User does not exist or incorrect password"}
        return {"status": True, "message": "User removed successfully"}

    def get_users(self) -> List[Dict[str, str]]:
        return {"status": True, "message": "Users retrieved successfully", "data": list(self.collection.find({}, {"_id": 0}))}

    def verify(self, username: str, password: str) -> dict:
        if self.collection.find_one({"username": username, "password": password}):
            return {"status": True, "message": "User verified successfully"}
        return {"status": False, "message": "User does not exist or incorrect password"}

    def get_user(self, username: str, password: str) -> dict:
        user = self.collection.find_one({"username": username, "password": password}, {"_id": 0, "data": 1})
        if not user:
            return {"status": False, "message": "User does not exist or incorrect password"}
        return {"status": True, "message": "User data retrieved successfully", "data": user["data"]}
    

class Messages(Database):
    def __init__(self):
        super().__init__()
        self.collection = self.db["messages"]

    def get_history(self, username: str) -> List[Dict[str, str]]:
        if not self.collection.find_one({"username": username}): return []
        return list(self.collection.find({"username": username}, {"_id": 0}))

    def add_dialogue(self, username: str, name: str, text: str) -> Dict[str, str]:
        self.collection.insert_one({"username": username, "name": name, "text": text})
        return {"status": "success", "message": "Dialogue added successfully"}

    def clear_history(self, username: str) -> Dict[str, str]:
        self.collection.delete_many({"username": username})
        return {"status": "success", "message": "History cleared successfully"}