import React from "react";
import PropTypes from "prop-types";
import Header from "Maurio/Organisms/Header/Header";
import {
  TitleSecondary,
  TitleH3,
  Text
} from "Maurio/Atoms/TitleLabel/TitleLabel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "material-ui/Grid";
import FavoriteCard from "Maurio/Molecules/Card/FavoriteCard";
import NotificationCard from "Maurio/Molecules/Card/NotificationCard";
import { css, withStyles, withStylesPropTypes } from "react-with-styles";
import Avatar from "Maurio/Atoms/Avatar";
import SwipeableViews from "react-swipeable-views";
import InputSimple from "Maurio/Atoms/Input";
import InputPassword from "Maurio/Atoms/InputPassword";
import Paper from "@material-ui/core/Paper";
import SelectNumber from "Maurio/Atoms/SelectNumber";

class Profile extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { styles, fullScreen, useDefaultCursor, classes, theme } = this.props;
    return (
      <div>
        <Header fixed={false} />
        <section
          className={"paddingBox background-gray-secuondary"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <div style={{ position: "relative", marginBottom: 10 }}>
              <Avatar
                circle={50}
                maxHeight={200}
                alt="Nombre del  Usuario"
                notifications={0}
              />
            </div>
            <div>
              <Text
                content={
                  <span style={{ fontSize: 18 }}>
                    <strong>¡Hola</strong> Luciano!
                  </span>
                }
              />
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "white" }}>
          <Paper elevation={2}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              fullWidth
            >
              <Tab label="Mi Perfil" />
              <Tab label="Favoritos" />
              <Tab label="Notificaciones" />
              <Tab label="Personalizar" />
            </Tabs>
          </Paper>
        </section>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <Grid
            container
            spacing={16}
            {...css(styles.container, styles.paddingBox2)}
          >
            <Grid item xs={12} sm={6}>
              <div {...css(styles.paddingObject)}>
                <TitleSecondary left content={"Datos personales"} />
              </div>
              <div {...css(styles.paddingObject)}>
                <InputSimple name={"Luciano"} defaultName={"Nombre"} />
              </div>
              <div {...css(styles.paddingObject)}>
                <InputSimple name={"Apellido"} defaultName={"Recchini"} />
              </div>
              <div {...css(styles.paddingObject)}>
                <InputSimple name={"Email"} defaultName={"reqini@gmail.com"} />
              </div>
              <div {...css(styles.paddingObject)}>
                <InputSimple name={"DNI"} defaultName={"33180784"} />
              </div>
              <div {...css(styles.paddingObject)}>
                <SelectNumber />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div {...css(styles.paddingObject)}>
                <TitleSecondary left content={"Mi contraseña"} />
              </div>
              <div {...css(styles.paddingObject)}>
                <InputPassword name={"Contraseña"} inputName={"Luciano001"} />
              </div>
              <div {...css(styles.paddingObject)}>
                <Text left content={"¿De donde sos?"} />
              </div>
              <div {...css(styles.paddingObject)}>
                <SelectNumber />
              </div>
              <div {...css(styles.paddingObject)}>
                <SelectNumber />
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={16}
            {...css(styles.container, styles.paddingBox2)}
          >
            <div style={{ width: "100%" }}>
              <div {...css(styles.paddingObject)}>
                <TitleSecondary
                  left
                  content={"Este es tu Listado de Hoteles Favoritos"}
                />
              </div>
              <div {...css(styles.paddingObject)}>
                <FavoriteCard />
              </div>
              <div {...css(styles.paddingObject)}>
                <FavoriteCard />
              </div>
              <div {...css(styles.paddingObject)}>
                <FavoriteCard />
              </div>
            </div>
          </Grid>
          <Grid
            container
            spacing={16}
            {...css(styles.container, styles.paddingBox2)}
          >
            <div style={{ width: "100%" }}>
              <div {...css(styles.paddingObject)}>
                <TitleSecondary
                  left
                  content={"Este es tu Listado de Hoteles Favoritos"}
                />
              </div>
              <div {...css(styles.paddingObject, { position: "relative" })}>
                <NotificationCard />
              </div>
              <div {...css(styles.paddingObject, { position: "relative" })}>
                <NotificationCard />
              </div>
              <div {...css(styles.paddingObject, { position: "relative" })}>
                <NotificationCard />
              </div>
              <div {...css(styles.paddingObject, { position: "relative" })}>
                <NotificationCard />
              </div>
              <div {...css(styles.paddingObject, { position: "relative" })}>
                <NotificationCard />
              </div>
            </div>
          </Grid>
          <Grid
            container
            spacing={16}
            {...css(styles.container, styles.paddingBox2)}
          >
            <Grid item xs={12}>
              <div>
                <TitleSecondary left content={"Idioma/Moneda"} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <SelectNumber />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <SelectNumber />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <TitleSecondary left content={"Preferencias de Búsqueda"} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <InputSimple
                  defaultName={
                    "Aeropuerto Internacional Ministro Pistarini (EZE)"
                  }
                  name={"Aeropuerto de Origen preferido"}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <InputSimple
                  defaultName={"Miami Beach, Florida, Estados Unidos"}
                  name={"Ciudad Preferida"}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <SelectNumber />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <SelectNumber />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <SelectNumber />
              </div>
            </Grid>
          </Grid>
        </SwipeableViews>
      </div>
    );
  }
}
Profile.defaultProps = {
  fixed: false
};

Profile.propTypes = {
  ...withStylesPropTypes,
  fixed: PropTypes.string
};

export default withStyles(
  ({
    mauri: {
      color,
      variables,
      container,
      paddingBox,
      paddingBox2,
      paddingBox3,
      padding10,
      paddingObject
    }
  }) => ({
    container,
    paddingObject,
    padding10,
    paddingBox,
    paddingBox2,
    paddingBox3,
    root: {
      flexGrow: 1
    }
  })
)(Profile);
