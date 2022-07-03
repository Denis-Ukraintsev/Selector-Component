import "./styles.css";

export class SelectorComponent {
  constructor(capitals) {
    this.arr = capitals;
    this.name = "";
    this.defaultOptions = ["no data"];
  }

  mapOptions(el) {
    return `<option class="option">${el}</option>`;
  }

  init(element) {
    this.element = element;

    element.innerHTML = `
      <select class="select">
      ${
        Array.isArray(this.arr)
          ? this.arr.map(this.mapOptions)
          : this.defaultOptions.map(this.mapOptions)
      }
      </select>
    `;
  }
}
