// Array con la información de los eventos
const eventos = [
    {
        imagen: "./assets/images/evento1/evento cards.png",
        img: "./assets/images/evento1/evento modal.png",
        nombre: "ExpresArte",
        descripcionCorta: "Una clase muy divertida para expresarte.",
        fecha: "Del 22 al 26 de julio",
        precio: "GRATIS",
        descripcionLarga: "Disfruta de una experiencia revitalizante con una clase de yoga dirigida a expresarte por medio del arte donde tambien habran juegos para niños.",
    },
    {
        imagen: "taller-respiracion.jpg",
        nombre: "Taller de Respiración",
        descripcionCorta: "Técnicas de respiración para niños.",
        fecha: "12 de Abril, 2025",
        precio: "$15,000",
        descripcionLarga: "Aprende junto a tus hijos técnicas efectivas de respiración para mejorar la concentración y reducir el estrés. Sesión adaptada para toda la familia.",
    },
    {
        imagen: "meditacion-creativa.jpg",
        nombre: "Meditación Creativa",
        descripcionCorta: "Una experiencia de meditación divertida.",
        fecha: "20 de Abril, 2025",
        precio: "$25,000",
        descripcionLarga: "Explora la creatividad de los pequeños a través de esta sesión única de meditación guiada, enfocada en liberar la imaginación.",
    }
];

// Función para mostrar las tarjetas
function mostrarEventos() {
    const container = document.getElementById("event-cards-container");
    container.innerHTML = ""; // Limpiar contenido previo

    eventos.forEach((evento, index) => {
        const card = document.createElement("div");
        card.classList.add("event-card");

        card.innerHTML = `
            <img src="${evento.imagen}" alt="${evento.nombre}" class="event-img">
            <h3>${evento.nombre}</h3>
            <p>${evento.descripcionCorta}</p>
            <p class="price">${evento.precio}</p>
            <button class="btn-ver-mas" onclick="mostrarModal(${index})">Ver más</button>
        `;

        container.appendChild(card);
    });
}

// Función para mostrar el modal
function mostrarModal(index) {
    const modal = document.getElementById("event-modal");
    const modalContent = document.getElementById("modal-content");

    const evento = eventos[index];
    modalContent.innerHTML = `
        <h2>${evento.nombre}</h2>
        <img src="${evento.img}" alt="${evento.nombre}" class="modal-img">
        <p><strong>Fecha:</strong> ${evento.fecha}</p>
        <p><strong>Precio:</strong> ${evento.precio}</p>
        <p>${evento.descripcionLarga}</p>
        <button class="btn-cerrar" onclick="cerrarModal()">Cerrar</button>
    `;

    modal.style.display = "block"; // Mostrar modal
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById("event-modal");
    modal.style.display = "none"; // Ocultar modal
}

// Mostrar los eventos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarEventos);


let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove("active");
        if (index === currentIndex) {
            item.classList.add("active");
        }
    });
}

function moveSlide(step) {
    currentIndex = (currentIndex + step + totalItems) % totalItems;
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateCarousel();
}

function autoSlide() {
    moveSlide(1);
}

// Cambiar de imagen automáticamente cada 3 segundos
setInterval(autoSlide, 3000);

// Actualizar carrusel al cargar
document.addEventListener("DOMContentLoaded", updateCarousel);
