const images = [
    {
        src: 'images/t1.png',
        name: 'Luis Arce',
        description: 'Frontend Developer.'
    },
    {
        src: 'images/t2.png',
        name: 'Matias Salcedo',
        description: 'Hardware Specialist.'
    },
    {
        src: 'images/t3.png',
        name: 'Percy Muñiz',
        description: 'Mobile Developer.'
    },
    {
        src: 'images/t4.png',
        name: 'Luis Cisneros',
        description: 'Backend developer.'
    },
    {
        src: 'images/t5.png',
        name: 'Carlos',
        description: 'Web Developer.'
    }
];

let currentIndex = 0;

const imageDisplay = document.getElementById('imageDisplay');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const nameDisplay = document.getElementById('nameDisplay');
const descriptionDisplay = document.getElementById('descriptionDisplay');

function updateImage() {
    // Ocultar la imagen actual
    imageDisplay.classList.remove('show');

    // Cambiar la fuente de la imagen
    setTimeout(() => {
        imageDisplay.src = images[currentIndex].src; // Cambiar la fuente de la imagen
        nameDisplay.textContent = images[currentIndex].name; // Mostrar el nombre
        descriptionDisplay.textContent = images[currentIndex].description; // Mostrar la descripción
        imageDisplay.classList.add('show'); // Mostrar la imagen con la clase show
    }, 500); // Esperar a que la imagen se oculte
}

// Botón "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

// Botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Inicializar la imagen al cargar la página
updateImage();
