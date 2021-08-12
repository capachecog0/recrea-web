import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

import styles from "./patrocinadores.module.scss";

import logoCocacola from "public/logos/cocacola.png";
import logoColmena from "public/logos/colmena.png";

export default function Patrocinadores() {
  return (
    <Container className={`${styles.contenedor} mt-2 mt-sm-3 mt-md-5`}>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" lg="10" xl="8" className={styles["contenedor-borde"]}>
            <Row>
              <h3 className={`text-center texto-verde`}>
                Ellos confian en nosotros
              </h3>
            </Row>
            <Row className="justify-content-center">
              <Col xs="auto">
                <Image src={logoCocacola}></Image>
              </Col>
              <Col xs="auto">
                <Image src={logoColmena}></Image>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
