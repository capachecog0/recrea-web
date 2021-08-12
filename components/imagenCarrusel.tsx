import React from "react";
import Image from "next/image";
import { Button, Carousel } from "react-bootstrap";
import styles from "./Carrusel.module.scss";


interface ImagenCarruselProps {
    src: StaticImageData;
    alt: string;
    captionClassName?: string;
    children: React.ReactNode;
    priority?: boolean;
    [x: string]: any;
  }

export default function ImagenCarrusel({
    src,
    priority = false,
    alt,
    captionClassName,
    children  
  }: ImagenCarruselProps) {
    return (
      <>
        <Image
          src={src}
          alt={alt}        
          priority={priority}
          layout="responsive"
          placeholder="blur"
        />
        <Carousel.Caption
          className={`${styles["carousel-caption"]} ${captionClassName || ""}`}
        >
          {children}
        </Carousel.Caption>
      </>
    );
  }
  