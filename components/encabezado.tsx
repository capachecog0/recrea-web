import React, { useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import logoRecreaBlanco from "public/logos/logo-recrea-blanco.png";

import styles from "./encabezado.module.scss";
import Redes from "./redes";

export default function Encabezado() {
  useEffect(()=>{
    document.onscroll = (ev:any)=>{
      let el = document.getElementById("logo-recrea-navbar") as HTMLDivElement;
      if(window.scrollY > convertRemToPixels(6)){
        console.log("visible")
        el.style.transition = "all 300ms";
        el.style.opacity = "1";
      }else{
        el.style.transition = "all 300ms";
        el.style.opacity = "0";

      }
    }
  }, [])

  function convertRemToPixels(rem:any) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  return (<>
    <Container fluid as={"header"}>
      <Row className={`${styles.logo} align-items-center`}>
        <Col>
          <Link href="/">
            <a><Image
              src="/logos/logo-recrea.png"
              height={56}
              width={178}
              alt="Logo Re.Crea"
            /></a>
          </Link>
        </Col>
        <Redes color="dark"/>
      </Row> 
      
    </Container>
    <div
        className={`${styles.navbar} align-items-center justify-content-center navbar-component`} id="navbar-component"
      >
        <div id="logo-recrea-navbar" className={styles.navbarlogo}> 
          <Link href="/">
            <Image src={logoRecreaBlanco} alt="Logo Re.Crea"/>
          </Link>
        </div>
        <div className={styles.navbarlinks}>
          <div className={styles.navbarcolumn}>
            <Link href="/capacitate">
              <a className={`${styles.navbarlink}`}>Capacitate</a>
            </Link>
          </div>
          <div className={styles.navbarcolumn}>
            <Link href="/se-parte">
              <a className={`${styles.navbarlink}`}>Se Parte</a>
            </Link>
          </div>
          <div className={styles.navbarcolumn}>
            <Link href="/educate">
              <a className={`${styles.navbarlink}`}>Educate</a>
            </Link>
          </div>
          <div className={styles.navbarcolumn}>
            <Link href="/conocenos">
              <a className={`${styles.navbarlink}`}>Conocenos</a>
            </Link>
          </div>
        </div>
      </div>
      
      
    </>
  );
}
