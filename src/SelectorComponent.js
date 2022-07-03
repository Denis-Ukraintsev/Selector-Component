import "./styles.css";

export class SelectorComponent {
  constructor(capitals) {
    this.arr = capitals;
    this.defaultOptions = ["no data", "empty"];
  }

  mapOptions(el) {
    return `<option class="option">${el}</option>`;
  }

  init(element) {
    element.innerHTML = `
      <select class="select">
        ${
          Array.isArray(this.arr) && this.arr.length !== 0
            ? this.arr.map(this.mapOptions)
            : this.defaultOptions.map(this.mapOptions)
        }}
      </select>
    `;
  }
}
