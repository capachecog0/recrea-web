import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";
import imgBanner from "public/paginas/recolectores-base/banner.png";
import React from "react";
import estilosPagina from "styles/pagina.module.scss";

import imgVoluntarios from "public/misc/voluntarios.png";

import { TarjetaEnlace } from "components/tarjetaEnlace";
import Footer from "components/footer";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { TarjetaLibro } from "components/tarjetaLibro";
import { TarjetaMapa } from "components/tarjetaMapa";

export default function PuntosDeRecoleccion() {
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
            Nuestros puntos de recoleccion
        </TituloPagina>
        <h2 className={estilosPagina.titulo2} style={{fontSize: "1.25em"}}>
            Aporta al medio ambiente de manera sencilla
        </h2>
        
        <TarjetaMapa titulo="Contenedores de Coca Cola" descripcion="¡Nuestro compromiso por #UnMundoSinResiduos no se detiene! Sumamos más de 1000 contenedores más a la red de puntos limpios de Vital.
¡Descubre más aquí!
" link="https://www.coca-coladebolivia.com.bo/contenedores"/>
        <TarjetaMapa titulo="Contenedores Alcaldía de La Paz" descripcion="Conoce cómo separar tus residuos sólidos antes de depositarlos en los contenedores diferenciados instalados en nuestra ciudad.
Encuentra el más cercano a tu casa.
" link="http://sitservicios.lapaz.bo/contenedores/ "/>

        <h2 className={estilosPagina["titulo2-sm"]}>
          También podría interesarte
        </h2>

        <TarjetaEnlace
          titulo="Voluntariado"
          imagen={imgVoluntarios}
          textoBoton="Más infomación"
          href="/voluntariados"
          volteada
        >
          Se parte del equipo, haz el cambio desde tu comunidad.
        </TarjetaEnlace>
      </ContenidoPagina>

      <Footer />
    </>
  );
}

