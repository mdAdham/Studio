var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var tabs = document.querySelectorAll("[data-tab-target]");
var tabContents = document.querySelectorAll("[data-tab-content]");

menuIcon.onclick = () => {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        var target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active");
        });
        target.classList.add("active");
    });
});