import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Image from "next/image";

import logoRecreaBlanco from "public/logos/logo-recrea-blanco.png";
import cellphoneIcon from "public/iconos/icon-cellphone.svg";
import emailIcon from "public/iconos/icon-mail.svg";

import face from "public/redes/Icon-FaceWhite.svg";
import insta from "public/redes/Icon-Instagram-White.svg";
import tiktok from "public/redes/Icon-TikTok-White.svg";
import twitter from "public/redes/Icon-Twitter-White.svg";
import whats from "public/redes/Icon-Whatsapp-Whatsapp.svg";
import youtube from "public/redes/Icon-Youtube-White.svg";

import styles from "./footer.module.scss";

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
            <Col className={styles["seccion-redes"]}>
              <div className="mb-1">Siguenos en nuestras redes</div>
              <div>
                <a
                  className={styles["link-redes"]}
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.facebook.com/ReCreaOrg"
                >
                  <Image src={face}></Image>
                </a>
                <a
                  className={styles["link-redes"]}
                  target="_blank" rel="noopener noreferrer"
                  href="https://www.instagram.com/recreaorg"
                >
                  <Image src={insta}></Image>
                </a>
                <a
                  className={styles["link-redes"]}
                  target="_blank" rel="noopener noreferrer"
                  href="https://twitter.com/recreaorg"
                >
                  <Image src={twitter}></Image>
                </a>
                <a
                  className={styles["link-redes"]}
                  target="_blank" rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=59178800360"
                >
                  <Image src={whats}></Image>
                </a>
              </div>
            </Col>
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
