import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";
import imgSeUnHeroe from "public/carrusel/se-un-heroe.png";
import React from "react";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";

import imgPagina from "public/paginas/se-un-heroe/imagen-pagina.png";
import imgExtra from "public/paginas/se-un-heroe/imagen-extra.png";

import { TarjetaEnlace } from "components/tarjetaEnlace";
import Footer from "components/footer";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { MomentoDeActuar } from "components/enlacesComunes";

export default function SeUnHeroe() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgSeUnHeroe}
          captionClassName="texto-verde"
          alt="Se un Heroe"
        >
          <h3>¡Se un héroe!</h3>
          <p>
            Recicla desde casa <br /> te enseñaremos como
          </p>
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina>
          Se Un Heroe <small>8 a 11 años</small>
        </TituloPagina>
        <h2 className={estilosPagina.titulo2}>
          Enseña a tus niños a ser el cambio desde el inicio
        </h2>
        <p className={estilosPagina.cuerpo}>
          Dar a los niños la oportunidad de aprender sobre el reciclaje,
          significa darles las herramientas para que puedan ser los diseñadores
          de un mejor futuro. Aprendiendo la importancia de los recursos
          naturales, el valor que tienen los productos cuando terminan su uso
          original y el cómo reducir la contaminación puede beneficiar a todos.
        </p>

        <div>
          <div className={estilosPagina.imagenCuerpo}>
            <Image src={imgPagina} alt="Imagen, se un heroe"></Image>
          </div>
          <h3 className={estilosPagina.titulo3}>
            ¿Por qué enseñar a los niños a reciclar?
          </h3>
          <p className={estilosPagina.cuerpo}>
            Enseñar a los niños sobre la importancia del reciclaje a través de
            juegos y actividades que despierten su curiosidad por el mundo que
            nos rodea y ayudándoles a entender cómo funciona, para lograr de
            esta manera convertirse en los diseñadores de un mundo con menos
            basura, reforzando sus valores de cuidado y compromiso con el medio
            ambiente.
          </p>
          <p className={estilosPagina.cuerpo}>
            Es por eso que es de vital importancia darles las mejores
            herramientas a nuestros hijos, que les permita enfrentar el mañana
            con esperanza y la seguridad de que es posible un mundo más
            sostenible.
          </p>
        </div>

        <div className="text-center">
          <h2 className={estilosPagina["titulo2-sm"]}>
            Enseña a los niños a reciclar de manera fácil y divertida
          </h2>
          <Button
            href="https://cursos.recreabolivia.org/course/view.php?id=2"
            className={estilosPagina.botonNaranja}
          >
            Registralos aquí
          </Button>
        </div>

        <h2 className={estilosPagina["titulo2-sm"]}>
          También podría interesarte
        </h2>

        <MomentoDeActuar />
      </ContenidoPagina>

      <Footer />
    </>
  );
}

