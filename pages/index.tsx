import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carrusel from "components/carrusel";

import {
  Button,
  ButtonGroup,
  Card,
  Carousel,
  Col,
  Container,
  Nav,
  Row,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import EnlacesHome from "components/enlacesHome";
import Patrocinadores from "components/patrocinadores";
import Footer from "components/footer";
import Encabezado from "components/encabezado";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Open+Sans"
        />
        <title>Re.Crea Bolivia</title>
        <meta name="description" content="Re.crea tu manera de cuidar el medio ambiente" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Encabezado />     

      <Carrusel />   

      <EnlacesHome></EnlacesHome>   

      <Patrocinadores></Patrocinadores>

      <Footer />

      
    </>
  );
}
