import React from "react";
import { Button, Card, Col, Ratio, Row } from "react-bootstrap";
import Image from "next/image";
import style from "./tarjetaEnlace.module.scss";
import Link from "next/link";

interface TarjetaEnlaceProps {
  titulo?: string;
  imagen: StaticImageData | string;
  volteada?: boolean;
  centrada?: boolean;
  textoBoton?: string;
  href?: string;
  small?: boolean;
  children: React.ReactNode;
}
export function TarjetaEnlace({
  titulo,
  imagen,
  volteada = false,
  centrada = false,
  textoBoton,
  href,
  small = false,
  children,
}: TarjetaEnlaceProps) {
  let multimedia: React.ReactNode;
  if (typeof imagen === "string") {
    multimedia = (
      <Ratio aspectRatio="16x9">
        <iframe
          src={imagen}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Recrea en Youtube"
        />
      </Ratio>
    );
  } else {
    multimedia = <Image src={imagen} layout="responsive" />;
  }

  return (
    <Row className="justify-content-center align-items-center mb-2 mb-sm-3 mb-md-5">
      <Col >
        {multimedia}
      </Col>
      <Col md={{ order: volteada ? "first" : "last"}} >
        <Card
          className={`${style.contenedor} ${
            centrada ? "text-md-center" : "text-md-left"
          }`}
        >
          <Card.Body>
            {!!titulo && (
              <Card.Title
                className={`${
                  small ? style.cabeceraPequeña : style.cabecera
                } mb-3`}
              >
                {titulo}
              </Card.Title>
            )}
            <Card.Text className={`mb-3`}>{children}</Card.Text>
            {textoBoton && (<BotonTarjeta href={href}>{textoBoton}</BotonTarjeta>) }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

type BotonTarjetaProps = {
  href?: string;
  children: React.ReactNode;
};

function BotonTarjeta({ href, children }: BotonTarjetaProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <Button className={style.boton}>{children}</Button>
      </Link>
    );
  } else {
    return <Button className={style.boton}>{children}</Button>;
  }
}
