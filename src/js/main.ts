import "../css/main.css";

// Select DOM items
const menuBtn = document.querySelector(".menu-btn") as HTMLButtonElement;
const menu = document.querySelector(".menu") as HTMLElement;
const menuNav = document.querySelector(".menu-nav") as HTMLElement;
const menuBranding = document.querySelector(".menu-branding") as HTMLElement;
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

const toggleMenu = () => {
  showMenu = !showMenu;

  menuBtn.classList.toggle("close", showMenu);
  menu.classList.toggle("show", showMenu);
  menuNav.classList.toggle("show", showMenu);
  menuBranding.classList.toggle("show", showMenu);
  navItems.forEach((item) => item.classList.toggle("show", showMenu));
};

menuBtn.addEventListener("click", toggleMenu);

// Register Service Worker for PWA (Production Only)
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Remove preload class and add ready class after page load
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
  // Small delay to ensure the browser has finished the first paint without transitions
  setTimeout(() => {
    document.body.classList.add("ready");
  }, 100);
});
