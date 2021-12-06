import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";

import React from "react";

import Image from "next/image";

import {
  SeUnHeroe
} from "components/enlacesComunes";

import styles from "styles/SeUnHeroe.module.scss";
import stylesC from "../styles/conocenos.module.scss";
import estilosPagina from "styles/pagina.module.scss";

import Footer from "components/footer";

import imgBanner from "public/paginas/vivamos-verde/banner.jpg";
import imgCuerpo from "public/paginas/conocenos/cuerpo.png";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { TarjetaVideo } from "components/tarjetaVideo";
import { Col, Row } from "react-bootstrap";

export default function VivamosVerde() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-verde"
          alt="Recolectores"
        >
          <h3 className={styles["caption-encabezado"]} style={{color: "var(--tema-naranja)"}}>Vivamos verdes</h3>
          <span className=""></span>
          
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina>Vivamos verdes <small>De 5 a 7 años</small></TituloPagina>

        
        <p className={estilosPagina.cuerpo}>
        Un futuro mejor es lo que todos pedimos, sobre todo para nuestros niños, hijos, sobrinos, nietos y para las futuras generaciones. 
        </p><p className={estilosPagina.cuerpo}>
        Darle la oportunidad a los más pequeños de la casa de aprender sobre el planeta y el impacto de nuestro estilo de vida en él, así puedan dar sus primeros pasos en conocer el valor de la naturaleza y sus servicios a través de todo lo nos rodea.
        </p><p className={estilosPagina.cuerpo}>
        Mediante contenido divertido, educativo y actividades didácticas ellos conocerán cómo respetar, cuidar y valorar nuestro planeta desde su hogar. Apoya a nuestras futuras generaciones a dar sus primeros pasos verdes porque el futuro es hoy.
        </p>

        <Image layout="responsive" src={imgCuerpo} alt="Vivamos verde"></Image>

        <h2 className={estilosPagina.titulo2} style={{paddingTop: "1em"}}>
          Te invitamos a registrarte en nuestros cursos "Vivamos Verde"
        </h2>

        <Row className={"justify-content-center"}>
            <a
                className={stylesC["link-redes"]}
                target="_blank"
                rel="noopener noreferrer"
                href="https://cursos.recreabolivia.org"
                style={{width: "20em"}}
            >
                <Col className={`${stylesC.botonContacto} mb-2 mb-sm-0`} style={{height: "2em",backgroundColor: "var(--tema-naranja)"}}>
                
                    <span style={{fontSize: "1em"}}> Registrate aquí</span>
                </Col>
            </a>
        </Row>

        <h2 className={estilosPagina.titulo2} style={{paddingTop: "1em"}}>
          También podria interesarte
        </h2>

        <SeUnHeroe volteada />

      </ContenidoPagina>

      <Footer />
    </>
  );
}
