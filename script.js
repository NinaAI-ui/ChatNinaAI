document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const chatContainer = document.getElementById('chat-container');

    const handleSendMessage = () => {
        const messageText = chatInput.value.trim();

        if (messageText !== '') {
            // Cria um novo elemento para a mensagem do usuário
            const userMessage = document.createElement('div');
            userMessage.className = 'chat-message';
            userMessage.textContent = messageText;

            // Adiciona a mensagem ao contêiner de chat
            chatContainer.appendChild(userMessage);

            // Limpa o campo de entrada
            chatInput.value = '';

            // Rola para a última mensagem
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // Futuramente: aqui você enviaria a mensagem para a API de IA
            // e criaria uma resposta.
            console.log("Mensagem do usuário enviada:", messageText);
        }
    };

    // Enviar mensagem ao clicar no botão
    sendButton.addEventListener('click', handleSendMessage);

    // Enviar mensagem ao pressionar "Enter"
    chatInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita quebra de linha
            handleSendMessage();
        }
    });
});
