import requests

# ============================================================
# ANUBIS DIAGNOSTIC TOOL - MODEL SCANNER V3 (CLEAN)
# ============================================================

API_KEY = "AIzaSyDrZU_S0Fqnvl5qm7O0H-qMxQJ9-XXbG7E"

def list_available_models():
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
            print("\n[ERRO]:", data)
    except Exception as e:
        print(f"\n[ERRO]: {e}")

if __name__ == "__main__":
    list_available_models()