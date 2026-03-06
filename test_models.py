from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

print("Listando modelos disponíveis:\n")

for model in client.models.list():
    print(model.name)