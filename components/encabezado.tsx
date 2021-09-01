import React from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./encabezado.module.scss";

export default function Encabezado() {
  return (
    <Container fluid as={"header"}>
      <Row className={`${styles.logo} align-items-center`}>
        <Col>
          <Link href="/">
            <a><Image
              src="/logos/logo-recrea.png"
              height={56}
              width={178}
              alt="Re-crea"
            /></a>
          </Link>
        </Col>
      </Row>
      <Row
        className={`${styles.navbar} align-items-center justify-content-center`}
      >
        <Col xs="auto" className={styles.navbarcolumn}>
          <Link href="/capacitate">
            <a className={`${styles.navbarlink}`}>Capacitate</a>
          </Link>
        </Col>
        <Col xs="auto" className={styles.navbarcolumn}>
          <Link href="/">
            <a className={`${styles.navbarlink}`}>Se Parte</a>
          </Link>
        </Col>
        <Col xs="auto" className={styles.navbarcolumn}>
          <Link href="/">
            <a className={`${styles.navbarlink}`}>Educate</a>
          </Link>
        </Col>
        <Col xs="auto" className={styles.navbarcolumn}>
          <Link href="/">
            <a className={`${styles.navbarlink}`}>Conocenos</a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
