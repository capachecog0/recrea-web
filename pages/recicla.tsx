import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";
import imgSeUnHeroe from "public/carrusel/se-un-heroe.png";
import React from "react";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";
import styles from "styles/SeUnHeroe.module.scss";

import { TarjetaEnlace } from "components/tarjetaEnlace";
import Footer from "components/footer";

import imgBanner from "public/paginas/recicla/banner.png";
import imgExtra from "public/paginas/recicla/extra.png";

import imgClasificar from "public/paginas/recicla/clasificar.png";
import imgSeparar from "public/paginas/recicla/separar.png";
import imgEnterrar from "public/paginas/recicla/enterrar.png";

export default function SeUnHeroe() {
  return (
    <>
      <Encabezado />

      <ImagenCarrusel
        src={imgBanner}
        captionClassName="texto-verde"
        alt="Recolectores"
      >
        <h3 className={styles["caption-encabezado"]}>Recicla</h3>
        <p className={styles["caption-texto"]}>
          te enseñamos <br />
          como hacerlo
        </p>
      </ImagenCarrusel>

      <ContenidoPagina>
        <TituloPagina>Recicla</TituloPagina>
        <h2 className={estilosPagina.titulo2}>
          ¿Cómo generar menos basura en casa?
        </h2>

        <p className={estilosPagina.cuerpo}>
          Te compartimos los siguientes Tips:
        </p>

        <TarjetaEnlace titulo="TIP 1: CLASIFICAR " imagen={imgClasificar}>
          Divide tus residuos:
          <ul>
            <li> Restos de alimentos (Cascaras) </li>
            <li>
              Residuos no reciclables (focos, plastoformo, esponjas, etc.)
            </li>
          </ul>
        </TarjetaEnlace>

        <TarjetaEnlace volteada titulo="Tip 2: SEPARAR" imagen={imgSeparar}>
          Separa tus residuos
          <ul>
            <li> Plásticos y latas</li>
            <li>Separa tus botellas de vidrio</li>
          </ul>
          Nota: Recuerda que al estar limpios y secos no generan ningún olor
        </TarjetaEnlace>

        <TarjetaEnlace
          titulo="Tip 3: ENTIERRA LO ORGÁNICO "
          imagen={imgEnterrar}
        >
          Divide tus residuos:
          <ul>
            <li> Puedes comer todo lo que cocinas. </li>
            <li>Compra solo lo necesario.</li>
            <li>
              Si tienes jardín puedes enterrarlos y si no puedes guardarlos en
              una caja de madera o cartón.
            </li>
          </ul>
        </TarjetaEnlace>

        <div className="text-center">
          <h2 className={estilosPagina["titulo2-sm"]}>
            Si quieres mas trucos y nuevas formas de Reciclar desde casa
            regístrate en nuestros talleres
          </h2>

          <Button
            href="https://cursos.recreabolivia.org"
            className={estilosPagina.botonNaranja}
          >
            Registrate aquí
          </Button>
        </div>

        <h2 className={estilosPagina["titulo2-sm"]}>
          También podría interesarte
        </h2>

        <TarjetaEnlace
          titulo="Vivamos verde"
          imagen={imgExtra}
          textoBoton="Más infomación"
          href="/recicla"
        >
          Si tienes de 5 a 7 años, aprende tus primeros pasos verdes.
        </TarjetaEnlace>
      </ContenidoPagina>

      <Footer />
    </>
  );
}

const ContenidoPagina: React.FC = ({ children }) => {
  return (
    <Container as="main">
      <Row className="justify-content-center">
        <Col md="12" lg="10" xl="8">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

const TituloPagina: React.FC = ({ children }) => {
  return <h1 className={estilosPagina.titulo}>{children}</h1>;
};
