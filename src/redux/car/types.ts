// GET_CAR_LIST
export const GET_INFO = "[CAR] GET_INFO";
export const GET_INFO_SUCCESS = "[CAR] GET_INFO_SUCCESS";
export const GET_INFO_FAILED = "[CAR] GET_INFO_FAILED";

// SET_CURRENT_CAR
export const SET_CURRENT_VEHICLE = "[CAR] SET_CURRENT_VEHICLE";

// state
export interface ICarState {
  CarInfo: { VehAvailRSCore: IVehAvailRSCore }[];
  loading: boolean;
  currentVehicle: IVehAvail | undefined;
}

// models
export interface IVehAvailRSCore {
  VehRentalCore: {
    PickUpDateTime: string;
    ReturnDateTime: string;
    PickUpLocation: {
      Name: string;
    };
    ReturnLocation: {
      Name: string;
    };
  };
  VehVendorAvails: IVehVendorAvail[];
}

interface IVehVendorAvail {
  Vendor: {
    Code: string;
    Name: string;
  };
  VehAvails: IVehAvail[];
}

export interface IVehAvail {
  Status: string;
  Vehicle: {
    AirConditionInd: boolean;
    TransmissionType: string;
    FuelType: string;
    DriveType: string;
    PassengerQuantity: string;
    BaggageQuantity: string;
    Code: string;
    CodeContext: string;
    DoorCount: string;
    VehMakeModel: {
      Name: string;
    };
    PictureURL: string;
  };
  TotalCharge: {
    RateTotalAmount: string;
    EstimatedTotalAmount: string;
    CurrencyCode: string;
  };
}

// // // actions
// IGetCarListAction
interface IGetInfoAction {
  type: typeof GET_INFO;
}

interface IGetInfoActionSuccess {
  type: typeof GET_INFO_SUCCESS;
  payload: { VehAvailRSCore: IVehAvailRSCore }[];
}

interface IGetInfoActionFailed {
  type: typeof GET_INFO_FAILED;
}

interface ISetVechicle {
  type: typeof SET_CURRENT_VEHICLE;
  payload: IVehAvail;
}

export type CarActions =
  | IGetInfoAction
  | IGetInfoActionSuccess
  | IGetInfoActionFailed
  | ISetVechicle;
