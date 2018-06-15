import React from "react";
import PropTypes from "prop-types";
import { css, withStyles, withStylesPropTypes } from "react-with-styles";
import {
  TitleSecondary,
  TitleH3,
  Text
} from "Maurio/Atoms/TitleLabel/TitleLabel";
import HeaderPerfil from "Maurio/Organisms/Header/HeaderPerfil";
import FlightItineraryResumen from "Maurio/Organisms/FlightItinerary/FlightItineraryResumen";
import ImageBookPaquetes from "Maurio/Organisms/ImageBook/ImageBookPaquetes";
import FechasCard from "Maurio/Molecules/Card/FechasCard";
import IconList from "Maurio/Molecules/List/IconList";
import Card from "Maurio/Molecules/Card/Card";
import SimpleContentCard from "Maurio/Molecules/Card/SimpleContentCard";
import ComentariosCard from "Maurio/Molecules/Card/ComentariosCard";
import DesplegableContentCard from "Maurio/Molecules/Card/DesplegableContentCard";
import SearchPaquetes from "Maurio/Organisms/Search/SearchPaquetes";
import Grid from "material-ui/Grid";
import TabSlider from "Maurio/Molecules/Tabs/TabSlider";
import Paper from "@material-ui/core/Paper";
import Button from "Maurio/Atoms/Button/Button";
import Starts from "Maurio/Atoms/Starts";
import Map from "Maurio/Atoms/Map";
import ContentCard from "Maurio/Molecules/Card/ContentCard";
import ResumenBusqueda from "Maurio/Molecules/ResumenBusqueda/ResumenBusqueda";
import { StickyContainer, Sticky } from "react-sticky";
import CloseIcon from "@material-ui/icons/Close";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import Dialog from "material-ui/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";

var flight = {
  directionInd: "Return",
  totalFare: 302.99,
  departureDate: {
    date: "2018-07-07T07:00:00",
    GMTOffset: 1
  },
  goingSegments: [
    {
      operatingAirline: {
        code: "AS",
        name: "Alaska Airlines",
        flightNumber: "AS1399"
      },
      departureAirport: {
        code: "JFK",
        name: "John F Kennedy International"
      },
      departureDate: {
        date: "2018-07-07T07:00:00",
        GMTOffset: -4
      },
      arrivalAirport: {
        code: "LAX",
        name: "Los Angeles International"
      },
      arrivalDate: {
        date: "2018-07-07T10:18:00",
        GMTOffset: -7
      },
      elapsedTime: 378
    }
  ],
  returnDate: {
    date: "2018-07-09T17:20:00",
    GMTOffset: 1
  },
  returnSegments: [
    {
      operatingAirline: {
        code: "AS",
        name: "Alaska Airlines",
        flightNumber: "AS1480"
      },
      arrivalDate: {
        date: "2018-07-09T18:20:00",
        GMTOffset: -7
      },
      arrivalAirport: {
        code: "LAS",
        name: "Mc Carran International"
      },
      elapsedTime: 60,
      departureDate: {
        date: "2018-07-09T17:20:00",
        GMTOffset: -7
      },
      departureAirport: {
        code: "LAX",
        name: "Los Angeles International"
      }
    },
    {
      operatingAirline: {
        code: "AS",
        name: "Alaska Airlines",
        flightNumber: "AS1260"
      },
      arrivalDate: {
        date: "2018-07-10T05:55:00",
        GMTOffset: -4
      },
      arrivalAirport: {
        code: "JFK",
        name: "John F Kennedy International"
      },
      elapsedTime: 300,
      departureDate: {
        date: "2018-07-09T21:55:00",
        GMTOffset: -7
      },
      departureAirport: {
        code: "LAS",
        name: "Mc Carran International"
      }
    }
  ]
};

class LandingPaquetes extends React.Component {
  state = {
    open: false,
    openP: false
  };

  handleClickOpen = () => {
    this.setState({ openP: true });
  };

