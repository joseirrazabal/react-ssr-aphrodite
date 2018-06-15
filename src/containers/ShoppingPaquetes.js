import React from 'react';
import PropTypes from 'prop-types'
import Header from 'Maurio/lib/Organisms/Header/Header'
import Footer from 'Maurio/lib/Organisms/Footer/Footer'
import FiltersHotels from 'Maurio/lib/Atoms/Filters/FiltersHotels'
import Expander from 'Maurio/lib/Atoms/Expander'
import LinearProgress from '@material-ui/core/LinearProgress'
import PaquetesCard from 'Maurio/lib/Molecules/Card/PaquetesCard'
import LoadingCardPaquetes from 'Maurio/lib/Molecules/Card/LoadingCardPaquetes'
import { TitleSecondary, TitleH3, Text } from 'Maurio/lib/Atoms/TitleLabel/TitleLabel'
import TabsOrdenar from 'Maurio/lib/Molecules/TabsOrdenar/TabsOrdenar'
import { css, withStyles, withStylesPropTypes } from "react-with-styles"
import SearchPaquetes from 'Maurio/lib/Organisms/Search/SearchPaquetes'
import Grid from 'material-ui/Grid'
import Button from 'Maurio/lib/Atoms/Button/Button'
import IconsFont from 'Maurio/lib/Atoms/IconsFont'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ResumenBusqueda from 'Maurio/lib/Molecules/ResumenBusqueda/ResumenBusqueda'
import { FaFilter, FaClose, FaAngleDown } from 'react-icons/lib/fa'
import Typography from 'material-ui/Typography'
import CloseIcon from '@material-ui/icons/Close'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ShoppingPaquetes extends React.Component {
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
        <BrowserRouter>
          <Header fixed={false} />
        </BrowserRouter>
        <div {...css(styles.searchFilter) }>
          <Grid container {...css(styles.container) } spacing={10}>
            <Grid xs={12}>
              <SearchPaquetes />
            </Grid>
            <Grid xs={12} {...css(styles.flexBox, styles.filterPc) }>
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
        <div {...css(styles.resumenBusqueda) }>
          <ResumenBusqueda />
        </div>
        <section>
          <Grid xs={12}>
            <LinearProgress style={{ height: 3 }} />
          </Grid>
          <Grid container spacing={0}>
            <Grid container spacing={0} xs={12} {...css(styles.containerlg) }>
              <Grid container spacing={16} {...css(styles.contentHotels) }>
                <Grid xs={12} {...css(styles.padding20) }>
                  <TitleSecondary center content="Paquetes a Buzios" />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <LoadingCardPaquetes />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <LoadingCardPaquetes />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <LoadingCardPaquetes />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <LoadingCardPaquetes />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <PaquetesCard
                    title={"Búzios con Cenas de Regalo!"}
                    fecha={"11 de Marzo"}
                    noches={"7 noches desde Buenos Aires"}
                    precio={"26850"}
                    imageUrl={"https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <PaquetesCard
                    title={"Búzios con Cenas de Regalo!"}
                    fecha={"11 de Marzo"}
                    noches={"7 noches desde Buenos Aires"}
                    precio={"26850"}
                    imageUrl={"https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <PaquetesCard
                    title={"Búzios con Cenas de Regalo!"}
                    fecha={"11 de Marzo"}
                    noches={"7 noches desde Buenos Aires"}
                    precio={"26850"}
                    imageUrl={"https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <PaquetesCard
                    title={"Búzios con Cenas de Regalo!"}
                    fecha={"11 de Marzo"}
                    noches={"7 noches desde Buenos Aires"}
                    precio={"26850"}
                    imageUrl={"https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <PaquetesCard
                    title={"Búzios con Cenas de Regalo!"}
                    fecha={"11 de Marzo"}
                    noches={"7 noches desde Buenos Aires"}
                    precio={"26850"}
                    imageUrl={"https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <PaquetesCard
                    title={"Búzios con Cenas de Regalo!"}
                    fecha={"11 de Marzo"}
                    noches={"7 noches desde Buenos Aires"}
                    precio={"26850"}
                    imageUrl={"https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <PaquetesCard
                    title={"Búzios con Cenas de Regalo!"}
                    fecha={"11 de Marzo"}
                    noches={"7 noches desde Buenos Aires"}
                    precio={"26850"}
                    imageUrl={"https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <PaquetesCard
                    title={"Búzios con Cenas de Regalo!"}
                    fecha={"11 de Marzo"}
                    noches={"7 noches desde Buenos Aires"}
                    precio={"26850"}
                    imageUrl={"https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
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
        <Footer />
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
ShoppingPaquetes.defaultProps = {
  fixed: false
}

ShoppingPaquetes.propTypes = {
  ...withStylesPropTypes,
  fullScreen: PropTypes.bool.isRequired,
  fixed: PropTypes.string
}

export default withMobileDialog()(withStyles(({ mauri: { color, variables, container, containerlg, paddingBox, padding20 } }) => ({
  color,
  variables,
  resumenBusqueda: {
    display: 'none',
    width: '100%',

    "@media (max-width: 800px)": {
      position: 'absolute',
      zIndex: 2,
      top: 70,
      display: 'block',
    },
  },

  marginTop: {
    marginTop: 80,

    "@media (max-width: 800px)": {
      marginTop: 60,
    },
  },
  filterPc: {
    marginTop: 15,
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
    marginTop: 0,
    zIndex: 0,
    "@media (max-width: 800px)": {
      marginTop: 100,
    }
  },
  padding20,
  paddingBox,
  containerlg,
  container,
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
    padding: '40px 10px',
    width: '100%',
    background: '#F9F8F7',
    marginTop: 2,

    "@media (max-width: 800px)": {
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
  tabsordenar: {
    width: '100%',
    "@media (max-width: 600px)": {
      display: 'none'
    }
  }
}))(ShoppingPaquetes));
