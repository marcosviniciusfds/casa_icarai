class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
  }

  handleOutsideClick(event) {
    if (
      this.navList.classList.contains(this.activeClass) &&
      !this.navList.contains(event.target) &&
      !this.mobileMenu.contains(event.target)
    ) {
      this.closeMenu();
    }
  }

  closeMenu() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
  }

  addClickEvent() {
    // abrir/fechar no botão
    this.mobileMenu.addEventListener("click", this.handleClick);

    // fechar ao clicar em link
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => this.closeMenu());
    });

    // fechar ao clicar fora
    document.addEventListener("click", this.handleOutsideClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();