import os
import requests
from dotenv import load_dotenv

# ============================================================
# ANUBIS DIAGNOSTIC TOOL - MODEL SCANNER V3.1 (SECURED)
# PROTOCOLO: NO_HARDCODED_KEYS // STATUS: SAFE FOR DEPLOY
# ============================================================

load_dotenv()

# Captura a chave do .env local ou das variáveis da Vercel [cite: 2026-03-05]
API_KEY = os.getenv("GOOGLE_API_KEY")

def list_available_models():
    if not API_KEY:
        print("\n[ERRO]: Chave GOOGLE_API_KEY não encontrada no sistema.")
        return

    print("\n[ANUBIS TECH]: Consultando inventário Nível 1...")
    url = f"https://generativelanguage.googleapis.com/v1beta/models?key={API_KEY}"
    
    try:
        response = requests.get(url)
        data = response.json()
        if "models" in data:
            print("\n--- MODELOS DISPONÍVEIS ---")
            for m in data["models"]:
                print(f"> Identificador: {m['name']}")
        else:
            print("\n[ERRO]: A chave pode estar inválida ou bloqueada pelo Google.")
            print("Resposta do servidor:", data)
    except Exception as e:
        print(f"\n[ERRO CRÍTICO]: {e}")

if __name__ == "__main__":
    list_available_models()