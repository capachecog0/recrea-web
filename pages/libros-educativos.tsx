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

export default function LibrosEducativos() {
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
            Libros educativos
        </TituloPagina>
        <h2 className={estilosPagina.titulo2} style={{fontSize: "1.25em"}}>
            Conoce el material de Re.Crea y descargalo para conocer un poco más sobre los siguientes temas.
        </h2>
        
        <div className={estilosPagina.containerResponsive}>
          <TarjetaLibro titulo="Reciclando desde casa" descripcion="Manual de educación ambiental sobre reciclaje para niñas y niños" link="https://drive.google.com/file/d/1mqwM8KcsfTyc-Y-OXux-jhkQgMNaUIyi/view?usp=sharing" embed="https://drive.google.com/file/d/1mqwM8KcsfTyc-Y-OXux-jhkQgMNaUIyi/preview"/>
          <TarjetaLibro titulo="Bioseguridad para personas que recolectan residuos" descripcion="Guía para las medidas de bioseguridad y prevención de riesgos para personas que recolectan residuos" link="https://drive.google.com/file/d/1UGh5lmFgp7KdC3z4x6psp9k_gfCxyhSy/view?usp=sharing" embed="https://drive.google.com/file/d/1UGh5lmFgp7KdC3z4x6psp9k_gfCxyhSy/preview"/>
        </div>

        <h2 className={estilosPagina["titulo2-sm"]}>
          También podría interesarte
        </h2>

        <TarjetaEnlace
          volteada
          titulo="Videoteca Re.Crea"
          imagen={imgLibros}
          textoBoton="Más infomación"
          href="/videoteca"
        >
          Revisa nuestra videoteca y aprende desde casa
        </TarjetaEnlace>
      </ContenidoPagina>

      <Footer />
    </>
  );
}

