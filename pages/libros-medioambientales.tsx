import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";
import imgBanner from "public/paginas/educate/banner.png";
import React from "react";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";

import imgPagina from "public/paginas/se-un-heroe/imagen-pagina.png";
import imgExtra from "public/paginas/se-un-heroe/imagen-extra.png";
import imgLibros from "public/misc/libros.png";

import { TarjetaEnlace } from "components/tarjetaEnlace";
import Footer from "components/footer";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { MomentoDeActuar } from "components/enlacesComunes";
import { TarjetaLibro } from "components/tarjetaLibro";

export default function LibrosMedioambientales() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-naranja"
          alt="Se un Heroe"
        >
          
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina>
            Libros medioambientales
        </TituloPagina>
        <h2 className={estilosPagina.titulo2} style={{fontSize: "1.25em"}}>
            Conoce los libros medioambientales en las redes para que puedas conocer más y ser parte del impacto positivo.
        </h2>
        
        <div className={estilosPagina.containerResponsive}>
          <TarjetaLibro titulo="Libro Blanco" descripcion="El Libro Blanco de Economía Circulares es un libro para Ecuador el cual, recopila los conceptos de economía circular, planteados como un modelo de desarrollo regenerativo y restaurativo para el país." link="https://drive.google.com/file/d/1M9ewayD9E7s5sixDszifcp0HEMXgfYwH/" embed="https://drive.google.com/file/d/1M9ewayD9E7s5sixDszifcp0HEMXgfYwH/preview"/>
        </div>

        <h2 className={estilosPagina["titulo2-sm"]}>
          También podría interesarte
        </h2>

        <TarjetaEnlace
          volteada
          titulo="Conoce nuestros libros"
          imagen={imgLibros}
          textoBoton="Más infomación"
          href="/libros-educativos"
        >
          Conoce los libros medioambientales en las redes para que puedas conocer más y ser parte del impacto positivo.
        </TarjetaEnlace>
      </ContenidoPagina>

      <Footer />
    </>
  );
}

