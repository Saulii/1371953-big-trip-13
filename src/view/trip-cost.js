import {createElement} from "../utils.js";

const createTripCostTemplate = (events) => {
  let price = 0;

  for (let i = 0; i < events.length; i++) {
    price += events[i].price;
  }

  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
          </p>`;
};

export default class TripCost {
  constructor(events) {
    this._events = events;
    this._element = null;
  }

  getTemplate() {
    return createTripCostTemplate(this._events);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
