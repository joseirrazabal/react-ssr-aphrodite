import React from 'react';
import PropTypes from 'prop-types'
import Header from 'Maurio/lib/Organisms/Header/Header'
import MapComponent from 'Maurio/lib/Atoms/MapComponent'
import LinearProgress from '@material-ui/core/LinearProgress'
import FiltersHotels from 'Maurio/lib/Atoms/Filters/FiltersHotels'
import Expander from 'Maurio/lib/Atoms/Expander'
import SlideCard from 'Maurio/lib/Molecules/Card/SlideCard'
import { TitleSecondary, TitleH3, Text } from 'Maurio/lib/Atoms/TitleLabel/TitleLabel'
import TabsOrdenar from 'Maurio/lib/Molecules/TabsOrdenar/TabsOrdenar'
import { css, withStyles, withStylesPropTypes } from "react-with-styles"
import SearchShoppingVuelos from 'Maurio/lib/Organisms/Search/SearchShoppingVuelos'
import FlightItinerary from 'Maurio/lib/Organisms/FlightItinerary/FlightItinerary'
import LoadingFlight from 'Maurio/lib/Organisms/FlightItinerary/LoadingFlight'
import Grid from 'material-ui/Grid'
import Button from 'Maurio/lib/Atoms/Button/Button'
import IconsFont from 'Maurio/lib/Atoms/IconsFont'
import ResumenBusqueda from 'Maurio/lib/Molecules/ResumenBusqueda/ResumenBusqueda'
import { FaFilter, FaClose, FaAngleDown } from 'react-icons/lib/fa'
import Typography from 'material-ui/Typography'
import CloseIcon from '@material-ui/icons/Close'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'

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
class ShoppingVuelos extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {

    const { styles, fullScreen, useDefaultCursor } = this.props;

