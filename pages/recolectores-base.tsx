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

import imgBanner from "public/paginas/recolectores-base/banner.png";
import imgPagina from "public/paginas/recolectores-base/cuerpo.png";
import imgExtra from "public/paginas/recolectores-base/extra.png";

export default function SeUnHeroe() {
  return (
    <>
      <Encabezado />

      <ImagenCarrusel
        src={imgBanner}
        captionClassName="texto-verde"
        alt="Recolectores"
      >
        <h3 className={styles["caption-encabezado"]}>Recolectores</h3>
        <p className={styles["caption-texto"]}>
          Separa de manera <br />
          inteligente
        </p>
      </ImagenCarrusel>

      <ContenidoPagina>
        <TituloPagina>Recolectores base</TituloPagina>
        <h2 className={estilosPagina.titulo2}>Bioseguridad en el trabajo</h2>

        <div>
          <div className={estilosPagina.imagenCuerpo}>
            <Image src={imgPagina}></Image>
          </div>

          <p className={estilosPagina.cuerpo}>
            Desde 1950 la producción de plástico va en aumento debido a la
            practicidad que permite para distintos usos siendo uno de ellos el
            transporte de alimentos que permite conectar al productor con el
            consumidor a través del recorrido de grandes distancias. Se calcula
            que cada persona aproximadamente genera 1kg de residuos cada día
            (Kaza, et al. 2018). Y en nuestro país Bolivia, la tasa de
            separación de residuos en origen para reciclaje es muy baja
            alcanzando un 4%. Es por eso que apoyar la labor de los recolectores
            base es fundamental para optimizar los recursos y permitir que el
            reciclaje crezca en nuestro país.
          </p>
          <p className={estilosPagina.cuerpo}>
            En este espacio queremos apoyar y capacitar a los recolectores de
            residuos en temas de bioseguridad para que puedan fortalecer sus
            conocimientos y contar con herramientas que les brinden protección a
            la hora de desempeñar su trabajo. También estamos abiertos a
            escuchar sus inquietudes y apoyar su trabajo.
          </p>

          <h2 className={estilosPagina["titulo3"]}>
            Materiales reciclables más comunes
          </h2>
          <p className={estilosPagina.cuerpo}>
            Te ofrecemos asesoramiento técnico sobre bioseguridad y herramientas
            que puedan mejorar tu seguridad laboral para llevar a cabo una
            recolección eficiente. El trabajo de un recolector de residuos es
            muy importante para luchar contra la contaminación evitando el
            desperdicio de materiales que pueden ser reinsertados en el círculo
            del reciclaje, contribuyendo de esta manera a una economía circular
            que genera un ahorro energético, hídrico y reduce la contaminación
            atmosférica.
          </p>
        </div>

        <div className="text-center">
          <h2 className={estilosPagina["titulo2-sm"]}>
            Por un trabajo seguro.
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
          titulo="Recicla"
          imagen={imgExtra}
          textoBoton="Más infomación"
          href="/recicla"
        >
          Te enseñamos los mejores tips para que puedas reciclar de manera fácil
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
