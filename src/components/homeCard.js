export default function homeCard(title, value, color) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardValue = document.createElement("p");

    card.classList.add("home-card");
    cardTitle.classList.add("home-card-title");
    cardValue.classList.add("home-card-value");

    cardTitle.innerText = title;
    cardValue.innerText = 0;

    card.style.setProperty("--color", color + "2A");
    card.style.borderColor = color;
    cardValue.style.color = color;

    const incrementValue = () => {
        if (value > 0) cardValue.textContent = +cardValue.textContent + 1;
        if (parseInt(cardValue.textContent) >= value) clearInterval(valueInterval);
    };
    let valueInterval = setInterval(incrementValue, 30);

    card.appendChild(cardTitle);
    card.appendChild(cardValue);

    return card;
}
