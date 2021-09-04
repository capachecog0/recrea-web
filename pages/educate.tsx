import Encabezado from "components/encabezado";
import Footer from "components/footer";
import ImagenCarrusel from "components/imagenCarrusel";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { TarjetaEnlace } from "components/tarjetaEnlace";

import imgBanner from "public/paginas/educate/banner.png";
import imgContenedor from "public/misc/contenedor-reciclaje.png";
import imgLibros from "public/misc/libros.png";
import imgLibrosInfantiles from "public/misc/libros-infantiles.png"

import React from "react";
import { Col } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";
import Image from "next/image";

export default function Educate() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-amarillo"
          alt="Educate"
        >
          <h3>Edúcate</h3>
          <p>
            tenemos toda la <br /> infomación que necesitas
          </p>
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina className={estilosPagina.tituloMargenReducido}>
          Edúcate
        </TituloPagina>

        <p className="text-center mb-5">
          El cambio comienza contigo, conoce nuestra biblioteca.
        </p>

        <TarjetaEnlace
          titulo="Conoce nuestros libros"
          imagen={imgContenedor}
          textoBoton="Más infomación"
          href="/libros-educativos"
        >
          Puedes descargar el material de Re.Crea
        </TarjetaEnlace>

        <TarjetaEnlace
          volteada
          titulo="Videoteca Re.Crea"
          imagen={imgLibros}
          textoBoton="Más infomación"
          href="/videoteca"
        >
          Revisa nuestra videoteca y aprende desde casa
        </TarjetaEnlace>

        <TarjetaEnlace          
          titulo="Puntos de Recolección"
          imagen={imgLibrosInfantiles}
          textoBoton="Más infomación"
          href="/libros-educativos"
        >
          Puntos de recolección a nivel Bolivia. 
        </TarjetaEnlace>

        <TarjetaEnlace
          volteada
          titulo="Leyes y Normativas Nacionales"
          imagen={imgLibros} 
          textoBoton="Más infomación"
          // href="/voluntariados"
        >
          Conoce un poco más las normativas nacionales.
        </TarjetaEnlace>

        

        
      </ContenidoPagina>

      <Footer />
    </>
  );
}
