import React from "react";
import { TarjetaEnlace } from "./tarjetaEnlace";

import imgRecicla from "public/misc/nina-manualidades.png";
import imgVivamosVerdes from "public/misc/manos-plantin.png";
import imgSeUnHeroe from "public/misc/nino-robot.png";
import imgMomentoDeActuar from "public/misc/joven-limpiando.png";
import imgRecolectoresBase from "public/misc/basureros-colores.png";

export const Recicla: React.FC<{ volteada?: boolean }> = ({
  volteada = false,
}) => {
  return (
    <TarjetaEnlace
      titulo="Recicla"
      imagen={imgRecicla}
      textoBoton="Más infomación"
      href="/recicla"
      volteada={volteada}
    >
      Te enseñamos los mejores tips para que puedas reciclar de manera fácil
    </TarjetaEnlace>
  );
};

export const VivamosVerdes: React.FC<{ volteada?: boolean }> = ({
  volteada = false,
}) => {
  return (
    <TarjetaEnlace
      titulo="Vivamos verde"
      imagen={imgVivamosVerdes}
      textoBoton="Más infomación"
      href="/vivamos-verdes"
      volteada={volteada}
    >
      Si tienes de 5 a 7 años, aprende tus primeros pasos verdes.
    </TarjetaEnlace>
  );
};

export const SeUnHeroe: React.FC<{ volteada?: boolean }> = ({
  volteada = false,
}) => {
  return (
    <TarjetaEnlace
      titulo="Se un héroe"
      imagen={imgSeUnHeroe}
      textoBoton="Más infomación"
      href="/se-un-heroe"
      volteada={volteada}
    >
      Si tienes de 8 a 14 años, se parte del equipo y recicla desde casa.
    </TarjetaEnlace>
  );
};

export const MomentoDeActuar: React.FC<{ volteada?: boolean }> = ({
  volteada = false,
}) => {
  return (
    <TarjetaEnlace
      titulo="Es momento de actuar"
      imagen={imgMomentoDeActuar}
      textoBoton="Más infomación"
      href="/momento-de-actuar"
      volteada={volteada}
    >
      A partir de los 15 a 20 años, aprende como apoyar al Medio Ambiente.
    </TarjetaEnlace>
  );
};

export const RecolectoresBase: React.FC<{ volteada?: boolean }> = ({
  volteada = false,
}) => {
  return (
    <TarjetaEnlace
      volteada={volteada}
      titulo="Recolectores base"
      imagen={imgRecolectoresBase}
      textoBoton="Más infomación"
      href="/recolectores-base"
    >
      Mejora tus herramientas para realizar tu trabajo, con el material de
      bioseguridad adecuado.
    </TarjetaEnlace>
  );
};
