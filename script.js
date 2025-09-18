document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        // Exibir a mensagem do usuário na tela
        appendMessage(userMessage, 'user');
        userInput.value = '';

        // Simular a resposta da IA e mostrar o "digitando..."
        showTypingIndicator();

        // Substitua este bloco de código pela chamada real à API do Gemini
        // Exemplo: const geminiResponse = await getGeminiResponse(userMessage);

        // Apenas para demonstração, removemos o indicador e adicionamos uma resposta de teste
        setTimeout(() => {
            removeTypingIndicator();
            const ninaResponse = `Você disse: "${userMessage}". Estou pronta para conversar.`;
            appendMessage(ninaResponse, 'nina');
        }, 1500);

        // Rolar para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'nina-message');

        const messageP = document.createElement('p');
        messageP.textContent = text;

        messageDiv.appendChild(messageP);
        chatBox.appendChild(messageDiv);

        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.classList.add('nina-message');
        typingIndicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    const style = document.createElement('style');
    style.innerHTML = `
        #typing-indicator .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin: 0 2px;
            border-radius: 50%;
            background-color: #fff;
            animation: bounce 1.4s infinite ease-in-out both;
        }
        #typing-indicator .dot:nth-child(1) { animation-delay: -0.32s; }
        #typing-indicator .dot:nth-child(2) { animation-delay: -0.16s; }
        #typing-indicator .dot:nth-child(3) { animation-delay: 0s; }

        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1.0); }
        }
    `;
    document.head.appendChild(style);
});
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'nina-message');
        
        const messageP = document.createElement('p');
        messageP.textContent = text;
        
        messageDiv.appendChild(messageP);
        chatBox.appendChild(messageDiv);
        
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.classList.add('nina-message');
        typingIndicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Animação do indicador de digitação no CSS
    const style = document.createElement('style');
    style.innerHTML = `
        #typing-indicator .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin: 0 2px;
            border-radius: 50%;
            background-color: #fff;
            animation: bounce 1.4s infinite ease-in-out both;
        }
        #typing-indicator .dot:nth-child(1) { animation-delay: -0.32s; }
        #typing-indicator .dot:nth-child(2) { animation-delay: -0.16s; }
        #typing-indicator .dot:nth-child(3) { animation-delay: 0s; }

        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1.0); }
        }
    `;
    document.head.appendChild(style);
});
