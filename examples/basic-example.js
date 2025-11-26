/**
 * Exemplo Básico - ZenWhats
 * 
 * Este exemplo demonstra como usar o ZenWhats para enviar mensagens básicas.
 */

const ZenWhats = require('../src/zenwhats');

// Inicializa o cliente
const client = new ZenWhats({
  session: 'my-session',
  headless: false
});

// Evento quando o cliente está pronto
client.on('ready', () => {
  console.log('✅ ZenWhats está pronto!');
  console.log('📱 Conectado ao WhatsApp');
});

// Evento quando recebe uma mensagem
client.on('message', (message) => {
  console.log('📨 Nova mensagem recebida:', message.body);
  console.log('👤 De:', message.from);
  
  // Responde automaticamente
  if (message.body.toLowerCase() === 'oi' || message.body.toLowerCase() === 'olá') {
    client.sendMessage(message.from, 'Olá! Como posso ajudar?');
  }
});

// Evento quando desconecta
client.on('disconnected', () => {
  console.log('❌ Cliente desconectado');
});

// Inicia o cliente
client.initialize()
  .then(() => {
    console.log('🚀 Cliente inicializado com sucesso!');
  })
  .catch((error) => {
    console.error('❌ Erro ao inicializar:', error);
  });

// Exemplo de envio de mensagem após 5 segundos
setTimeout(() => {
  const chatId = '5511999999999@c.us'; // Substitua pelo número desejado
  const message = 'Olá! Esta é uma mensagem do ZenWhats.';
  
  client.sendMessage(chatId, message)
    .then(() => {
      console.log('✅ Mensagem enviada com sucesso!');
    })
    .catch((error) => {
      console.error('❌ Erro ao enviar mensagem:', error);
    });
}, 5000);