    return (

      <Grid>
        <Header fixed={true} />
        <div {...css(styles.resumenBusqueda) }>
          <ResumenBusqueda />
        </div>
        <section {...css(styles.marginTop) }>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4} lg={5} xl={7} {...css(styles.map) }>
              <MapComponent />
            </Grid>
            <Grid container {...css(styles.contentResult) } spacing={0} xs={12} sm={12} lg={7} xl={5}>
              <div {...css(styles.searchFilter) }>
                <Grid container spacing={10}>
                  <Grid xs={12}>
                    <SearchShoppingVuelos />
                  </Grid>
                  <div {...css(styles.tabsordenar, { marginTop: 10 }) }>
                    <TabsOrdenar />
                  </div>
                  <Grid xs={12} {...css(styles.flexBox, styles.filterPc, { marginTop: 10 }) }>
                    <div {...css(styles.iconFilter, styles.flexBox) }>
                      <div><IconsFont size={20} icon={'flaticon-levels'} /></div>
                      <div>
                        <Text
                          style={{ width: '100%', marginLeft: 10 }}
                          size={13}
                          content={'Filtros'}
                          color={'black'}
                        />
                      </div>
                    </div>
                    <FiltersHotels />
                  </Grid>
                </Grid>
              </div>
              <Grid xs={12}>
                <LinearProgress style={{ height: 3 }} />
              </Grid>
              <Grid container spacing={16} {...css(styles.contentHotels) }>
                <Grid item xs={12}>
                  <LoadingFlight />
                </Grid>
                <Grid item xs={12}>
                  <LoadingFlight />
                </Grid>
                <Grid item xs={12}>
                  <FlightItinerary
                    goingSegments={flight.goingSegments}
                    returnSegments={flight.returnSegments}
                    totalFare={"302.99"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FlightItinerary
                    goingSegments={flight.goingSegments}
                    returnSegments={flight.returnSegments}
                    totalFare={"302.99"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FlightItinerary
                    goingSegments={flight.goingSegments}
                    returnSegments={flight.returnSegments}
                    totalFare={"302.99"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FlightItinerary
                    goingSegments={flight.goingSegments}
                    returnSegments={flight.returnSegments}
                    totalFare={"302.99"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FlightItinerary
                    goingSegments={flight.goingSegments}
                    returnSegments={flight.returnSegments}
                    totalFare={"302.99"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FlightItinerary
                    goingSegments={flight.goingSegments}
                    returnSegments={flight.returnSegments}
                    totalFare={"302.99"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FlightItinerary
                    goingSegments={flight.goingSegments}
                    returnSegments={flight.returnSegments}
                    totalFare={"302.99"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FlightItinerary
                    goingSegments={flight.goingSegments}
                    returnSegments={flight.returnSegments}
                    totalFare={"302.99"}
                  />
                </Grid>
                <Grid item xs={12} {...css(styles.paddingBox) }>
                  <Button
                    text="MOSTRAR MAS RESULTADOS"
                    fullWidth
                    primary={false}
                    iconRight={<FaAngleDown />}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
        <div {...css(styles.buttonFiter) }>
          <Button
            variant="fab"
            color="secondary"
            aria-label="edit"
            onClick={this.handleClickOpen}
            className={{
              borderRadius: 50,
              boxShadow: '0 1px 1px rgba(0,0,0,0.3)'
            }}
            iconLeft={<FaFilter />}
          />
        </div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <AppBar color={'white'} position={'relative'}>
            <Toolbar>
              <TitleSecondary content={'Filtrar y Ordenar'} left />
              <IconButton style={{ right: 10, position: 'absolute' }} color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent style={{ background: '#f2f2f2', padding: 0 }}>
            <div>
              <TabsOrdenar />
              <div {...css(styles.contentFiltersMobile) }>
                <div {...css(styles.buttonMobile) }><Button size={'small'} text="$1000" iconRight={<FaClose />} className={{ borderRadius: 50 }} primary={true} /></div>
                <div {...css(styles.buttonMobile) }><Button size={'small'} text="Desayuno" iconRight={<FaClose />} className={{ borderRadius: 50 }} primary={true} /></div>
                <div {...css(styles.buttonMobile) }><Button size={'small'} text="Buenos Aires" iconRight={<FaClose />} className={{ borderRadius: 50 }} primary={true} /></div>
                <div {...css(styles.buttonMobile) }><Button size={'small'} text="$1000" iconRight={<FaClose />} className={{ borderRadius: 50 }} primary={true} /></div>
                <div {...css(styles.buttonMobile) }><Button size={'small'} text="$1000" iconRight={<FaClose />} className={{ borderRadius: 50 }} primary={true} /></div>
                <div {...css(styles.buttonMobile) }><Button size={'small'} text="$1000" iconRight={<FaClose />} className={{ borderRadius: 50 }} primary={true} /></div>
                <div {...css(styles.buttonMobile) }><Button size={'small'} text="$1000" iconRight={<FaClose />} className={{ borderRadius: 50 }} primary={true} /></div>
              </div>
              <Expander
                title={'Precio'}
                content={'soy un desplegable'}
              />
              <Expander
                title={'Estrellas'}
                content={'soy un desplegable'}
              />
              <Expander
                title={'Categoria'}
                content={'soy un desplegable'}
              />
              <Expander
                title={'Régimen'}
                content={'soy un desplegable'}
              />
              <Expander
                title={'Área'}
                content={'soy un desplegable'}
              />
              <Expander
                title={'Área'}
                content={'soy un desplegable'}
              />
              <Expander
                title={'Forma de pago'}
                content={'soy un desplegable'}
              />
              <Expander
                title={'Nombre'}
                content={'soy un desplegable'}
              />
            </div>
          </DialogContent>
          <DialogActions style={{ background: '#f2f2f2', margin: 0, padding: 10 }}>
            <Button
              text={'Filtrar Busqueda'}
              fullWidth
              onClick={this.handleClose}
            />
          </DialogActions>
        </Dialog>

      </Grid>

    )
  }
}
ShoppingVuelos.defaultProps = {
  fixed: false
}

ShoppingVuelos.propTypes = {
  ...withStylesPropTypes,
  fullScreen: PropTypes.bool.isRequired,
  fixed: PropTypes.string
}

export default withMobileDialog()(withStyles(({ mauri: { color, variables, paddingBox } }) => ({
  map: {
    position: 'fixed',
    top: 65,
    right: 0,
    zIndex: 0,
    width: '100%',
    //paddingLeft: 10,
    maxHeight: 'calc(100% - 40px)',

    "@media (max-width: 1024px)": {
      display: 'none'
    },
  },
  contentResult: {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)',
    background: '#f2f2f2',
    zIndex: 1,
    position: 'fixed',
    height: '100vh',
    overflowX: 'scroll',

    "@media (max-width: 1024px)": {
      position: 'relative',
      zIndex: 0,
    },
  },
  resumenBusqueda: {
    display: 'none',
    width: '100%',

    "@media (max-width: 600px)": {
      position: 'absolute',
      zIndex: 2,
      top: 60,
      display: 'block',
    },
  },
  marginTop: {
    marginTop: 65,

    "@media (max-width: 600px)": {
      marginTop: 60,
    },
  },
  iconFilter: {
    minWidth: 100,
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentFilters: {
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  contentHotels: {
    padding: 15,
    zIndex: 0,
    paddingBottom: 100,

    "@media (max-width: 600px)": {
      marginTop: 80,
    }
  },
  button: {
    border: '1px solid silver',
    width: 'auto',
    marginRight: 10,
    display: 'inline-block',
    borderRadius: 6
  },
  buttonMobile: {
    border: '1px solid silver',
    width: 'auto',
    marginRight: 10,
    display: 'inline-block',
    borderRadius: 30
  },
  contentFiltersMobile: {
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    width: '100%',
    padding: 10
  },
  searchFilter: {
    padding: 10,
    borderBottom: '1px solid silver',
    width: '100%',
    background: '#FFFFFF',

    "@media (max-width: 600px)": {
      display: 'none'
    }
  },
  buttonFiter: {
    display: 'none',

    "@media (max-width: 600px)": {
      display: 'block',
      position: 'fixed',
      bottom: 10,
      right: 10
    }
  },
  paddingBox,
  tabsordenar: {
    width: '100%',
    "@media (max-width: 600px)": {
      display: 'none'
    }
  }
}))(ShoppingVuelos));
