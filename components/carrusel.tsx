import React from "react";
import Image from "next/image";
import { Button, Carousel } from "react-bootstrap";
import styles from "./Carrusel.module.scss";

import imgSeUnHeroe from "public/carrusel/se-un-heroe.png";
import imgCambioPositivo from "public/carrusel/genera-cambio-positivo.png";
import imgTodosAyudamos from "public/carrusel/todos-podemos-ayudar.png";
import imgCambioImpacto from "public/carrusel/cambio-impacto.png";
import imgJornadasRecoleccion from "public/carrusel/jornadas-recoleccion.png";
import ImagenCarrusel from "./imagenCarrusel";
import Link from "next/link";

export default function Carrusel() {
  return (
    <>      
      <Carousel
        fade
        indicators={false}
        prevLabel=""
        nextLabel=""
        className="mb-2 mb-sm-3 mb-md-5"
        interval={null}
      >
        <Carousel.Item>
          <ImagenCarrusel
            priority
            src={imgSeUnHeroe}
            captionClassName="texto-verde"
            alt="Se un Heroe"
          >
            <h3 className={styles["caption-encabezado"]}>¡Se un héroe!</h3>
            <p className={styles["caption-texto"]}>Salva la naturaleza</p>
            <Link href="/se-un-heroe">
              <Button className={styles["boton-carrusel"]}>
                haz click aquí
              </Button>
            </Link>
          </ImagenCarrusel>
        </Carousel.Item>

        <Carousel.Item>
          <ImagenCarrusel
            src={imgCambioPositivo}
            alt="Genera un cambio positivo"
          >
            <h3 className={`${styles["caption-encabezado"]} texto-blanco`}>
              ¡Genera <br /> un cambio <br /> positivo!
            </h3>
          </ImagenCarrusel>
        </Carousel.Item>

        <Carousel.Item>
          <ImagenCarrusel
            src={imgTodosAyudamos}
            alt="Todos Podemos Ayudar"
            captionClassName={styles["caption-encabezado"]}
          >
            <h3 className={styles["caption-encabezado"]}>
              Todos <br /> podemos <br /> ayudar
            </h3>
          </ImagenCarrusel>
        </Carousel.Item>

        <Carousel.Item>
          <ImagenCarrusel
            src={imgCambioImpacto}
            alt="Todo cambio genera un gran impacto"
          >
            <h3 className={`${styles["caption-encabezado"]} texto-naranja`}>
              ¡Todo cambio!
            </h3>
            <p className={`${styles["caption-texto"]} texto-verde`}>
              Genera un gran <br className=".d-none .d-sm-block" /> impacto.
            </p>
            <Button className={styles["boton-carrusel"]}>
              Te enseñamos como
            </Button>
          </ImagenCarrusel>
        </Carousel.Item>

        <Carousel.Item>
          <ImagenCarrusel
            src={imgJornadasRecoleccion}
            alt="Conoce nuestras jornadas de  recoleccion"
          >
            <p className={`${styles["caption-texto"]} texto-blanco`}>
              Conoce nuestras
            </p>
            <h3 className={`${styles["caption-encabezado"]} texto-amarillo`}>
              jornadas de <br className=".d-none .d-sm-block" /> recolección
            </h3>
            <Button className={styles["boton-carrusel"]}>haz click aquí</Button>
          </ImagenCarrusel>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
