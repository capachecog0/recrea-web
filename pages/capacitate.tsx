import Encabezado from "components/encabezado";
import {
  MomentoDeActuar,
  Recicla,
  RecolectoresBase,
  SeUnHeroe,
  VivamosVerdes,
} from "components/enlacesComunes";
import Footer from "components/footer";
import ImagenCarrusel from "components/imagenCarrusel";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { TarjetaEnlace } from "components/tarjetaEnlace";
import imgBanner from "public/paginas/capacitate/banner.png";
import imgExtra from "public/paginas/se-un-heroe/imagen-extra.png";
import React from "react";
import estilosPagina from "styles/pagina.module.scss";

export default function Capacitate() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-verde"
          alt="Capacitate"
        >
          <h3>Capacítate</h3>
          <p>
            conoce todos <br /> nuestros cursos
          </p>
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina>Capacítate</TituloPagina>
        <h2 className={estilosPagina.titulo2}>
          Conoce todos los cursos y capacitaciones que tenemos para ti.
        </h2>

        <Recicla />

        <VivamosVerdes volteada />

        <SeUnHeroe />

        <MomentoDeActuar volteada />

        <RecolectoresBase />
        
      </ContenidoPagina>

      <Footer />
    </>
  );
}
