import AbstractView from "./abstract-view.js";

const createTripCostTemplate = (events) => {
  let price = 0;

  for (let i = 0; i < events.length; i++) {
    price += events[i].price;
  }

  return `<p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
          </p>`;
};

export default class TripCost extends AbstractView {
  constructor(events) {
    super();
    this._events = events;
  }

  getTemplate() {
    return createTripCostTemplate(this._events);
  }
}
