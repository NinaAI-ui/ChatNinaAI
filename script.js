const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

// Função para adicionar mensagens no chat
function addMessage(content, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message');
  msg.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
  msg.textContent = content;
  chatMessages.appendChild(msg);

  // Scroll para última mensagem
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Evento de Clique
sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    addMessage(message, 'user');
    chatInput.value = '';
    setTimeout(() => {
      addMessage("Echo: " + message, 'ai');
    }, 600);
  }
});

// Enter também envia
chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendBtn.click();
  }
});
