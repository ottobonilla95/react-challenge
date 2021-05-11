import { takeLatest, put, call } from "redux-saga/effects";

// types
import { GET_INFO } from "./types";

// actions
import * as CarActions from "./actions";

// api
import api from "../../api";

function* getInfo() {
  try {
    const { data } = yield call(() => {
      return api.get("http://www.cartrawler.com/ctabe/cars.json");
    });

    let stringData = JSON.stringify(data);
    stringData = stringData.split("@").join("");

    yield put(CarActions.getInfoSuccess(JSON.parse(stringData)));
  } catch (ex) {
    yield put(CarActions.getInfoFailed());
  }
}

export default function* () {
  yield takeLatest(GET_INFO, getInfo);
}
