import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./encabezado.module.scss";


export default function Encabezado () {
  return (
    <Container fluid as={"header"}>
      <Row className={`${styles.logo} align-items-center`}>
        <Col>
          <Image
            src="/logos/logo-recrea.png" // Route of the image file
            height={56} // Desired size with correct aspect ratio
            width={178} // Desired size with correct aspect ratio
            alt="Re-crea"
          />
        </Col>
      </Row>
      <Row
        className={`${styles.navbar} align-items-center justify-content-md-center`}
      >
        <Col xs="auto" className={styles.navbarcolumn}>
          <Link href="/capacitate">
            <a className={`${styles.navbarlink}`}>Capacitate</a>
          </Link>
        </Col>
        <Col xs="auto" className={styles.navbarcolumn}>
          <Link href="/capacitate">
            <a className={`${styles.navbarlink}`}>Se Parte</a>
          </Link>
        </Col>
        <Col xs="auto" className={styles.navbarcolumn}>
          <Link href="/capacitate">
            <a className={`${styles.navbarlink}`}>Educate</a>
          </Link>
        </Col>
        <Col xs="auto" className={styles.navbarcolumn}>
          <Link href="/capacitate">
            <a className={`${styles.navbarlink}`}>Conocenos</a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