  handleClose = () => {
    this.setState({ openP: false });
  };
  render() {
    const { styles, fullScreen, useDefaultCursor } = this.props;
    //console.log("estado", this.state.openP)
    return (
      <div>
        <HeaderPerfil />
        <div {...css(styles.resumenBusqueda)}>
          <ResumenBusqueda />
        </div>
        <section {...css(styles.infoHotel, styles.paddingObject)}>
          <Grid container {...css(styles.containerlg)} spacing={10}>
            <Grid item xs={12} lg={5} xl={5}>
              <div {...css(styles.flexColumn, { minHeight: 60 })}>
                <div>
                  <Text
                    size={14}
                    italic
                    left
                    content={"7 noches 2 personas"}
                    color={"black"}
                  />
                </div>
                <div>
                  <Text
                    size={16}
                    left
                    content={"Panamericano Buenos Aires"}
                    color={"black"}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={7} xl={7}>
              <SearchPaquetes />
            </Grid>
          </Grid>
        </section>
        <ImageBookPaquetes />
        <section {...css(styles.noWrapper)}>
          <div container spacing={10} {...css(styles.contentRooms)}>
            <div {...css(styles.itemRomm)}>
              <FechasCard onClick={this.handleClickOpen} />
            </div>
            <div {...css(styles.itemRomm)}>
              <FechasCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <FechasCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <FechasCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <FechasCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <FechasCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <FechasCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <FechasCard />
            </div>
          </div>
        </section>
        <StickyContainer>
          <Sticky>
            {({
              style,
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => (
              <div style={{ ...style, zIndex: 5 }}>
                <TabSlider />
              </div>
            )}
          </Sticky>
          <section {...css(styles.infoHotels)}>
            <div {...css(styles.container)}>
              <div {...css(styles.info)}>
                <div {...css(styles.marginT20)}>
                  <SimpleContentCard
                    title={"Vuelo"}
                    padding={0}
                    content={
                      <div>
                        <FlightItineraryResumen
                          goingSegments={flight.goingSegments}
                          returnSegments={flight.returnSegments}
                        />
                      </div>
                    }
                  />
                </div>
                <div {...css(styles.marginT20)}>
                  <DesplegableContentCard
                    title={"Itinerario"}
                    content={
                      <ul style={{ padding: 0 }}>
                        <li>Incluye:</li>
                        <li>Ticket aéreo de cupo </li>
                        <li>Traslados in/out en servicio regular</li>
                        <li>
                          08 noches de alojamiento con régimen all inclusive
                        </li>
                        <li>Asistencia al viajero</li>
                        <li>Tarifa sujeta a modificación sin previo aviso</li>
                        <li>Traslados in/out en servicio regular</li>
                        <li>
                          08 noches de alojamiento con régimen all inclusive
                        </li>
                        <li>Asistencia al viajero</li>
                        <li>Tarifa sujeta a modificación sin previo aviso</li>
                      </ul>
                    }
                  />
                </div>
                <div {...css(styles.marginT20)}>
                  <ContentCard title={"Hoteles"} />
                </div>
                <div {...css(styles.marginT20)}>
                  <ContentCard title={"Ciudades"} />
                </div>
              </div>
            </div>
          </section>
          <div {...css(styles.footerFixed)}>
            <div {...css(styles.container, styles.displayFlex)}>
              <div>
                <Starts />
                <Text
                  size={16}
                  content={"Panamericano Buenos Aires"}
                  color={"black"}
                />
              </div>
              <div {...css(styles.displayFlex)}>
                <div>
                  <TitleSecondary
                    content={"$4.350"}
                    right
                    bold
                    italic
                    color={"black"}
                  />
                  <Text
                    style={{ width: "100%" }}
                    size={12}
                    content={"Total"}
                    italic
                    right
                    color={"black"}
                  />
                </div>
                <div {...css(styles.marginLeft20)}>
                  <Button text="Comprar" border />
                </div>
              </div>
            </div>
          </div>
        </StickyContainer>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.openP}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <IconButton
            style={{ right: 10, position: "absolute" }}
            color="inherit"
            onClick={this.handleClose}
            aria-label="Close"
          >
            <CloseIcon style={{ fontSize: 40 }} />
          </IconButton>
          <DialogContent {...css(styles.popup)}>consultar</DialogContent>
          <DialogActions>
            <Button
              text="Consultar"
              border
              onClick={this.handleClose}
              color="primary"
            />
            <Button
              text="volver"
              primary={false}
              onClick={this.handleClose}
              autoFocus
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
LandingPaquetes.defaultProps = {
  fixed: false
};

LandingPaquetes.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  ...withStylesPropTypes,
  fixed: PropTypes.string
};

export default withMobileDialog()(
  withStyles(
    ({
      mauri: {
        color,
        variables,
        flexColumn,
        marginT40,
        marginT20,
        simpleFlex,
        paddingBox,
        paddingObject,
        padding10,
        containerlg
      }
    }) => ({
      noWrapper: {
        overflowX: "scroll",
        background: "#f2f2f2",
        padding: 10,
        whiteSpace: "nowrap",
        width: "100%",
        "@media (max-width: 800px)": {
          position: "fixed",
          zIndex: 6,
          padding: 5,
          background: "transparent",
          backgroundImage:
            "linear-gradient(to bottom,rgba(255,255,255,0),rgba(0,0,0,.4))",
          bottom: 0,
          left: 0
        }
      },
      padding10,
      resumenBusqueda: {
        display: "none",
        width: "100%",

        "@media (max-width: 600px)": {
          position: "absolute",
          zIndex: 2,
          top: 60,
          display: "block"
        }
      },
      infoHotel: {
        background: "#f2f2f2",
        "@media (max-width: 600px)": {
          display: "none"
        }
      },
      marginTop10: {
        marginTop: 10
      },
      popup: {
        padding: 0
      },
      infoHotels: {
        width: "100%",
        display: "inline-block",
        background: "#f2f2f2"
      },
      container: {
        width: "100%",
        maxWidth: 800,
        margin: "auto",
        padding: "0 10px",
        height: 70
      },
      footerFixed: {
        background: "white",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.2)",
        padding: "0 20px",
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0
      },
      displayFlex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between"
      },
      contentRooms: {
        minWidth: 1400,
        display: "inline-flex"
      },
      marginLeft20: { marginLeft: 20 },
      itemRomm: {
        width: 290,
        margin: 5
      },
      paddingObject,
      containerlg,
      paddingBox,
      marginT40,
      marginT20,
      simpleFlex,
      flexColumn
    })
  )(LandingPaquetes)
);
