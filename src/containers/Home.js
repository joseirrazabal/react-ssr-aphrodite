import React from "react";
import PropTypes from "prop-types";
import { css, withStyles, withStylesPropTypes } from "react-with-styles";
import Slider from "react-slick";
import Grid from "material-ui/Grid";

import Header from "Maurio/lib/Organisms/Header/Header";
import Footer from "Maurio/lib/Organisms/Footer/Footer";
import SimpleCard from "Maurio/lib/Molecules/Card/SimpleCard";
import SlideCard from "Maurio/lib/Molecules/Card/SlideCard";
import SmallCard from "Maurio/lib/Molecules/Card/SmallCard";
import VerticalCard from "Maurio/lib/Molecules/Card/VerticalCard";
import PaquetesCard from "Maurio/lib/Molecules/Card/PaquetesCard";
import SimpleNews from "Maurio/lib/Molecules/Newsletters/SimpleNews";
import {
  TitleSecondary,
  TitleH3,
  Text
} from "Maurio/lib/Atoms/TitleLabel/TitleLabel";
import BackgroundImageHome from "Maurio/lib/Organisms/BackgroundImageHome/BackgroundImageHome";
import SearchHotels from "Maurio/lib/Organisms/Search/SearchHotels";
import SearchVuelos from "Maurio/lib/Organisms/Search/SearchVuelos";
import SearchPaquetes from "Maurio/lib/Organisms/Search/SearchPaquetes";
import SearchHotelsMobile from "Maurio/lib/Organisms/Search/SearchHotelsMobile";
import SearchVuelosMobile from "Maurio/lib/Organisms/Search/SearchVuelosMobile";
import SearchPaquetesMobile from "Maurio/lib/Organisms/Search/SearchPaquetesMobile";
import ListCards from "Maurio/lib/Organisms/ListCards/ListCards";

const settings = {
  className: "center",
  centerMode: false,
  dots: false,
  arrows: false,
  infinite: false,
  draggable: false,
  speed: 500,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
        draggable: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        initialSlide: 0,
        draggable: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        draggable: true
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: true
      }
    }
  ]
};

