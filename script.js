document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.querySelector('.background-container');
    const colors = ['purple', 'blue', 'pink', 'dark-blue'];

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble', colors[Math.floor(Math.random() * colors.length)]);
        
        const size = Math.random() * 200 + 100; // Tamanho entre 100px e 300px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;

        // Ajustar a duração da animação para variar o movimento
        const animationDuration = Math.random() * 15 + 10; // Duração entre 10s e 25s
        bubble.style.animationDuration = `${animationDuration}s`;
        
        backgroundContainer.appendChild(bubble);
    }

    // Crie algumas bolhas para começar
    for (let i = 0; i < 5; i++) {
        createBubble();
    }
});
            handleSendMessage();
        }
    });
});
