document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    const serverUrl = 'https://connect-nina-tlgn.vercel.app/chat';

    // Verifica se todos os elementos HTML necessários foram encontrados
    if (chatForm && userInput && chatBox) {
        chatForm.addEventListener('submit', async (e) => {
            // Esta linha é crucial para evitar que a página recarregue
            e.preventDefault();

            const userMessage = userInput.value.trim();
            if (!userMessage) return;

            appendMessage(userMessage, 'user');
            userInput.value = '';

            showTypingIndicator();

            try {
                const response = await fetch(serverUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt: userMessage })
                });

                if (!response.ok) {
                    const errorText = `Erro do servidor: ${response.status} - ${response.statusText}`;
                    throw new Error(errorText);
                }

                const data = await response.json();
                removeTypingIndicator();
                appendMessage(data.text, 'nina');
            } catch (error) {
                console.error('Erro:', error);
                removeTypingIndicator();
                const errorMessage = `Desculpe, houve um erro ao conectar: ${error.message}`;
                appendMessage(errorMessage, 'nina');
            } finally {
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
    } else {
        console.error('Erro: Um ou mais elementos do chat não foram encontrados no HTML. Verifique os IDs "chat-form", "user-input" e "chat-box".');
    }

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'nina-message');
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
t messageP = document.createElement('p');
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
