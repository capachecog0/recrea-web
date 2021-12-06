import Encabezado from "components/encabezado";
import ImagenCarrusel from "components/imagenCarrusel";

import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import estilosPagina from "styles/pagina.module.scss";
import styles from "styles/SeUnHeroe.module.scss";

import { TarjetaEnlace } from "components/tarjetaEnlace";
import Footer from "components/footer";

import imgBanner from "public/paginas/videoteca/banner.jpg";

import imgClasificar from "public/paginas/recicla/clasificar.png";
import imgSeparar from "public/paginas/recicla/separar.png";
import imgEnterrar from "public/paginas/recicla/enterrar.png";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import { VivamosVerdes } from "components/enlacesComunes";
import {TarjetaVideo} from "components/tarjetaVideo";

export default function Videoteca() {
  return (
    <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          captionClassName="texto-verde"
          alt="Recolectores"
        >
          <h3 className={styles["caption-encabezado"]} style={{color: "var(--tema-naranja)"}}>Videoteca<br />Re.Crea</h3>
          
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina>Videoteca Re.Crea</TituloPagina>

        <div className={estilosPagina.containerResponsive}>        
            <TarjetaVideo titulo="Conoce la ruta del reciclaje" descripcion="Se parte desde casa para conocer la Ruta del Reciclaje que viene desarrollando el Municipio de la ciudad de La Paz." link="YKbDX5Artnw"/>
            <TarjetaVideo titulo="#ReCrea tu manera de Reciclar el Papel" descripcion="¿Sabías que? La fabricación de papel reciclado consume un 62% menos de energía y un 86% menos de agua que el papel nuevo." link="12PFnW2sZ5Y"/>
            <TarjetaVideo titulo="#ReCrea tu manera de Reciclar las Latas" descripcion="¿Sabías que? Te mostramos cómo reciclar correctamente las latas y puedes dejar las mismas en los contenedores diferenciados." link="/F5UuXPgpUEk"/>
            <TarjetaVideo titulo="#ReCrea tu manera de reciclar el Aluminio" descripcion="¿Sabías que? Para conseguir una tonelada de aluminio puro son necesarias cuatro toneladas de bauxita. Te invitamos a que separes tus residuos desde casa; en el video a continuación te mostramos cómo reciclar correctamente el aluminio." link="rOGlmvW3P_o"/>
            <TarjetaVideo titulo="#ReCrea tu manera de reciclar el Plástico" descripcion="¿Sabías que? Cada minuto, se venden un millón de botellas de plástico en todo el mundo y Si los datos se mantienen, los océanos contendrían más plástico que peces en 2050 según datos de la ONU." link="432QljwCWrQ"/>
            <TarjetaVideo titulo="#ReCrea tu manera de reciclar el Vidrio" descripcion="¿Sabías que? Por cada tonelada de vidrio reciclado se ahorran 130 kilos de combustible y 1.200 kg de materia prima." link="X_DEySESCQE"/>
            <TarjetaVideo titulo="#ReCrea junto a la Fundación Coca - Cola en toda Bolivia" descripcion={<>¿Sabías que? El PET es el plástico más reciclado porque es flexible, no se quiebra, no corta y es más económico comparado con otros. Conoce más sobre dónde puedes dejar tus botellas PET, para que sean recicladas. <a href="https://www.coca-coladebolivia.com.bo/contenedores">https://www.coca-coladebolivia.com.bo/contenedores</a> ¡Reciclemos juntos! #UnMundoSinResiduos ¡Reciclemos juntos! #UnMundoSinResiduos </>} link="zhiyRtaoDt4"/>
            <TarjetaVideo titulo="#ReCrea en La Paz, junto a la Alcaldía" descripcion={<>¿Sabías que? El reciclaje ayuda a conservar la energía y como resultado menos son emitidos menos gases de efecto invernadero. ¿Lo sabías? Te mostramos un poco de las islas verdes que podrás encontrar en la ciudad de La Paz. <a href="http://sitservicios.lapaz.bo/contenedores/">http://sitservicios.lapaz.bo/contenedores/</a> #UnMundoSinResiduos</>} link="sMOi8BeuE_Y"/>
            <TarjetaVideo titulo="ReCreando Bolivia" descripcion={<><>El octavo capítulo de Con-Tacto ya está aquí !!! ♥📽️👩🏻 💻🎬 En esta oportunidad acompañaremos a los voluntarios de ReCrea 🙋🏻 ♀️🙋🏻 ♂️🤗 Un grupo enfocado en ayudar al medio ambiente! 🌱🫂🙋🏻 ♂️🙋🏻 ♀️ ¡Quédate, disfruta y comparte! ♥💫 Síguenos en nuestras redes: </> <a href="https://bit.ly/3yhsMRh">Instagram</a> <a href="https://bit.ly/3xfKq7W"></a> <a href="https://bit.ly/2USaUOn">Facebook</a></>} link="BfMQEpZs9xw"/>
            <TarjetaVideo titulo="Campaña #SeUnHéroe La Paz" descripcion="Te invitamos a vivir un poco la aventura que tuvimos con los amigos de PICA Bolivia , para que de esta forma logremos generar conciencia sobre las botellas PET. ¿Te unes?" otherFrame={<><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FReCreaOrg%2Fvideos%2F171399638475813&width=734&show_text=false&height=414&appId" style={{border:"none",overflow:"hidden"}} frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen></iframe></>}/>
        </div>

      </ContenidoPagina>

      <Footer />
    </>
  );
}
