import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";

import styles from "./footer.module.scss";

import face from "public/redes/Icon-FaceWhite.svg";
import insta from "public/redes/Icon-Instagram-White.svg";
import tiktok from "public/redes/Icon-TikTok-White.svg";
import twitter from "public/redes/Icon-Twitter-White.svg";
import whats from "public/redes/Icon-Whatsapp-Whatsapp.svg";
import youtube from "public/redes/Icon-Youtube-White.svg";

import style from "./redes.module.scss";

export default function Redes(datos:any){
    let color = datos.color;
    return <Col className={styles["seccion-redes"]}>
        <div className="mb-1">Siguenos en nuestras redes</div>
        <div className={color==="dark"? style.redesComponentDark:""}>
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
            <a
                className={styles["link-redes"]}
                target="_blank" rel="noopener noreferrer"
                href="https://www.tiktok.com/@recreaorg"
            >
                <Image src={tiktok}></Image>
            </a>
            <a
                className={styles["link-redes"]}
                target="_blank" rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCZhxp1V_RvN-aR9E8ViiDEA"
            >
                <Image src={youtube}></Image>
            </a>
        </div>
    </Col>
}