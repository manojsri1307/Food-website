function init() {
    const hamburger = document.querySelector(".img-component");
const sidebarCloseButton = document.querySelector(".sidebar-img");
const sidebarContainer = document.querySelector(".sidebar-section");

const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar")
}

const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar")
}

hamburger.addEventListener("click", openSidebar);
sidebarCloseButton.addEventListener("click", closeSidebar);
}

init();
