import React from "react";
import PropTypes from "prop-types";
import Header from "Maurio/Organisms/Header/Header";
import MapComponent from "Maurio/Atoms/MapComponent";
import FiltersHotels from "Maurio/Atoms/Filters/FiltersHotels";
import LinearProgress from "@material-ui/core/LinearProgress";
import FiltersHotelsMobile from "Maurio/Atoms/Filters/FiltersHotelsMobile";
import SlideCard from "Maurio/Molecules/Card/SlideCard";
import LoadingCard from "Maurio/Molecules/Card/LoadingCard";
import {
  TitleSecondary,
  TitleH3,
  Text
} from "Maurio/Atoms/TitleLabel/TitleLabel";
import TabsOrdenar from "Maurio/Molecules/TabsOrdenar/TabsOrdenar";
import { css, withStyles, withStylesPropTypes } from "react-with-styles";
import SearchHotels from "Maurio/Organisms/Search/SearchHotels";
import SmallSearch from "Maurio/Organisms/Search/SmallSearch";
import Grid from "material-ui/Grid";
import Starts from "Maurio/Atoms/Starts";
import Button from "Maurio/Atoms/Button/Button";
import IconsFont from "Maurio/Atoms/IconsFont";
import FilterList from "Maurio/Molecules/List/FilterList";
import ResumenBusqueda from "Maurio/Molecules/ResumenBusqueda/ResumenBusqueda";
import { FaFilter, FaClose, FaAngleDown } from "react-icons/lib/fa";
import Typography from "material-ui/Typography";
import CloseIcon from "@material-ui/icons/Close";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";

class ShoppingHoteles extends React.Component {
  render() {
    const { styles, useDefaultCursor } = this.props;

    return (
      <Grid>
        <Header fixed={true} />

        <div {...css(styles.resumenBusqueda)}>
          <ResumenBusqueda />
        </div>
        <section {...css(styles.marginTop)}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={4} lg={4} xl={5} {...css(styles.map)}>
              <MapComponent />
            </Grid>
            <Grid
              container
              spacing={0}
              xs={12}
              sm={12}
              lg={8}
              xl={7}
              {...css(styles.contentResult)}
            >
              <div {...css(styles.searchFilter)}>
                <Grid container spacing={10}>
                  <Grid xs={12}>
                    <SearchHotels />
                  </Grid>
                  <Grid xs={12} {...css(styles.flexBox, styles.filterPc)}>
                    <div {...css(styles.iconFilter, styles.flexBox)}>
                      <div>
                        <IconsFont size={20} icon={"flaticon-levels"} />
                      </div>
                      <div>
                        <Text
                          style={{ width: "100%", marginLeft: 10 }}
                          size={13}
                          content={"Filtros"}
                          color={"black"}
                        />
                      </div>
                    </div>
                    <FiltersHotels />
                  </Grid>
                </Grid>
              </div>
              <div {...css(styles.tabsordenar)}>
                <TabsOrdenar />
              </div>
              <Grid xs={12}>
                <LinearProgress style={{ height: 3 }} />
              </Grid>
              <Grid container spacing={16} {...css(styles.contentHotels)}>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <LoadingCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <LoadingCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <LoadingCard />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <SlideCard
                    title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                    precio={"26850"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <SlideCard
                    title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                    precio={"26850"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <SlideCard
                    title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                    precio={"26850"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <SlideCard
                    title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                    precio={"26850"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <SlideCard
                    title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                    precio={"26850"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <SlideCard
                    title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                    precio={"26850"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <SlideCard
                    title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                    precio={"26850"}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6} xl={4}>
                  <SlideCard
                    title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                    precio={"26850"}
                  />
                </Grid>
                <Grid item xs={12} {...css(styles.paddingBox)}>
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
        <FiltersHotelsMobile />
      </Grid>
    );
  }
}
ShoppingHoteles.defaultProps = {
  fixed: false
};

ShoppingHoteles.propTypes = {
  ...withStylesPropTypes,
  fullScreen: PropTypes.bool.isRequired,
  fixed: PropTypes.string
};

export default withStyles(({ mauri: { color } }) => ({
  map: {
    position: "fixed",
    top: 65,
    right: 0,
    zIndex: 1,
    width: "100%",
    maxHeight: "calc(100% - 40px)",

    "@media (max-width: 1024px)": {
      display: "none"
    },
    "@media (max-width: 800px)": {
      display: "block",
      top: 0,
      width: "100%",
      position: "relative",
      height: 300,
      overFlow: "hidden",
      paddingLeft: 0
    }
  },
  resumenBusqueda: {
    display: "none",
    width: "100%",

    "@media (max-width: 800px)": {
      position: "absolute",
      zIndex: 2,
      top: 60,
      display: "block"
    }
  },
  marginTop: {
    marginTop: 65,
    "@media (max-width: 800px)": {
      marginTop: 60
    }
  },
  filterPc: {
    marginTop: 10
  },
  iconFilter: {
    minWidth: 100
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  contentFilters: {
    overflowX: "scroll",
    whiteSpace: "nowrap",
    width: "100%"
  },
  contentHotels: {
    padding: 15,
    zIndex: 0,
    "@media (max-width: 800px)": {
      marginTop: 15
    }
  },
  button: {
    border: "1px solid silver",
    width: "auto",
    marginRight: 10,
    display: "inline-block",
    borderRadius: 6
  },
  contentResult: {
    boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)",
    background: "#f2f2f2",
    zIndex: 1,
    position: "fixed",
    height: "100vh",
    paddingBottom: 80,
    overflowX: "scroll",

    "@media (max-width: 800px)": {
      position: "relative",
      overflowX: "auto",
      height: "auto"
    }
  },
  searchFilter: {
    padding: 10,
    borderBottom: "1px solid silver",
    width: "100%",
    zIndex: 11,
    background: "#FFFFFF",
    "@media (max-width: 800px)": {
      display: "none"
    }
  },
  tabsordenar: {
    width: "100%",
    "@media (max-width: 800px)": {
      display: "none"
    }
  }
}))(ShoppingHoteles);
