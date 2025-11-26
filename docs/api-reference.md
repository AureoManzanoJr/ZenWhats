# Referência da API

Documentação completa da API do ZenWhats.

## Visão Geral

A API do ZenWhats fornece uma interface simples e poderosa para interagir com o WhatsApp.

## Classes Principais

### ZenWhats

Classe principal para inicializar o cliente ZenWhats.

#### Construtor

```javascript
const client = new ZenWhats(options);
```

**Parâmetros:**
- `options` (Object): Opções de configuração
  - `session` (String): Nome da sessão
  - `headless` (Boolean): Executar em modo headless (padrão: false)

#### Métodos

##### `sendMessage(chatId, message)`

Envia uma mensagem para um chat.

**Parâmetros:**
- `chatId` (String): ID do chat (formato: número@c.us)
- `message` (String): Mensagem a ser enviada

**Retorna:** Promise

##### `on(event, callback)`

Registra um listener para eventos.

**Eventos disponíveis:**
- `ready`: Cliente está pronto
- `message`: Nova mensagem recebida
- `disconnected`: Cliente desconectado

## Exemplos

Consulte a pasta [examples](../examples/) para mais exemplos de uso.

## Suporte

Para dúvidas sobre a API, abra uma [Issue](https://github.com/AureoManzanoJr/ZenWhats/issues) ou entre em contato: aureomanzano@icloud.com

