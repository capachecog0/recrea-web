import Encabezado from "components/encabezado";
import Footer from "components/footer";
import ImagenCarrusel from "components/imagenCarrusel";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { TarjetaEnlace } from "components/tarjetaEnlace";
import imglibrosEducativos from "public/misc/libros-infantiles.png";
import imgNormativa from "public/misc/libros.png";
import imgActividades from "public/misc/reunion.png";
import imgVoluntarios from "public/misc/voluntarios.png";
import imgBanner from "public/paginas/se-parte/banner.png";
import imgBasurero from "public/misc/basureros-colores.png";
import imgCalendario from "public/paginas/se-parte/calendario.png";
import React from "react";
import { Col } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";
import Image from "next/image";

export default function SeParte() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-amarillo"
          alt="Capacitate"
        >
          <h3>Se parte</h3>
          <p>
            únete a nuestro <br /> equipo
          </p>
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina className={estilosPagina.tituloMargenReducido}>
          Se Parte
        </TituloPagina>

        <p className="text-center mb-5">Forma parte del cambio</p>

        <TarjetaEnlace
          titulo="Voluntariado"
          imagen={imgVoluntarios}
          textoBoton="Más infomación"
          href="/voluntariados"
        >
          Se parte del equipo, haz el cambio desde tu comunidad.
        </TarjetaEnlace>

        <TarjetaEnlace
          volteada
          titulo="Actividades de equipo"
          imagen={imgActividades}
          textoBoton="Más infomación"
          href="/actividades-de-equipo"
        >
          Forma parte del equipo que genera el cambio
        </TarjetaEnlace>

        <TarjetaEnlace
          titulo="Normativa Nacional"
          imagen={imgNormativa}
          textoBoton="Más infomación"
          href="/voluntariados"
        >
          Conoce la Normativa Nacional
        </TarjetaEnlace>

        <TarjetaEnlace
          volteada
          titulo="Libros educativos"
          imagen={imglibrosEducativos}
          textoBoton="Más infomación"
          href="/libros-educativos"
        >
          Descarga libros divertidos y de gran utilidad
        </TarjetaEnlace>

        <h2 className="text-center texto-naranja mb-4">Agenda del Mes</h2>

        <Col xs="12" lg="10" className="m-auto mb-5">
          <Image src={imgCalendario}></Image>
        </Col>

        <TarjetaEnlace
          titulo="Puntos de acopio"
          imagen={imgBasurero}
          textoBoton="Más infomación"
          href="/puntos-acopi"
        >
          Conoce los lugares donde puedes depositar tus residuos en el país
        </TarjetaEnlace>
      </ContenidoPagina>

      <Footer />
    </>
  );
}
