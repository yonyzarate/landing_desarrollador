document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile functionality
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");

  // Funciona mostrar y ocultar menu
  const showHiddenMenu = () => {
    let show = document.querySelector(".menu-mobile--show");

    if (show) {
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  };

  // Al dar click al boton de menú mostrar el menu de navegación
  mobile_btn.addEventListener("click", showHiddenMenu);

  // Al redimensionar la pantalla ocultar el menu si es necesario
  window.addEventListener("resize", () => {
    let window_width = parseInt(document.body.clientWidth);

    if (window_width >= 1000) {
      mobile_menu.classList.remove("menu-mobile--show");
    }
  });

  // Poder cerrar el menu con el boton x
  let btn_close = document.querySelector(".menu-mobile__close");

  btn_close.addEventListener("click", showHiddenMenu);

  // Desplegar submenus
  let menu_item = document.querySelectorAll(".menu-mobile__item");

  menu_item.forEach((item) => {
    item.addEventListener("click", (event) => {
      let submenu = item.lastElementChild;

      if (submenu.className === "menu-mobile__submenu-mobile") {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      }
    });
  });
});
