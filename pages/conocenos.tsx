import Encabezado from "components/encabezado";
import Footer from "components/footer";
import ImagenCarrusel from "components/imagenCarrusel";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { TarjetaEnlace } from "components/tarjetaEnlace";

import imgBanner from "public/paginas/conocenos/banner.png";
import imgCuerpo from "public/paginas/conocenos/cuerpo.png";

import React from "react";
import { Col, Row } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";
import Image from "next/image";

import styles from "../styles/conocenos.module.scss";

import phoneIcon from "public/iconos/icon-cellphone.svg";
import emailIcon from "public/iconos/icon-mail.svg";

export default function Educate() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-verde"
          alt="Conocenos"
        >
          <h3>Conócenos</h3>
          <p>
            Re.Crea <br /> tu manera de aprender
          </p>
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina>¿Quiénes somos?</TituloPagina>

        <p className="text-justify mb-3">
          Somos una organización en la que nos preocupa nuestro entorno y el de
          los demás que busca fomentar y promover la cultura del Reciclaje
          dentro de nuestra sociedad, a través de la educación y el
          voluntariado.
        </p>

        <Image layout="responsive" src={imgCuerpo} alt="Imagen, conocenos mas"></Image>

        <h2 className="text-center texto-naranja mt-5 mb-3">
          Generemos el cambio juntos, contáctanos
        </h2>

        <Row xs="auto" className="justify-content-around ">
          <a
            className={styles["link-redes"]}
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=59178800360"
          >
            <Col className={`${styles.botonContacto} mb-2 mb-sm-0`}>
              <Image
                src={phoneIcon}
                layout="fixed"
                objectFit="scale-down"
                alt="Boton de contacto WhatsApp"
              ></Image>
              <span>&nbsp; WhatsApp</span>
            </Col>
          </a>
          <a href="mailto:colmenajuvenil@recreabolivia.org">
            <Col className={styles.botonContacto}>
              <Image
                src={emailIcon}
                layout="fixed"
                objectFit="scale-down"
                alt="Boton de contacto, email"
              ></Image>
              <span>&nbsp; colmenajuvenil@recreabolivia.org</span>
            </Col>
          </a>
        </Row>
      </ContenidoPagina>

      <Footer />
    </>
  );
}
