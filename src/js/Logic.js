export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.showText = this.showText.bind(this);
  }

  init() {
    this.gui.btn.addEventListener('click', this.showText);
  }

  showText() {
    if (!this.gui.conteiner.classList.contains('hidden-test')) {
      this.gui.conteiner.classList.add('hidden');
      this.gui.conteiner.classList.remove('show');
      this.gui.conteiner.classList.add('hidden-test');
      setTimeout(() => {
        this.gui.conteiner.classList.remove('hidden');
      }, 1000);
    } else {
      this.gui.conteiner.classList.remove('hidden');
      this.gui.conteiner.classList.remove('hidden-test');
      this.gui.conteiner.classList.add('show');
      setTimeout(() => {
        this.gui.conteiner.classList.remove('show');
      }, 1000);
    }
  }
}
