import React from "react";
import PropTypes from "prop-types";
import Header from "Maurio/Organisms/Header/Header";
import Footer from "Maurio/Organisms/Footer/Footer";
import SimpleSearch from "Maurio/Organisms/Search/SimpleSearch";
import Expander from "Maurio/Atoms/Expander";
import {
  TitleSecondary,
  TitleH3,
  Text
} from "Maurio/Atoms/TitleLabel/TitleLabel";
import { css, withStyles, withStylesPropTypes } from "react-with-styles";
import Grid from "material-ui/Grid";
import Button from "Maurio/Atoms/Button/Button";
import IconsFont from "Maurio/Atoms/IconsFont";
import CloseIcon from "@material-ui/icons/Close";

class Shopping extends React.Component {
  render() {
    const { styles, fullScreen, useDefaultCursor } = this.props;

    return (
      <Grid>
        <Header fixed={false} />
        <Grid xs={12} {...css(styles.paddingBox3, styles.bgColorGray)}>
          <div
            {...css(styles.containerlg, styles.flexCenterColumn, {
              maxWidth: 400
            })}
          >
            <div>
              <img
                {...css(styles.helpImg)}
                src={require("Maurio/images/help.png")}
                alt={"loading"}
              />
            </div>
            <div>
              <TitleSecondary content={"Necesitas Ayuda?"} />
            </div>
          </div>
        </Grid>
        <div
          {...css({
            maxWidth: 600,
            width: "100%",
            margin: "auto",
            display: "table"
          })}
        >
          <div {...css({ marginTop: -25, paddingLeft: 10, paddingRight: 10 })}>
            <SimpleSearch />
          </div>
        </div>
        <Grid
          xs={12}
          {...css(styles.paddingBox3, styles.container, styles.bgColorGray2)}
        >
          <div {...css(styles.container)}>
            <TitleSecondary left content={"Déjanos ayudarte"} />
            <div {...css(styles.paddingBox)}>
              <Expander
                marginBottom={10}
                title="Estoy por comprar"
                content={
                  <Text
                    content={
                      <span>
                        El Obelisco, el Teatro Colón y la Avenida 9 de Julio
                        pueden apreciarse desde el mirador del Panamericano
                        Buenos Aires, hotel situado a 200 m de la Avenida
                        Corrientes y a 600 m de la calle peatonal Florida,
                        ofrece piscina cubierta climatizada y gimnasio en su
                        piso 23. El Aeropuerto Internacional de Ezeiza queda a
                        32 km. El spa también ofrece masajes y tratamientos
                        corporales, mientras que el Green Club proporciona un
                        simulador de golf en 3D, amenidades con costo adicional.
                        El hotel dispone de servicio de conserjería, centro de
                        negocios, 22 salones para reuniones y estacionamiento.
                      </span>
                    }
                  />
                }
              />
              <Expander
                marginBottom={10}
                title="Tengo una compra reciente"
                content={
                  <Text
                    content={
                      <span>
                        El Obelisco, el Teatro Colón y la Avenida 9 de Julio
                        pueden apreciarse desde el mirador del Panamericano
                        Buenos Aires, hotel situado a 200 m de la Avenida
                        Corrientes y a 600 m de la calle peatonal Florida,
                        ofrece piscina cubierta climatizada y gimnasio en su
                        piso 23. El Aeropuerto Internacional de Ezeiza queda a
                        32 km. El spa también ofrece masajes y tratamientos
                        corporales, mientras que el Green Club proporciona un
                        simulador de golf en 3D, amenidades con costo adicional.
                        El hotel dispone de servicio de conserjería, centro de
                        negocios, 22 salones para reuniones y estacionamiento.
                      </span>
                    }
                  />
                }
              />
              <Expander
                marginBottom={10}
                title="Tengo dudas sobre Mi Cuenta"
                content={
                  <Text
                    content={
                      <span>
                        El Obelisco, el Teatro Colón y la Avenida 9 de Julio
                        pueden apreciarse desde el mirador del Panamericano
                        Buenos Aires, hotel situado a 200 m de la Avenida
                        Corrientes y a 600 m de la calle peatonal Florida,
                        ofrece piscina cubierta climatizada y gimnasio en su
                        piso 23. El Aeropuerto Internacional de Ezeiza queda a
                        32 km. El spa también ofrece masajes y tratamientos
                        corporales, mientras que el Green Club proporciona un
                        simulador de golf en 3D, amenidades con costo adicional.
                        El hotel dispone de servicio de conserjería, centro de
                        negocios, 22 salones para reuniones y estacionamiento.
                      </span>
                    }
                  />
                }
              />
              <Expander
                marginBottom={10}
                title="No recibí el mail de confirmación"
                content={
                  <Text
                    content={
                      <span>
                        El Obelisco, el Teatro Colón y la Avenida 9 de Julio
                        pueden apreciarse desde el mirador del Panamericano
                        Buenos Aires, hotel situado a 200 m de la Avenida
                        Corrientes y a 600 m de la calle peatonal Florida,
                        ofrece piscina cubierta climatizada y gimnasio en su
                        piso 23. El Aeropuerto Internacional de Ezeiza queda a
                        32 km. El spa también ofrece masajes y tratamientos
                        corporales, mientras que el Green Club proporciona un
                        simulador de golf en 3D, amenidades con costo adicional.
                        El hotel dispone de servicio de conserjería, centro de
                        negocios, 22 salones para reuniones y estacionamiento.
                      </span>
                    }
                  />
                }
              />
            </div>
          </div>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}
Shopping.defaultProps = {};

Shopping.propTypes = {
  ...withStylesPropTypes,
  fullScreen: PropTypes.bool.isRequired
};

export default withStyles(
  ({
    mauri: {
      color,
      variables,
      flexCenterColumn,
      paddingBox,
      bgColorGray,
      paddingBox3,
      bgColorGray2,
      containerlg,
      container
    }
  }) => ({
    flexCenterColumn,
    containerlg,
    container,
    bgColorGray,
    bgColorGray2,
    paddingBox,
    paddingBox3,
    iconFilter: {
      minWidth: 100
    },
    helpImg: {
      maxWidth: 160,
      marginBottom: 15
    }
  })
)(Shopping);
