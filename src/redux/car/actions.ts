import {
  CarActions,
  GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_FAILED,
  IVehAvailRSCore,
  SET_CURRENT_VEHICLE,
  IVehAvail,
} from "./types";

// getInfo
export const getInfo = (): CarActions => {
  return { type: GET_INFO };
};

export const getInfoSuccess = (
  carInfo: { VehAvailRSCore: IVehAvailRSCore }[]
): CarActions => {
  return { type: GET_INFO_SUCCESS, payload: carInfo };
};

export const getInfoFailed = (): CarActions => {
  return { type: GET_INFO_FAILED };
};

export const setCurrentVechicle = (vehicle: IVehAvail): CarActions => {
  return { type: SET_CURRENT_VEHICLE, payload: vehicle };
};
