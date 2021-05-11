import React, { FunctionComponent, useEffect, useMemo, useState } from "react";

// material-ui
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

// history
import history from "../../../../utils/history";

// moment
import moment from "moment";

// actions
import { getInfo, setCurrentVechicle } from "../../../../redux/car/actions";

// redux
import { connect, ConnectedProps } from "react-redux";

// types
import { IVehAvail } from "../../../../redux/car/types";
import { RootState } from "../../../../redux/rootReducers";

// components
import CarItem from "./CarItem";

// theme
import { theme } from "../../../../theme";

// lodash
import * as _ from "lodash";
import { TrendingUpOutlined } from "@material-ui/icons";

// interface
interface Props extends PropsFromRedux {}

interface IVendor {
  name: string;
  code: string;
}
interface IVehicle extends IVehAvail {
  vendor: IVendor;
}

const useStyles = makeStyles({
  legendContainer: {
    borderRadius: 5,
    boxShadow: "5px 5px 18px -10px #000000",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: theme.palette.primary.light,
  },
  message: {
    borderRadius: 5,
    boxShadow: "5px 5px 18px -10px #000000",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: theme.palette.grey[100],
    display: "flex",
    justifyContent: "center",
  },

  filtersContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "5px 5px 18px -10px #000000",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: theme.palette.primary.contrastText,
  },
});

const CarList: FunctionComponent<Props> = (props) => {
  // classes
  const classes = useStyles();

  // hooks
  const [selectedVendor, setSelectedVendor] = useState<any>(undefined);
  const [selectedTransmissionType, setSelectedTransmissionType] =
    useState<any>(undefined);
  const [searchText, setSearchText] = useState<string>("");

  const [vehicleList, setVehicleList] = useState<IVehicle[]>([]);
  const [vendorList, setVendorList] = useState<IVendor[]>([]);
  const [transmissionTypeList, setTransmissionTypeList] = useState<string[]>(
    []
  );

  // console.log("rerendeering..");

  useEffect(() => {
    props.getInfo();
  }, []);

  useEffect(() => {
    const sortedVehiclesList: IVehicle[] = [];
    const vendors: IVendor[] = [];
    const transmissionTypes: string[] = [];

    props.car.CarInfo[0]?.VehAvailRSCore.VehVendorAvails.forEach((vendor) => {
      const currentVendor: IVendor = {
        name: vendor.Vendor.Name,
        code: vendor.Vendor.Code,
      };

      // add vendor to vendor list
      vendors.push(currentVendor);
      vendor.VehAvails.forEach((vehicle) => {
        // add vehicle to vehicle list
        sortedVehiclesList.push({
          ...vehicle,
          vendor: currentVendor,
        });

        // add transmission type to transmission type list
        if (!transmissionTypes.includes(vehicle.Vehicle.TransmissionType)) {
          transmissionTypes.push(vehicle.Vehicle.TransmissionType);
        }
      });
    });

    // update status
    setVehicleList(sortedVehiclesList);
    setVendorList(vendors);
    setTransmissionTypeList(transmissionTypes);
  }, [props.car.CarInfo]);

  const sortedVehicles = useMemo(() => {
    let sortedVehiclesList: IVehicle[] = [];

    // sort by price
    sortedVehiclesList.push(
      ..._.sortBy(vehicleList, [
        function (o) {
          return Number(o.TotalCharge.EstimatedTotalAmount);
        },
      ])
    );

    // sort by vendor
    if (selectedVendor) {
      sortedVehiclesList = sortedVehiclesList.filter(
        (vehicle) => vehicle.vendor.code === selectedVendor
      );
    }

    // sort by transmission type
    if (selectedTransmissionType) {
      sortedVehiclesList = sortedVehiclesList.filter(
        (vehicle) =>
          vehicle.Vehicle.TransmissionType === selectedTransmissionType
      );
    }

    // sort by text
    if (searchText) {
      sortedVehiclesList = sortedVehiclesList.filter((vehicle) => {
        if (
          vehicle.Vehicle.VehMakeModel.Name.toLocaleLowerCase().includes(
            searchText.toLocaleLowerCase()
          )
        ) {
          return true;
        }
      });
    }

    return sortedVehiclesList;
  }, [vehicleList, selectedVendor, selectedTransmissionType, searchText]);

  if (props.car.loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <h3>Cars</h3>

      {/* legend */}
      <div className={classes.legendContainer}>
        <Grid container>
          <Grid item md={6} sm={12}>
            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                PickUp DateTime:
              </Typography>
              <Typography variant="caption">
                {` ${moment(
                  props.car.CarInfo[0]?.VehAvailRSCore.VehRentalCore
                    .PickUpDateTime
                ).format("MMMM D, Yr")}`}
              </Typography>
            </div>

            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                Return DateTime:
              </Typography>
              <Typography variant="caption">
                {` ${moment(
                  props.car.CarInfo[0]?.VehAvailRSCore.VehRentalCore
                    .ReturnDateTime
                ).format("MMMM D, Yr")}`}
              </Typography>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                PickUp Location:
              </Typography>
              <Typography variant="caption">
                {` ${props.car.CarInfo[0]?.VehAvailRSCore.VehRentalCore.PickUpLocation.Name}`}
              </Typography>
            </div>

            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                Return Location:
              </Typography>
              <Typography variant="caption">
                {` ${props.car.CarInfo[0]?.VehAvailRSCore.VehRentalCore.ReturnLocation.Name}`}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* filters */}
      <div className={classes.filtersContainer}>
        <div>
          <Typography variant="caption" style={{ fontWeight: "bold" }}>
            Vendor
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedVendor || ""}
            onChange={(event) => setSelectedVendor(event.target.value)}
            style={{ minWidth: "100px", marginLeft: "10px" }}
          >
            <MenuItem value={undefined}>All</MenuItem>
            {vendorList.map((vendor) => (
              <MenuItem key={vendor.code} value={vendor.code}>
                {vendor.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <Typography variant="caption" style={{ fontWeight: "bold" }}>
            Transmission Type
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedTransmissionType || ""}
            onChange={(event) =>
              setSelectedTransmissionType(event.target.value)
            }
            style={{ minWidth: "100px", marginLeft: "10px" }}
          >
            <MenuItem value={undefined}>All</MenuItem>
            {transmissionTypeList.map((tp, index) => (
              <MenuItem key={index} value={tp}>
                {tp}
              </MenuItem>
            ))}
          </Select>
        </div>
        <TextField
          autoComplete="off"
          id="standard-basic"
          label="Search..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value.trim())}
        />
      </div>

      {/* list */}
      {sortedVehicles.map((vehicle, index) => {
        return (
          <CarItem
            key={index}
            {...vehicle}
            onClick={() => {
              props.setCurrentVechicle(vehicle);
              history.push(`/app/car/detail`);
            }}
          />
        );
      })}
      {sortedVehicles.length === 0 && (
        <div className={classes.message}>
          <Typography variant="caption">No vehicles found.</Typography>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return state;
};

const connector = connect(mapStateToProps, { getInfo, setCurrentVechicle });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CarList);
