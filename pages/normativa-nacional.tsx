import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";
import imgBanner from "public/paginas/educate/banner.png";
import React from "react";
import estilosPagina from "styles/pagina.module.scss";

import imgLibros from "public/misc/libros.png";

import { TarjetaEnlace } from "components/tarjetaEnlace";
import Footer from "components/footer";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { TarjetaLibro } from "components/tarjetaLibro";

export default function NormativaNacional() {
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
            Leyes y normativas nacionales
        </TituloPagina>
        <h2 className={estilosPagina.titulo2} style={{fontSize: "1.25em"}}>
            Conoce un poco más las normativas nacionales.
        </h2>
        
        <div className={estilosPagina.containerResponsive}>
        <TarjetaLibro titulo="Ley N° 755" descripcion="Ley De Gestión Integral De Residuos" link="https://drive.google.com/file/d/1DIHT15b8iwjy0MeZZ7Cri9lWD2GKuzVQ/view" embed="https://drive.google.com/file/d/1DIHT15b8iwjy0MeZZ7Cri9lWD2GKuzVQ/preview"/>
        <TarjetaLibro titulo="Decreto Supremo 2954" descripcion="Ley N° 755 Ley De Gestión Integral De Residuos" link="https://drive.google.com/file/d/1aIYPu_uZ9yiwoWpj3-lKpqzIQZnL2ALs/view"/>
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

