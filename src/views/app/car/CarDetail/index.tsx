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
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
// history
import history from "../../../../utils/history";

// actions
import { getInfo, setCurrentVechicle } from "../../../../redux/car/actions";

// redux
import { connect, ConnectedProps } from "react-redux";

// types
import { RootState } from "../../../../redux/rootReducers";

// router
import { Redirect } from "react-router";

// interface
interface Props extends PropsFromRedux {}

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

const CarDetail: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  console.log(props.car.currentVehicle);
  if (!props.car.currentVehicle) {
    return <Redirect to="/app/car/list" />;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <img
            src={props.car.currentVehicle.Vehicle.PictureURL}
            className={classes.image}
          />
        </Grid>
        <Grid item md={9} xs={12}>
          <div className={classes.infoContainer}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">
                {props.car.currentVehicle.Vehicle.VehMakeModel.Name}
              </Typography>
              <Tooltip title="Back">
                <IconButton
                  aria-label="delete"
                  onClick={() => history.push("/app/car/list")}
                >
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Tooltip>
            </div>

            <Divider />

            <Chip
              icon={
                props.car.currentVehicle.Status === "Available" ? (
                  <EmojiEmotionsIcon />
                ) : (
                  <SentimentDissatisfiedIcon />
                )
              }
              label={`${props.car.currentVehicle.Status}`}
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
              color={
                props.car.currentVehicle.Status === "Available"
                  ? "primary"
                  : "default"
              }
              clickable
            />
            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                Code:
              </Typography>
              <Typography variant="caption">
                {` ${props.car.currentVehicle.Vehicle.Code}`}
              </Typography>
            </div>
            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                Code Context:
              </Typography>
              <Typography variant="caption">
                {` ${props.car.currentVehicle.Vehicle.CodeContext}`}
              </Typography>
            </div>
            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                Drive Type:
              </Typography>
              <Typography variant="caption">
                {` ${props.car.currentVehicle.Vehicle.DriveType}`}
              </Typography>
            </div>
            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                Rate Total Amount:
              </Typography>
              <Typography variant="caption">
                {` ${props.car.currentVehicle.TotalCharge.RateTotalAmount} ${props.car.currentVehicle.TotalCharge.CurrencyCode}`}
              </Typography>
            </div>

            <div style={{ display: "block" }}>
              <Typography variant="caption" style={{ fontWeight: "bold" }}>
                Estimated Total Amount:
              </Typography>
              <Typography variant="caption">
                {` ${props.car.currentVehicle.TotalCharge.EstimatedTotalAmount} ${props.car.currentVehicle.TotalCharge.CurrencyCode}`}
              </Typography>
            </div>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Features:
            </Typography>

            <Tooltip title="Transmission Type">
              <Chip
                icon={<DirectionsCarIcon />}
                label={`${props.car.currentVehicle.Vehicle.TransmissionType}`}
                clickable
                color="primary"
                variant="outlined"
                style={{ margin: "1px" }}
              />
            </Tooltip>
            <Tooltip title="Fuel Type">
              <Chip
                icon={<LocalGasStationIcon />}
                label={`${props.car.currentVehicle.Vehicle.FuelType}`}
                clickable
                style={{ margin: "1px" }}
                variant="outlined"
                color="primary"
              />
            </Tooltip>
            <Tooltip title="Passenger Quantity">
              <Chip
                icon={<PeopleIcon />}
                label={`${props.car.currentVehicle.Vehicle.PassengerQuantity}`}
                clickable
                variant="outlined"
                style={{ margin: "1px" }}
                color="primary"
              />
            </Tooltip>
            <Tooltip title="Baggage Quantity">
              <Chip
                icon={<WorkIcon />}
                label={`${props.car.currentVehicle.Vehicle.BaggageQuantity}`}
                clickable
                variant="outlined"
                style={{ margin: "1px" }}
                color="primary"
              />
            </Tooltip>
            <Tooltip title="Door Count">
              <Chip
                icon={<AirportShuttleIcon />}
                variant="outlined"
                label={`${props.car.currentVehicle.Vehicle.DoorCount}`}
                style={{ margin: "1px" }}
                clickable
                color="primary"
              />
            </Tooltip>
            <Tooltip title="Air Condition">
              <Chip
                icon={<AcUnitIcon />}
                label={`${
                  props.car.currentVehicle.Vehicle.AirConditionInd
                    ? "Yes"
                    : "No"
                }`}
                style={{
                  margin: "1px",
                  backgroundColor: props.car.currentVehicle.Vehicle
                    .AirConditionInd
                    ? "lightBlue"
                    : "#f6685e",
                }}
                clickable
              />
            </Tooltip>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return state;
};

const connector = connect(mapStateToProps, { getInfo, setCurrentVechicle });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CarDetail);
