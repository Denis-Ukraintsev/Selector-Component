import { SelectorComponent } from "../src/SelectorComponent";

const element = document.getElementById("app");

const selectorComponent = new SelectorComponent([
  "Stavropol",
  "Chelyabinsk",
  "Krasnodar",
  "Rostov-on-Don",
]);

selectorComponent.init(element);
