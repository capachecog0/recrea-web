import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";

import React from "react";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";
import styles from "styles/SeUnHeroe.module.scss";

import imgBanner from "public/paginas/momento-de-actuar/banner.png";
import imgPagina from "public/paginas/momento-de-actuar/cuerpo.png";
import imgExtra from "public/paginas/momento-de-actuar/extra.png";

import { TarjetaEnlace } from "components/tarjetaEnlace";
import Footer from "components/footer";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { RecolectoresBase } from "components/enlacesComunes";

export default function MomentoDeActuar() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-verde"
          alt="Se un Heroe"
        >
          <h3 className={styles["caption-encabezado"]}>
            Es momento <br />
            de actuar
          </h3>
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina>
          Es momento de actuar<small> de 12 a 15 años</small>
        </TituloPagina>
        <h2 className={estilosPagina.titulo2}>
          Se parte del cambio recicla desde casa
        </h2>
        <p className={estilosPagina.cuerpo}>
          Debido al constante crecimiento de la población mundial, cada día
          nuestros residuos también van en aumento, al darle una segunda
          oportunidad a los residuos que generamos en casa mediante la
          clasificación, reutilización y reciclaje generaremos beneficios que
          permitirán un ahorro de energía, materias primas, agua y una
          significativa reducción de la contaminación atmosférica por gases de
          efecto invernadero. Además, con el reciclaje también aportamos a la
          generación de empleo e impulsamos la economía circular.
        </p>

        <div>
          <h3 className={estilosPagina.titulo3}>
            ¿Por qué reciclar ayuda al medio ambiente?
          </h3>
          <p className={estilosPagina.cuerpo}>
            El reciclaje es uno de los caminos para alcanzar un consumo
            responsable en nuestro estilo de vida, así está establecido en el
            objetivo número 12 de los Objetivos de Desarrollo Sostenible (ODS)
            que plantean la meta para que antes del 2030 logremos adoptar
            cambios en nuestros modelos de producción y consumo que garanticen
            una economía circular haciendo más con menos, lo cual significa
            producir productos nuevos con menos residuos.
          </p>
        </div>
        <Image src={imgPagina} layout="responsive" alt="Imagen, reciclaje"></Image>

        <div className="text-center">
          <h2 className={estilosPagina["titulo2-sm"]}>
            Aprende reciclar de manera divertida y rápida
          </h2>
          <Button
            href="https://cursos.recreabolivia.org/course/index.php?categoryid=1"
            className={estilosPagina.botonNaranja}
          >
            Registrate aquí
          </Button>
        </div>

        <h2 className={estilosPagina["titulo2-sm"]}>
          También podría interesarte
        </h2>

        <RecolectoresBase volteada />
      </ContenidoPagina>

      <Footer />
    </>
  );
}
