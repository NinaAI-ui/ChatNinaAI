document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    const serverUrl = 'https://connect-nina-tlgn.vercel.app/chat';

    if (chatForm && userInput && chatBox) {
        // Log para confirmar que o script encontrou os elementos
        console.log("Elementos HTML encontrados. O script está funcionando.");

        chatForm.addEventListener('submit', async (e) => {
            // Previne a ação padrão de submissão do formulário, que é recarregar a página.
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
        console.error('Erro: Um ou mais elementos do chat não foram encontrados no HTML.');
    }

    // Funções auxiliares para o chat
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
                removeTypingIndicator();
                const errorMessage = `Desculpe, houve um erro ao conectar: ${error.message}`;
                appendMessage(errorMessage, 'nina');
            } finally {
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
    } else {
        console.error('Erro: O elemento com o id "chat-form" não foi encontrado.');
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
        // Se o formulário não for encontrado, mostra um erro no console.
        console.error('Erro: O elemento com o id "chat-form" não foi encontrado.');
    }


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
            
            removeTypingIndicator();
            appendMessage(data.text, 'nina');
        } catch (error) {
            console.error('Erro:', error);
            removeTypingIndicator();
            
            // **Aqui está a correção para mostrar o erro no chat:**
            const errorMessage = `Desculpe, houve um erro ao conectar: ${error.message}`;
            appendMessage(errorMessage, 'nina');
        } finally {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
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
            removeTypingIndicator();
            appendMessage(data.text, 'nina');
        } catch (error) {
            console.error('Erro:', error);
            removeTypingIndicator();
            appendMessage('Desculpe, houve um erro ao conectar com a IA.', 'nina');
        } finally {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
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
            appendMessage(data.text, 'nina');
        } catch (error) {
            console.error('Erro:', error);
            removeTypingIndicator();
            appendMessage('Desculpe, houve um erro ao conectar com a IA.', 'nina');
        } finally {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
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
