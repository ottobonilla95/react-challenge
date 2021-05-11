import { all } from "redux-saga/effects";

// sagas
import carSagas from "./car/sagas";

export default function* () {
  yield all([carSagas()]);
}
