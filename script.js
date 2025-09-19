const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// IMPORTANTE: Cole a URL que o Vercel te deu aqui!
// Lembre-se de adicionar /chat no final.
const serverUrl = 'https://SUA_URL_DO_VERCEL.vercel.app/chat';

document.addEventListener('DOMContentLoaded', () => {

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        appendMessage(userMessage, 'user');
        userInput.value = '';

        showTypingIndicator();

        try {
            const response = await fetch(serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: userMessage }),
            });

            if (!response.ok) {
                throw new Error(`Erro do servidor: ${response.status}`);
            }

            const data = await response.json();
            
            removeTypingIndicator();
            appendMessage(data.text, 'nina');

        } catch (error) {
            console.error('Erro:', error);
            removeTypingIndicator();
            appendMessage('Desculpe, houve um erro ao conectar com a IA.', 'nina');
        }

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
});
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
