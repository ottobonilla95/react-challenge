import React, { FunctionComponent, useEffect } from "react";

//  material ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import PeopleIcon from "@material-ui/icons/People";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import WorkIcon from "@material-ui/icons/Work";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";

// types
import { IVehAvail } from "../../../../redux/car/types";

// interface
interface Props extends IVehAvail {
  onClick: () => void;
  vendor: { name: string; code: string };
}

const useStyles = makeStyles({
  image: {
    width: "100%",
  },
  vehicleContainer: {
    borderRadius: 5,
    cursor: "pointer",
    boxShadow: "5px 5px 18px -10px #000000",
    marginBottom: "20px",
  },
  infoContainer: {
    padding: 10,
  },
});

const CarItem: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.vehicleContainer} onClick={() => props.onClick()}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <img
            src={props.Vehicle.PictureURL}
            className={classes.image}
            data-testid="car-image"
          />
        </Grid>
        <Grid item md={9} xs={12}>
          <div className={classes.infoContainer}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" data-testid="car-VehMakeModel">
                {props.Vehicle.VehMakeModel.Name}
              </Typography>
              <Tooltip title="Air Condition">
                <Chip
                  icon={
                    props.Status === "Available" ? (
                      <EmojiEmotionsIcon />
                    ) : (
                      <SentimentDissatisfiedIcon />
                    )
                  }
                  label={`${props.Status}`}
                  style={{
                    marginBottom: "10px",
                  }}
                  color={props.Status === "Available" ? "primary" : "default"}
                  clickable
                  data-testid="car-Status"
                />
              </Tooltip>
            </div>
            <Divider />
            <Grid container spacing={3}>
              <Grid item md={8} xs={12}>
                <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                  Vehicle
                </Typography>
                <div style={{ display: "block" }}>
                  <Typography variant="caption" style={{ fontWeight: "bold" }}>
                    Code:
                  </Typography>
                  <Typography variant="caption" data-testid="car-Code">
                    {` ${props.Vehicle.Code}`}
                  </Typography>
                </div>
                <div style={{ display: "block" }}>
                  <Typography variant="caption" style={{ fontWeight: "bold" }}>
                    Code Context:
                  </Typography>
                  <Typography variant="caption" data-testid="car-CodeContext">
                    {` ${props.Vehicle.CodeContext}`}
                  </Typography>
                </div>
                <div style={{ display: "block" }}>
                  <Typography variant="caption" style={{ fontWeight: "bold" }}>
                    Drive Type:
                  </Typography>
                  <Typography variant="caption" data-testid="car-DriveType">
                    {` ${props.Vehicle.DriveType}`}
                  </Typography>
                </div>
                <div style={{ display: "block" }}>
                  <Typography variant="caption" style={{ fontWeight: "bold" }}>
                    Rate Total Amount:
                  </Typography>
                  <Typography
                    variant="caption"
                    data-testid="car-RateTotalAmount"
                  >
                    {` ${props.TotalCharge.RateTotalAmount} ${props.TotalCharge.CurrencyCode}`}
                  </Typography>
                </div>

                <div style={{ display: "block" }}>
                  <Typography variant="caption" style={{ fontWeight: "bold" }}>
                    Estimated Total Amount:
                  </Typography>
                  <Typography
                    variant="caption"
                    data-testid="car-EstimatedTotalAmount"
                  >
                    {` ${props.TotalCharge.EstimatedTotalAmount} ${props.TotalCharge.CurrencyCode}`}
                  </Typography>
                </div>
                <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                  Features:
                </Typography>

                <Tooltip title="Transmission Type">
                  <Chip
                    icon={<DirectionsCarIcon />}
                    label={`${props.Vehicle.TransmissionType}`}
                    clickable
                    color="primary"
                    variant="outlined"
                    style={{ margin: "1px" }}
                    data-testid="car-TransmissionType"
                  />
                </Tooltip>
                <Tooltip title="Fuel Type">
                  <Chip
                    icon={<LocalGasStationIcon />}
                    label={`${props.Vehicle.FuelType}`}
                    clickable
                    style={{ margin: "1px" }}
                    variant="outlined"
                    color="primary"
                    data-testid="car-FuelType"
                  />
                </Tooltip>
                <Tooltip title="Passenger Quantity">
                  <Chip
                    icon={<PeopleIcon />}
                    label={`${props.Vehicle.PassengerQuantity}`}
                    clickable
                    variant="outlined"
                    style={{ margin: "1px" }}
                    color="primary"
                    data-testid="car-PassengerQuantity"
                  />
                </Tooltip>
                <Tooltip title="Baggage Quantity">
                  <Chip
                    icon={<WorkIcon />}
                    label={`${props.Vehicle.BaggageQuantity}`}
                    clickable
                    variant="outlined"
                    style={{ margin: "1px" }}
                    color="primary"
                    data-testid="car-BaggageQuantity"
                  />
                </Tooltip>
                <Tooltip title="Door Count">
                  <Chip
                    icon={<AirportShuttleIcon />}
                    variant="outlined"
                    label={`${props.Vehicle.DoorCount}`}
                    style={{ margin: "1px" }}
                    clickable
                    color="primary"
                    data-testid="car-DoorCount"
                  />
                </Tooltip>
                <Tooltip title="Air Condition">
                  <Chip
                    icon={<AcUnitIcon />}
                    label={`${props.Vehicle.AirConditionInd ? "Yes" : "No"}`}
                    style={{
                      margin: "1px",
                      backgroundColor: props.Vehicle.AirConditionInd
                        ? "lightBlue"
                        : "#f6685e",
                    }}
                    clickable
                    data-testid="car-AirConditionInd"
                  />
                </Tooltip>
              </Grid>

              <Grid item md={4} xs={12}>
                <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                  Vendor
                </Typography>
                <div style={{ display: "block" }}>
                  <Typography variant="caption" style={{ fontWeight: "bold" }}>
                    Name:
                  </Typography>
                  <Typography variant="caption" data-testid="car-vendorname">
                    {` ${props.vendor.name}`}
                  </Typography>
                </div>
                <div style={{ display: "block" }}>
                  <Typography variant="caption" style={{ fontWeight: "bold" }}>
                    Code:
                  </Typography>
                  <Typography variant="caption" data-testid="car-vendorcode">
                    {` ${props.vendor.code}`}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(CarItem);
