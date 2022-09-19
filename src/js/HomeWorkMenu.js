import GamePlay from './taskOne/GamePlay';
import GameController from './taskOne/GameController';

export default class HomeWorkMenu {
  constructor() {
    this.container = null; // для контейнера в DOM
    this.taskOneInited = false;
  }

  static checkContainer(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
  }

  bindToDOM(container) {
    HomeWorkMenu.checkContainer(container);
    this.container = container;
  }

  bindTaskOneToDOM(container) {
    HomeWorkMenu.checkContainer(container);
    this.containerTaskOne = container;
  }

  // проверка на наличие контейнера
  checkBinding() {
    if (this.container === null) {
      throw new Error('GamePlay not bind to DOM');
    }
  }

  // отрисовка HTML
  drawUI() {
    this.checkBinding();
    this.container.innerHTML = `
      <div class="controls">
        <button data-id="taskOne" class="btn">Задача № 1</button>
      </div>
    `;
    this.taskOne = this.container.querySelector('[data-id=taskOne]');
    this.taskOne.addEventListener('click', (event) => this.onTaskOneClick(event));
  }

  onTaskOneClick(event) {
    event.preventDefault();

    this.taskRemover(); // удаление задачи

    if (!this.taskOneInited) { this.taskOneInit(); } // инициализация Задачи

    this.taskOneInited = !this.taskOneInited; // состояние Задачи
  }

  taskRemover() {
    if (this.taskOneInited) { this.taskOneRemove(); } // удаление Задачи
  }

  taskOneInit() {
    this.gamePlay = new GamePlay(); // создаём класс управления DOM
    this.gamePlay.bindToDOM(this.containerTaskOne); // присваеваем ему div taskOne из DOM
    this.gamePlay.drawUI(); // отрисовываем HTML в DOM
    this.gameController = new GameController(this.gamePlay); // создаём класс логики
    this.gameController.init(); // инициализируем класс логики
  }

  taskOneRemove() {
    this.gameController.gamePlay.clearHTML();
    this.gamePlay = '';
    this.gameController = '';
  }
}
