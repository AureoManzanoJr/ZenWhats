"""
Exemplo Básico - ZenWhats
Este exemplo demonstra como usar o ZenWhats para enviar mensagens básicas.
"""

from zenwhats import ZenWhats
import time

# Inicializa o cliente
client = ZenWhats(
    session='my-session',
    headless=False
)

# Evento quando o cliente está pronto
@client.on('ready')
def on_ready():
    print('✅ ZenWhats está pronto!')
    print('📱 Conectado ao WhatsApp')

# Evento quando recebe uma mensagem
@client.on('message')
def on_message(message):
    print(f'📨 Nova mensagem recebida: {message.body}')
    print(f'👤 De: {message.from_}')
    
    # Responde automaticamente
    if message.body.lower() in ['oi', 'olá']:
        client.send_message(message.from_, 'Olá! Como posso ajudar?')

# Evento quando desconecta
@client.on('disconnected')
def on_disconnected():
    print('❌ Cliente desconectado')

# Inicia o cliente
try:
    client.initialize()
    print('🚀 Cliente inicializado com sucesso!')
    
    # Exemplo de envio de mensagem após 5 segundos
    time.sleep(5)
    chat_id = '5511999999999@c.us'  # Substitua pelo número desejado
    message = 'Olá! Esta é uma mensagem do ZenWhats.'
    
    client.send_message(chat_id, message)
    print('✅ Mensagem enviada com sucesso!')
    
except Exception as error:
    print(f'❌ Erro: {error}')

