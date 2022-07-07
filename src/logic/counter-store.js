import { legacy_createStore } from "redux";

export const counterAction = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  UPDATE: "UPDATE",
  START: "START",
  TOTAL: "TOTAL",
};

export const counterName = {
  COUNT: "USER-CART-COUNT",
  CART: "USER-CART",
  DETAIL: "USER-DETAIL",
  TOTAL: "USER-TOTAL",
  START: "START",
};

// funzione redux
const counterReducer = (
  //inizializziamo lo stato
  state = { count: 0, cartArray: [], total: 0 },
  action
) => {
  if (action.type === counterAction.INCREMENT) {
    return {
      ...state, // prendiamo lo stato precedente e aggiungiamo a count
      count: parseInt(sessionStorage.getItem(counterName.COUNT)) + 1,
    };
  }

  if (action.type === counterAction.DECREMENT) {
    return {
      ...state, // prendiamo lo stato precedente e sottraiamo a count
      count: parseInt(sessionStorage.getItem(counterName.COUNT)) - 1,
    };
  }

  if (action.type === counterAction.UPDATE) {
    if (!sessionStorage.getItem(counterName.TOTAL)) {
      sessionStorage.setItem(counterName.TOTAL, 0);
    } //update serve per aggiornare gli stati del carrello, (vedi dispatch)

    return {
      count: parseInt(sessionStorage.getItem(counterName.COUNT)),
      cartArray: JSON.parse(
        "[" + sessionStorage.getItem(counterName.CART) + "]"
      ),
      total: sessionStorage.getItem(counterName.TOTAL),
    };
  }
  //lo start mi sa che non serve
  if (action.type === counterAction.START) {
    if (!sessionStorage.getItem(counterName.COUNT)) {
      sessionStorage.setItem(counterName.COUNT, 0);
    }
    return {
      ...state,
      count: parseInt(sessionStorage.getItem(counterName.COUNT)),
      total: sessionStorage.getItem(counterName.TOTAL),
    };
  }

  return state;
};

const counterStore = legacy_createStore(counterReducer);
export default counterStore;
