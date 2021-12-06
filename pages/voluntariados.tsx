import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";
import imgBanner from "public/carrusel/genera-cambio-positivo.png";
import React from "react";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";

import imgLibros from "public/misc/libros.png";
import imgSeUnHeroe from "public/misc/nino-robot.png";
import { TarjetaEnlace } from "components/tarjetaEnlace";
import Footer from "components/footer";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { MomentoDeActuar } from "components/enlacesComunes";
import { TarjetaLibro } from "components/tarjetaLibro";

export default function Voluntariados() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-naranja"
          alt="Se un Heroe"
        >
          
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina>
            Voluntariados
        </TituloPagina>
        <h2 className={estilosPagina.titulo2} style={{fontSize: "1.25em"}}>
            Forma parte del equipo que genera el cambio
            <br/>Hay muchos motivos para hacer voluntariado!
        </h2>
        
        <p>
            Hay muchos motivos para hacer voluntariado!
            <br />Hacerse voluntaria o voluntario es una decisión muy personal que se debe tomar valorando las razones que nos mueven, nuestras inquietudes, capacidades, aptitudes y también las necesidades de la sociedad o nuestro entorno.
            <br />Si te sientes abrumado por el problema climático, por todo lo que la naturaleza se ve afectada por la contaminación, una contaminación que nuestra sociedad provoca.
            <br />Es momento de hacer algo al respecto. 
            <br />
            <br />¿Qué haremos al respecto?
            <ul>
                <li>Ayuda a generar mayor conciencia ambiental en la sociedad. </li>
                <li>Promover el cuidado del medio ambiente en nuestros parques, plazas.</li>
                <li>Se parte de actividades de limpieza y reforestación.</li>
            </ul>
        </p>

        <div className="text-center" style={{marginBottom: "2em"}}>
          <h2 className={estilosPagina["titulo2-sm"]}>
            ¿Quieres ser parte de la Solución?
          </h2>
          <Button
            href="https://https://api.whatsapp.com/send?phone=59178800360"
            className={estilosPagina.botonNaranja}
          >
            Contáctanos
          </Button>
        </div>

        <TarjetaEnlace
            titulo="Se un héroe"
            imagen={imgSeUnHeroe}
            textoBoton="Más infomación"
            href="/se-un-heroe"
            volteada
        >
            Si tienes de 8 a 14 años, se parte del equipo y recicla desde casa.
        </TarjetaEnlace>
      </ContenidoPagina>

      <Footer />
    </>
  );
}

