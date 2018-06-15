import React from "react";
import PropTypes from "prop-types";
import { StickyContainer, Sticky } from "react-sticky";
import { css, withStyles, withStylesPropTypes } from "react-with-styles";
import {
  TitleSecondary,
  TitleH3,
  Text
} from "Maurio/Atoms/TitleLabel/TitleLabel";
import HeaderPerfil from "Maurio/Organisms/Header/HeaderPerfil";
import Footer from "Maurio/Organisms/Footer/Footer";
import ImageBook from "Maurio/Organisms/ImageBook/ImageBook";
import RoomCard from "Maurio/Molecules/Card/RoomCard";
import IconList from "Maurio/Molecules/List/IconList";
import Card from "Maurio/Molecules/Card/Card";
import SimpleContentCard from "Maurio/Molecules/Card/SimpleContentCard";
import ComentariosCard from "Maurio/Molecules/Card/ComentariosCard";
import DesplegableContentCard from "Maurio/Molecules/Card/DesplegableContentCard";
import SearchHotels from "Maurio/Organisms/Search/SearchHotels";
import Grid from "material-ui/Grid";
import TabSlider from "Maurio/Molecules/Tabs/TabSlider";
import Paper from "@material-ui/core/Paper";
import Button from "Maurio/Atoms/Button/Button";
import Starts from "Maurio/Atoms/Starts";
import Map from "Maurio/Atoms/Map";
import ContentCard from "Maurio/Molecules/Card/ContentCard";
import ResumenBusqueda from "Maurio/Molecules/ResumenBusqueda/ResumenBusqueda";
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

class LandingHoteles extends React.Component {
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
        <section {...css(styles.infoHotel)}>
          <Grid container {...css(styles.containerlg)} spacing={16}>
            <Grid item xs={12} lg={5} xl={5}>
              <div {...css(styles.simpleFlex, { minHeight: 60 })}>
                <div>
                  <Starts />
                </div>
                <div>
                  <Text
                    size={16}
                    content={"Panamericano Buenos Aires"}
                    color={"black"}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={7} xl={7}>
              <SearchHotels />
            </Grid>
          </Grid>
        </section>
        <ImageBook />
        <section {...css(styles.noWrapper)}>
          <div container spacing={10} {...css(styles.contentRooms)}>
            <div {...css(styles.itemRomm)}>
              <RoomCard onClick={this.handleClickOpen} />
            </div>
            <div {...css(styles.itemRomm)}>
              <RoomCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <RoomCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <RoomCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <RoomCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <RoomCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <RoomCard />
            </div>
            <div {...css(styles.itemRomm)}>
              <RoomCard />
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
                <div>
                  <TabSlider />
                </div>{" "}
              </div>
            )}
          </Sticky>
          <section {...css(styles.infoHotels)}>
            <div {...css(styles.container)}>
              <div {...css(styles.info)}>
                <div {...css(styles.marginT20)}>
                  <DesplegableContentCard
                    title={"Descripción del Hotel"}
                    content={
                      <span>
                        El Obelisco, el Teatro Colón y la Avenida 9 de Julio
                        pueden apreciarse desde el mirador del Panamericano
                        Buenos Aires, hotel situado a 200 m de la Avenida
                        Corrientes y a 600 m de la calle peatonal Florida,
                        ofrece piscina cubierta climatizada y gimnasio en su
                        piso 23. El Aeropuerto Internacional de Ezeiza queda a
                        32 km.<br />
                        El Obelisco, el Teatro Colón y la Avenida 9 de Julio
                        pueden apreciarse desde el mirador del Panamericano
                        Buenos Aires, hotel situado a 200 m de la Avenida
                        Corrientes y a 600 m de la calle peatonal Florida,
                        ofrece piscina cubierta climatizada y gimnasio en su
                        piso 23. El Aeropuerto Internacional de Ezeiza queda a
                        32 km.<br />
                        <br />
                        El Obelisco, el Teatro Colón y la Avenida 9 de Julio
                        pueden apreciarse desde el mirador del Panamericano
                        Buenos Aires, hotel situado a 200 m de la Avenida
                        Corrientes y a 600 m de la calle peatonal Florida,
                        ofrece piscina cubierta climatizada y gimnasio en su
                        piso 23. El Aeropuerto Internacional de Ezeiza queda a
                        32 km. El Obelisco, el Teatro Colón y la Avenida 9 de
                        Julio pueden apreciarse desde el mirador del
                        Panamericano Buenos Aires, hotel situado a 200 m de la
                        Avenida Corrientes y a 600 m de la calle peatonal
                        Florida, ofrece piscina cubierta climatizada y gimnasio
                        en su piso 23. El Aeropuerto Internacional de Ezeiza
                        queda a 32 km.
                      </span>
                    }
                  />
                </div>
                <div {...css(styles.marginT20)}>
                  <Card
                    content={
                      <div {...css(styles.padding10)}>
                        <div style={{ marginBottom: 10 }}>
                          <TitleSecondary
                            left
                            size={14}
                            content={"Direccion del Hotel"}
                          />
                          <Text
                            left
                            size={12}
                            italic
                            content={"0.5 km del Centro de la Ciudad"}
                          />
                        </div>
                        <Map />
                      </div>
                    }
                  />
                </div>
                <div {...css(styles.marginT20)}>
                  <DesplegableContentCard
                    title={"Servicios"}
                    content={
                      <div {...css(styles.padding10)}>
                        <Grid container xs={12}>
                          <Grid item xs={12} sm={6}>
                            <IconList
                              title={"Wifi Gratis"}
                              icon={"flaticon-computer-2"}
                              borderBottom={true}
                            />
                            <IconList
                              title={"Aire Acondicionado en las Habitaciones"}
                              icon={"flaticon-conditioning-air"}
                              borderBottom={true}
                            />
                            <IconList
                              title={"Gimnasio"}
                              icon={"flaticon-dumbbell"}
                              borderBottom={true}
                            />
                            <IconList
                              title={"Pisina"}
                              icon={"flaticon-pool"}
                              borderBottom={true}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <IconList
                              title={"Wifi Gratis"}
                              icon={"flaticon-computer-2"}
                              borderBottom={true}
                            />
                            <IconList
                              title={"Aire Acondicionado en las Habitaciones"}
                              icon={"flaticon-conditioning-air"}
                              borderBottom={true}
                            />
                            <IconList
                              title={"Gimnasio"}
                              icon={"flaticon-dumbbell"}
                              borderBottom={true}
                            />
                            <IconList
                              title={"Pisina"}
                              icon={"flaticon-pool"}
                              borderBottom={true}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    }
                  />
                </div>
                <div {...css(styles.marginT20)}>
                  <SimpleContentCard
                    content={
                      <div>
                        <div {...css(styles.marginTop10)}>
                          <ComentariosCard />
                        </div>
                        <div {...css(styles.marginTop10)}>
                          <ComentariosCard />
                        </div>
                        <div {...css(styles.marginTop10)}>
                          <ComentariosCard />
                        </div>
                        <div {...css(styles.marginTop10)}>
                          <ComentariosCard />
                        </div>
                      </div>
                    }
                  />
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
            <DialogContent {...css(styles.popup)}>
              <ContentCard />
            </DialogContent>
            <DialogActions>
              <Button
                text="Seleccionar"
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
          {/* ... */}
          <Footer />
        </StickyContainer>
      </div>
    );
  }
}
LandingHoteles.defaultProps = {
  fixed: false
};

LandingHoteles.propTypes = {
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
          zIndex: 5,
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
      simpleFlex
    })
  )(LandingHoteles)
);