class Home extends React.Component {
  render() {
    const { styles, useDefaultCursor } = this.props;
    return (
      <div>
        <Header fixed={false} />
        <BackgroundImageHome
          contentHotels={
            <div>
              <SearchHotels /><SearchHotelsMobile />
            </div>
          }
          contentVuelos={
            <div>
              <SearchVuelos /><SearchVuelosMobile />
            </div>
          }
          contentPaquetes={
            <div>
              <SearchPaquetes /><SearchPaquetesMobile />
            </div>
          }
        />
        <div {...css(styles.container, styles.marginTopNegativo) }>
          <Slider {...settings} slidesToShow={3} lassName={"carousel"}>
            <div {...css(styles.items) }>
              <SmallCard
                image="https://images.pexels.com/photos/709860/pexels-photo-709860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                title="Vuelos a Berlin"
                subtitle="desde $17000"
              />
            </div>
            <div {...css(styles.items) }>
              <SmallCard
                image="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                title={"Hoteles en Miami"}
                subtitle="por noche desde $400"
              />
            </div>
            <div {...css(styles.items) }>
              <SmallCard
                image="https://images.pexels.com/photos/60204/pexels-photo-60204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                title={"Paquetes a Buzios"}
                subtitle="Últimos lugares!"
              />
            </div>
          </Slider>
        </div>
        <div {...css(styles.paddingBox) }>
          <ListCards />
        </div>
        <div {...css(styles.container) }>
          <Grid xs={12} {...css(styles.paddingBox) }>
            <TitleSecondary center content="Hoteles mas buscados en Miami" />
          </Grid>
          <Slider {...settings} slidesToShow={3} className={"carousel"}>
            <div {...css(styles.items) }>
              <SlideCard
                title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                precio={"26850"}
              />
            </div>
            <div {...css(styles.items) }>
              <SlideCard
                title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                precio={"26850"}
              />
            </div>
            <div {...css(styles.items) }>
              <SlideCard
                title={"Hotel Buenos Aires Ejemplo dos titulo largo…"}
                precio={"26850"}
              />
            </div>
          </Slider>
        </div>
        <div {...css(styles.container) }>
          <Grid xs={12} {...css(styles.paddingBox) }>
            <TitleSecondary center content="Europa a tu medida!" />
          </Grid>
          <Slider {...settings} slidesToShow={3} className={"carousel"}>
            <div {...css(styles.items) }>
              <SimpleCard
                destino="Hoteles en Miami"
                precio="1200"
                precioAnterior="1600"
                imageUrl="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              />
            </div>
            <div {...css(styles.items) }>
              <SimpleCard
                destino="Hoteles en Miami"
                precio="1200"
                precioAnterior="1600"
                imageUrl="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              />
            </div>
            <div {...css(styles.items) }>
              <SimpleCard
                destino="Hoteles en Miami"
                precio="1200"
                precioAnterior="1600"
                imageUrl="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              />
            </div>
          </Slider>
        </div>
        <div {...css(styles.container) }>
          <Grid xs={12} {...css(styles.paddingBox) }>
            <TitleSecondary center content="Viajes que te van a encantar" />
          </Grid>
          <Slider {...settings} slidesToShow={3} className={"carousel"}>
            <div {...css(styles.items) }>
              <PaquetesCard
                title="Búzios"
                fecha="de Junio a Julio"
                text="Final por persona"
                noches="7 noches desde Buenos Aires, Argentina"
                precio="11.489"
                imageUrl="https://images.pexels.com/photos/60204/pexels-photo-60204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              />
            </div>
            <div {...css(styles.items) }>
              <PaquetesCard
                title="Punta Cana"
                fecha="Salidas de Junio a Noviembre"
                noches="8 noches desde Buenos Aires, Argentina"
                precio="42.920"
                text="Final por persona"
                imageUrl="https://media.aleanitravel.com/eyJ3IjozNDgsImgiOjI5MCwic3JjIjoiaHR0cHM6Ly9hbGVhbmktYXNzZXRzLnMzLmFtYXpvbmF3cy5jb20vd2ViL2ltYWdlcy9nZW8vNWEzMmFkYTEtNTc0My00M2VkLTk0MDYtMDkzODdkNzY2ZjM1X18xMS5qcGciLCJ2IjoxfQ==.jpg"
              />
            </div>
            <div {...css(styles.items) }>
              <PaquetesCard
                title="Varadero y La Habana"
                fecha="Salidas de Junio a Noviembre"
                noches="10 noches desde Buenos Aires, Argentina"
                precio="41.917"
                text="Final por persona"
                imageUrl="https://media.aleanitravel.com/eyJ3IjozNDgsImgiOjI5MCwic3JjIjoiaHR0cHM6Ly9hbGVhbmktYXNzZXRzLnMzLmFtYXpvbmF3cy5jb20vd2ViL2ltYWdlcy9nZW8vYTE0YmFiZmQtNGViMi00NTc0LTk1ZjktY2U0ZmJmMTBmNDRkX19oYWJhbmExLmpwZyIsInYiOjF9.jpg"
              />
            </div>
          </Slider>
        </div>
        <div {...css(styles.paddingBox) }>
          <SimpleNews />
        </div>
        <div {...css(styles.container) }>
          <Grid xs={12} {...css(styles.paddingBox) }>
            <TitleSecondary center content="Ofertas en Vuelos" />
          </Grid>
          <Slider {...settings} slidesToShow={4} className={"carousel"}>
            <div {...css(styles.items) }>
              <VerticalCard
                title="Vuelos a Londres"
                subtitle="ida y vuelta"
                titleRight="desde"
                subtitleRight="26850"
                lineThrough={false}
                imageUrl="https://images.pexels.com/photos/397431/pexels-photo-397431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              />
            </div>
            <div {...css(styles.items) }>
              <VerticalCard
                title="Vuelos a Londres"
                subtitle="ida y vuelta"
                titleRight="desde"
                subtitleRight="26850"
                lineThrough={false}
                imageUrl="https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              />
            </div>
            <div {...css(styles.items) }>
              <VerticalCard
                title="Vuelos a Londres"
                subtitle="ida y vuelta"
                titleRight="desde"
                subtitleRight="26850"
                lineThrough={false}
                imageUrl="https://images.pexels.com/photos/416673/pexels-photo-416673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              />
            </div>
            <div {...css(styles.items) }>
              <VerticalCard
                title="Vuelos a Londres"
                subtitle="ida y vuelta"
                titleRight="desde"
                subtitleRight="26850"
                lineThrough={false}
                imageUrl="https://images.pexels.com/photos/871488/pexels-photo-871488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              />
            </div>
          </Slider>
        </div>
        <Footer />
      </div>
    );
  }
}
Home.defaultProps = {
  fixed: false
};

Home.propTypes = {
  ...withStylesPropTypes,
  fixed: PropTypes.string
};

export default withStyles(({ mauri: { color, variables } }) => ({

  noWrapper: {
    "@media (max-width: 800px)": {
      overflowX: "scroll",
      background: "#f2f2f2",
      padding: 10,
      display: "block",
      whiteSpace: "nowrap",
      width: "100%"
    }
  },
  color,
  marginTopNegativo: {
    marginTop: -80,
    position: "relative",
    zIndex: 1
  },
  items: {
    padding: 10
  },
  container: {
    margin: "auto",
    width: "100%",
    maxWidth: 1200
  },
  paddingBox: {
    paddingTop: 20,
    paddingBottom: 20
  }

}))(Home);
