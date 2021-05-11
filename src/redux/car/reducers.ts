import {
  CarActions,
  GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_FAILED,
  ICarState,
  SET_CURRENT_VEHICLE,
} from "./types";

const initialState: ICarState = {
  CarInfo: [],
  loading: false,
  currentVehicle: undefined,
};

const CarReducer = (state = initialState, action: CarActions): ICarState => {
  switch (action.type) {
    case GET_INFO:
      return { ...state, loading: true };
    case GET_INFO_SUCCESS:
      return { ...state, loading: false, CarInfo: action.payload };
    case GET_INFO_FAILED:
      return { ...state, loading: false };
    case SET_CURRENT_VEHICLE:
      return { ...state, loading: false, currentVehicle: action.payload };
    default:
      return state;
  }
};

export default CarReducer;
