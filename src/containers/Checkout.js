import React from "react";
import PropTypes from "prop-types";
import { StickyContainer, Sticky } from "react-sticky";
import Header from "Maurio/Organisms/Header/Header";
import Footer from "Maurio/Organisms/Footer/Footer";
import Expander from "Maurio/Atoms/Expander";
import Button from "Maurio/Atoms/Button/Button";
import SlideCard from "Maurio/Molecules/Card/SlideCard";
import SteppersCheckout from "Maurio/Templates/Checkout/SteppersCheckout";
import { css, withStyles, withStylesPropTypes } from "react-with-styles";
import {
  TitleSecondary,
  TitleH3,
  Text
} from "Maurio/Atoms/TitleLabel/TitleLabel";
import Grid from "material-ui/Grid";
import Resumen from "Maurio/Templates/Checkout/Resumen";
import Dialog from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Typography from "material-ui/Typography";
import CloseIcon from "@material-ui/icons/Close";

class Checkout extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { styles, useDefaultCursor, fullScreen } = this.props;
    return (
      <div>
        <Header fixed={false} />
        <StickyContainer>
          <div {...css(styles.containerCheckout, styles.paddingBox)}>
            <Grid container xs={12} style={{ margin: 0 }}>
              <Grid item xs={12} spacing={0} sm={12} md={8} lg={8}>
                <SteppersCheckout />
              </Grid>
              <Grid item xs={12} spacing={0} sm={4}>
                <div {...css(styles.resumen)}>
                  <Sticky>
                    {({
                      style,
                      // the following are also available but unused in this example
                      isSticky,
                      wasSticky,
                      distanceFromTop,
                      distanceFromBottom,
                      calculatedHeight
                    }) => (
                      <div
                        style={{
                          ...style,
                          zIndex: 5
                        }}
                      >
                        <Expander
                          expansion={true}
                          title={
                            <div
                              {...css(styles.flexStartEnd, { width: "100%" })}
                            >
                              <div>
                                <Text left content={"Total"} />
                              </div>
                              <div>
                                <TitleSecondary bold right content={"$12000"} />
                              </div>
                            </div>
                          }
                          background={"#f2f2f2"}
                          content={
                            <div style={{ width: "100%" }}>
                              <div
                                {...css(
                                  styles.flexStartEnd,
                                  styles.itemsResumen,
                                  { width: "100%" }
                                )}
                              >
                                <div>
                                  <Text
                                    left
                                    italic
                                    content={"Tarifa por adulto"}
                                  />
                                </div>
                                <div>
                                  <Text right size={16} content={"$4980"} />
                                </div>
                              </div>
                              <div
                                {...css(
                                  styles.flexStartEnd,
                                  styles.itemsResumen,
                                  { width: "100%" }
                                )}
                              >
                                <div>
                                  <Text left italic content={"Adultos (1)"} />
                                </div>
                                <div>
                                  <Text right size={16} content={"$4980"} />
                                </div>
                              </div>
                              <div
                                {...css(
                                  styles.flexStartEnd,
                                  styles.itemsResumen,
                                  { width: "100%" }
                                )}
                              >
                                <div>
                                  <Text
                                    left
                                    italic
                                    content={"Impuestos y tasas"}
                                  />
                                </div>
                                <div>
                                  <Text right size={16} content={"$2100"} />
                                </div>
                              </div>
                              <div
                                {...css(
                                  styles.flexStartEnd,
                                  styles.itemsResumen,
                                  { width: "100%" }
                                )}
                              >
                                <div>
                                  <Text left italic content={"Cargos"} />
                                </div>
                                <div>
                                  <Text right size={16} content={"$900"} />
                                </div>
                              </div>
                            </div>
                          }
                        />
                      </div>
                    )}
                  </Sticky>
                  <div {...css(styles.buttonResumen)}>
                    <Button
                      text="ver detalle de mi compra"
                      onClick={this.handleClickOpen}
                      fullWidth
                    />
                  </div>
                </div>
                <div {...css(styles.miCompra)}>
                  <Grid item xs={12}>
                    <div {...css(styles.paddingBox)}>
                      <TitleSecondary
                        center
                        content={"ver detalle de mi compra"}
                      />
                    </div>
                    <Resumen />
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
          <Footer />
        </StickyContainer>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <AppBar color={"#f2f2f2"} position={"relative"}>
            <Toolbar>
              <TitleSecondary content={"Resumen de mi compra"} left />
              <IconButton
                style={{ right: 10, position: "absolute" }}
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent style={{ background: "#f2f2f2" }}>
            <Grid container style={{ paddingTop: 30, paddingBottom: 30 }}>
              <Resumen />
            </Grid>
          </DialogContent>
          <DialogActions style={{ margin: 0 }}>
            <Button
              text="volver"
              size={"medium"}
              fullWidth
              primary={true}
              onClick={this.handleClose}
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
Checkout.defaultProps = {
  fixed: false
};

Checkout.propTypes = {
  ...withStylesPropTypes,
  fixed: PropTypes.string
};

export default withMobileDialog()(
  withStyles(
    ({
      mauri: {
        color,
        variables,
        containerCheckout,
        flex,
        flexStartEnd,
        paddingBox
      }
    }) => ({
      containerCheckout,
      paddingBox,
      flex,
      flexStartEnd,
      itemsResumen: {
        paddingTop: 10
      },
      buttonResumen: {
        display: "none",
        "@media (max-width: 960px)": {
          display: "block"
        }
      },
      miCompra: {
        "@media (max-width: 960px)": {
          display: "none"
        }
      },
      resumen: {
        "@media (max-width: 960px)": {
          position: "fixed",
          bottom: 0,
          width: "100%",
          left: 0
        }
      }
    })
  )(Checkout)
);
