// Sakura Sushi main JavaScript

const sushiMenu = [
    { name: "California Roll", price: 8.5, description: "Crab, avocado, cucumber" },
    { name: "Dragon Roll", price: 12.0, description: "Eel, avocado, cucumber, tobiko" },
    { name: "Spicy Tuna Roll", price: 9.0, description: "Tuna, spicy mayo, scallion" },
    { name: "Salmon Nigiri", price: 6.0, description: "Fresh salmon over rice" },
    { name: "Miso Soup", price: 3.5, description: "Miso broth with tofu and seaweed" }
];

function renderMenu(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = sushiMenu
        .map(item => `
            <article class="menu-item">
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <span class="price">$${item.price.toFixed(2)}</span>
            </article>
        `)
        .join("");
}

function setupNavToggle(buttonId, navId) {
    const button = document.getElementById(buttonId);
    const nav = document.getElementById(navId);

    if (!button || !nav) return;

    button.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

function initSakuraSushi() {
    renderMenu("menu-container");
    setupNavToggle("nav-toggle", "main-nav");
}

document.addEventListener("DOMContentLoaded", initSakuraSushi);

