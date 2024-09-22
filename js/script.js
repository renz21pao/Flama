// Código para la página de inicio
if (document.querySelector('.inicio')) {
    const comenzarBtn = document.getElementById('comenzarBtn');
    const nombreInput = document.getElementById('nombreInput');

    comenzarBtn.addEventListener('click', () => {
        const nombre = nombreInput.value.trim();
        if (nombre) {
            localStorage.setItem('nombreEnamorada', nombre);
            window.location.href = 'index2.html';
        } else {
            alert('Por favor, ingresa tu nombre');
        }
    });
}

// Código para la página de flores
if (document.querySelector('.flores')) {
    const nombre = localStorage.getItem('nombreEnamorada') || 'mi amor';

    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.top = Math.random() * window.innerHeight + 'px';

        for (let i = 0; i < 5; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.transform = `rotate(${i * 72}deg)`;
            flower.appendChild(petal);
        }

        const center = document.createElement('div');
        center.className = 'center';
        flower.appendChild(center);

        document.body.appendChild(flower);

        animateFlower(flower);
    }

    function animateFlower(flower) {
        let x = parseFloat(flower.style.left);
        let y = parseFloat(flower.style.top);
        let vx = Math.random() * 2 - 1;
        let vy = Math.random() * 2 - 1;

        function update() {
            x += vx;
            y += vy;

            if (x < 0 || x > window.innerWidth) vx = -vx;
            if (y < 0 || y > window.innerHeight) vy = -vy;

            flower.style.left = x + 'px';
            flower.style.top = y + 'px';

            requestAnimationFrame(update);
        }

        update();
    }

    function initializeFlowers() {
        for (let i = 0; i < 20; i++) {
            createFlower();
        }
    }

    function moveCard() {
        const card = document.querySelector('.card');
        let x = Math.random() * (window.innerWidth - card.offsetWidth);
        let y = Math.random() * (window.innerHeight - card.offsetHeight);
        
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
    }

    function showResponse(isYes) {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = '';
        responseMessage.classList.remove('hidden');

        if (isYes) {
            responseMessage.textContent = `¡Te quiero muchísimo, ${nombre}! ❤️`;
            createConfetti();
        } else {
            responseMessage.textContent = 'Oh no... 😢';
            createSadFaces();
        }

        setTimeout(() => {
            responseMessage.classList.add('hidden');
        }, 5000);
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * window.innerWidth}px`;
            confetti.style.top = `-10px`;
            confetti.style.backgroundColor = getRandomColor();
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    function getRandomColor() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createSadFaces() {
        for (let i = 0; i < 20; i++) {
            const sadFace = document.createElement('div');
            sadFace.className = 'sad-face';
            sadFace.textContent = '😢';
            sadFace.style.left = `${Math.random() * window.innerWidth}px`;
            sadFace.style.top = `${Math.random() * window.innerHeight}px`;
            document.body.appendChild(sadFace);

            setTimeout(() => {
                sadFace.remove();
            }, 3000);
        }
    }

    window.addEventListener('load', () => {
        initializeFlowers();
        moveCard();

        const siButton = document.getElementById('siButton');
        const noButton = document.getElementById('noButton');

        siButton.addEventListener('click', () => {
            showResponse(true);
        });

        noButton.addEventListener('click', () => {
            showResponse(false);
        });
    });

    setInterval(moveCard, 3000);
}

document.getElementById('comenzarBtn').addEventListener('click', function () {
    const nombre = document.getElementById('nombreInput').value;
    if (nombre) {
        window.location.href = 'index2.html';  // Redirecciona al archivo correcto
    }
});
