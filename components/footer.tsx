import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Image from "next/image";

import logoRecreaBlanco from "public/logos/logo-recrea-blanco.png";
import cellphoneIcon from "public/iconos/icon-cellphone.svg";
import emailIcon from "public/iconos/icon-mail.svg";

import styles from "./footer.module.scss";
import Redes from "./redes";

export default function Footer() {
  return (
    <Container fluid className={`${styles.contenedor} mt-5`}>
      <Row className={`${styles.contacto} justify-content-center`}>
        <Col xs="12" lg="10" xl="8">
          <Row className="justify-content-center">
            <Col className="pt-3">
              <Image src={logoRecreaBlanco}></Image>
              <h3 className="mt-4">Contáctanos</h3>
              <div className={`${styles["dato-contacto"]}`}>
                <Image
                  src={cellphoneIcon}
                  layout="fixed"
                  objectFit="scale-down"
                  
                ></Image>{" "}
                &nbsp; +591 78800360
              </div>
              <div className={styles["dato-contacto"]}>
                <Image
                  src={emailIcon}
                  layout="fixed"
                  objectFit="scale-down"
                  
                ></Image>{" "}
                &nbsp; colmenajuvenil@recreabolivia.org
              </div>
            </Col>
            <Redes />
          </Row>
        </Col>
      </Row>
      <Row
        className={`${styles.copyright} text-align-center tema-text-blanco `}
      >
        Todos los derechos reservados Re.Crea
      </Row>
    </Container>
  );
}
