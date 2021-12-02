import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./enlacesHome.module.scss";

import imgCapacitate from "public/home/capacitate.png";
import imgEducate from "public/home/educate.png";
import imgSeParte from "public/home/se-parte.png";
import { TarjetaEnlace } from "./tarjetaEnlace";

export default function EnlacesHome() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="12" lg="10" xl="8">
          <TarjetaEnlace
            titulo="Capacítate"
            imagen={imgCapacitate}
            textoBoton="Más infomación"
          >
            Conoce todos los cursos y capacitaciones que tenemos para ti, no
            importa la edad que tengas.
          </TarjetaEnlace>

          <TarjetaEnlace
            volteada
            titulo="Se parte"
            imagen={imgSeParte}
            textoBoton="Más infomación"
          >
            Todos podemos lograr un cambio positivo <br></br> enterate como lo
            puedes lograr.
          </TarjetaEnlace>

          <TarjetaEnlace
            titulo="Edúcate"
            imagen={imgEducate}
            textoBoton="Más infomación"
          >
            El cambio comienza contigo, conoce nuestra biblioteca gratuita.
          </TarjetaEnlace>

          <Row
            className={`${style.cabecera} text-center justify-content-center mb-4 d-none d-md-flex`}
          >
            Videos
          </Row>

          <TarjetaEnlace
            volteada
            centrada
            imagen="https://www.youtube.com/embed/BfMQEpZs9xw"
            textoBoton="Revisa todos los videos"
          >
            Recrea tu manera <br /> de aprender desde casa{" "}
          </TarjetaEnlace>
        </Col>
      </Row>
    </Container>
  );
}
