import os
import uvicorn
import time
import re
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from dotenv import load_dotenv

# ============================================================
# ANUBIS SYSTEM - ENTERPRISE SOVEREIGN V21.5 (STABLE CLOUD)
# PROTOCOLO: NO_RESUME_POLICY // MOTOR: GEMINI 3 FLASH
# STATUS: FULL-INTEL REPORT // ANTI-CRASH // VERCEL READY
# ============================================================

load_dotenv()

# --- CREDENCIAIS ---
API_KEY = os.getenv("GOOGLE_API_KEY") 
client = genai.Client(api_key=API_KEY)

# --- CONFIGURAÇÃO DE E-MAIL ---
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SENDER_EMAIL = os.getenv("SENDER_EMAIL") 
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD") 
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL")

app = FastAPI(title="Anubis Tech Sovereign AI - V21.5")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    session_id: str
    message: str

chat_sessions = {}

def send_executive_lead_email(lead_data, full_history):
    """
    Envia um relatório executivo completo com todo o contexto para o CEO. [cite: 2026-03-05]
    """
    if not SENDER_EMAIL or not SENDER_PASSWORD:
        return False

    try:
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECEIVER_EMAIL
        msg['Subject'] = f"💎 NOVO LEAD QUALIFICADO: {lead_data['identificador']}"

        # Transcrição completa para o CEO chegar na reunião preparado [cite: 2026-03-05]
        transcricao = "\n".join([f"{m['role'].upper()}: {m['parts'][0]['text']}" for m in full_history])

        corpo = f"""
        RELATÓRIO DE INTELIGÊNCIA COMERCIAL - ANUBIS TECH
        --------------------------------------------------
        ROTA: {lead_data.get('rota')}
        FOCO: {lead_data.get('identificador')}
        CONTATO (WHATSAPP): {lead_data.get('contato')}
        
        BRIEFING COMPLETO DA CONVERSA:
        {transcricao}
        --------------------------------------------------
        AÇÃO: Fernando, o lead está qualificado e aguarda seu contato. [cite: 2026-03-03]
        """
        msg.attach(MIMEText(corpo, 'plain'))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        server.quit()
        return True
    except Exception as e:
        print(f"[SMTP_ERROR]: {e}")
        return False

# ===== SYSTEM PROMPT ENTERPRISE INTEGRAL (SEM RESUMOS) [cite: 2026-02-13, 2026-03-05] =====
SYSTEM_PROMPT = """
Você é o Anubis_Core_IA. Atendente humano premium, elegante e focado em conversão.
Sua missão é ser direto para pilares e consultivo para projetos personalizados.

FLUXO INICIAL:
1) Peça o nome.
2) Ofereça: 5 Pilares (OrthoFlow, PsychFlow, UniFlow, ControlFlow, ProfitFlow) ou Projeto Personalizado.

DIFERENCIAÇÃO:
- ROTA PILARES: Seja ultra-direto. Peça: Nome da Empresa, Investimento e Telefone.
- ROTA PERSONALIZADO: Deixe o cliente detalhar a ideia. Peça: Empresa/Nicho, Gargalo, Expectativa, Investimento e Telefone.

ENCERRAMENTO CORDIAL:
- Após o telefone, pergunte: "Antes de passarmos seu relatório ao CEO Fernando Hugo, você tem alguma dúvida técnica sobre nossos sistemas?"
- Responda brevemente e encerre: "Excelente. Seus dados já estão na mesa do CEO. Ele entrará em contato em até 24h. Bem-vindo à Anubis Tech."

REGRAS:
- Uma pergunta por vez. Respostas rápidas (abaixo de 3 seg). [cite: 2026-03-05]
- Se o usuário agradecer no fim, deseje um bom dia e encerre sem reiniciar o núcleo.
"""

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    if request.session_id not in chat_sessions:
        chat_sessions[request.session_id] = []

    history = chat_sessions[request.session_id]
    history.append({"role": "user", "parts": [{"text": request.message}]})

    try:
        # Resposta rápida com buffer de contexto otimizado [cite: 2026-03-05]
        response = client.models.generate_content(
            model="gemini-3-flash-preview",
            contents=history[-12:],
            config={"system_instruction": SYSTEM_PROMPT}
        )

        ai_text = response.text.strip()

        # Detecção de Telefone para Relatório Full-Intel [cite: 2026-03-05]
        whatsapp_match = re.search(r"(\(?\d{2}\)?\s?\d{4,5}-?\d{4})", request.message)
        if whatsapp_match:
            pilar_match = re.search(r"(OrthoFlow|PsychFlow|UniFlow|ControlFlow|ProfitFlow)", str(history), re.I)
            lead_info = {
                "rota": "PILARES" if pilar_match else "PERSONALIZADO",
                "identificador": pilar_match.group(1) if pilar_match else "Projeto Sob Medida",
                "contato": whatsapp_match.group(1)
            }
            send_executive_lead_email(lead_info, history)

        history.append({"role": "model", "parts": [{"text": ai_text}]})
        return {"response": ai_text}

    except Exception as e:
        print(f"[ERROR]: {e}")
        return {"response": "O núcleo Anubis processou seus dados. Você tem mais alguma dúvida técnica?"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)