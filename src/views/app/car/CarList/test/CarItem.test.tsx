import React from "react";

// testing-library
import { render, screen } from "@testing-library/react";

// types
import { IVehAvail } from "../../../../../redux/car/types";

// // components
import CarItem from "../CarItem";

const availableCar: IVehAvail = {
  Status: "Available",
  Vehicle: {
    AirConditionInd: true,
    TransmissionType: "Automatic",
    FuelType: "Petrol",
    DriveType: "Unspecified",
    PassengerQuantity: "5+",
    BaggageQuantity: "3",
    Code: "IFAR",
    CodeContext: "CARTRAWLER",
    DoorCount: "5",
    VehMakeModel: {
      Name: "Toyota Rav4 or similar",
    },
    PictureURL:
      "https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600",
  },
  TotalCharge: {
    RateTotalAmount: "878.98",
    EstimatedTotalAmount: "878.98",
    CurrencyCode: "CAD",
  },
};
const vendor = {
  name: "vendorname",
  code: "vendorcode",
};

it("Should render a car item with all its props", async () => {
  render(
    <CarItem
      Vehicle={availableCar.Vehicle}
      TotalCharge={availableCar.TotalCharge}
      Status={availableCar.Status}
      vendor={vendor}
      onClick={() => {}}
    />
  );

  expect(screen.getByTestId("car-image")).toHaveAttribute(
    "src",
    availableCar.Vehicle.PictureURL
  );

  expect(screen.getByTestId("car-VehMakeModel")).toHaveTextContent(
    availableCar.Vehicle.VehMakeModel.Name
  );

  expect(screen.getByTestId("car-Status")).toHaveTextContent(
    availableCar.Status
  );

  expect(screen.getByTestId("car-Code")).toHaveTextContent(
    availableCar.Vehicle.Code
  );
  expect(screen.getByTestId("car-CodeContext")).toHaveTextContent(
    availableCar.Vehicle.CodeContext
  );
  expect(screen.getByTestId("car-DriveType")).toHaveTextContent(
    availableCar.Vehicle.DriveType
  );
  expect(screen.getByTestId("car-RateTotalAmount")).toHaveTextContent(
    availableCar.TotalCharge.RateTotalAmount
  );
  expect(screen.getByTestId("car-EstimatedTotalAmount")).toHaveTextContent(
    availableCar.TotalCharge.EstimatedTotalAmount
  );
  expect(screen.getByTestId("car-TransmissionType")).toHaveTextContent(
    availableCar.Vehicle.TransmissionType
  );
  expect(screen.getByTestId("car-FuelType")).toHaveTextContent(
    availableCar.Vehicle.FuelType
  );
  expect(screen.getByTestId("car-PassengerQuantity")).toHaveTextContent(
    availableCar.Vehicle.PassengerQuantity
  );

  expect(screen.getByTestId("car-BaggageQuantity")).toHaveTextContent(
    availableCar.Vehicle.BaggageQuantity
  );

  expect(screen.getByTestId("car-DoorCount")).toHaveTextContent(
    availableCar.Vehicle.DoorCount
  );
  expect(screen.getByTestId("car-AirConditionInd")).toHaveTextContent("Yes");
  expect(screen.getByTestId("car-vendorname")).toHaveTextContent(vendor.name);
  expect(screen.getByTestId("car-vendorcode")).toHaveTextContent(vendor.code);
});
