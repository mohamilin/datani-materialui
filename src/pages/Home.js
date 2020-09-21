import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Container from '@material-ui/core/Container';
import MainTop from '../components/MainTop';
import DataTani from '../components/DataTani';
import Footer from '../components/Footer';



function Home() {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Container maxWidth="xl">
          <Banner />
        </Container>
        <br/> <br/>
        <MainTop/>
        <DataTani/>
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
