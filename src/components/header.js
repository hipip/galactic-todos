import Logo from "../assets/logo.png";

function toggleSidebar() {
    document.querySelector(".sidebar")?.classList.toggle("closed");
}

function sidebarButton() {
    const sidebarBtn = document.createElement("button");
    sidebarBtn.classList.add("sidebar-btn");

    sidebarBtn.appendChild(document.createElement("div"));
    sidebarBtn.appendChild(document.createElement("div"));
    sidebarBtn.appendChild(document.createElement("div"));

    sidebarBtn.type = "button";

    sidebarBtn.onclick = () => toggleSidebar();
    return sidebarBtn;
}

export default function header() {
    const header = document.createElement("div");
    const logoContainer = document.createElement("div");
    const logoImg = new Image();
    const logoText = document.createElement("p");
    const sidebarBtn = sidebarButton();

    header.setAttribute("id", "header");
    logoContainer.classList.add("logo-cont");
    logoImg.setAttribute("id", "logo");
    logoText.classList.add("logo-text");

    logoImg.src = Logo;
    logoText.textContent = "Galactic Todos";

    logoContainer.appendChild(logoImg);
    logoContainer.appendChild(logoText);

    header.appendChild(sidebarBtn);
    header.appendChild(logoContainer);

    return header;
}
