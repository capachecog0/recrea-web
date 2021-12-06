import React, { useState } from "react";
import estilosPagina from "styles/pagina.module.scss";

import Image from "next/image";

import imgBanner from "public/paginas/se-parte/banner.png"

import style from "./tarjetaActividadesDeEquipo.module.scss";
import { Carousel } from "react-bootstrap";

export function TarjetaActividadesDeEquipo(datos:any){
    const [index, setIndex] = useState(0);

    let imagenes: string[] = datos.imagenes;
    return <div className={style.actividadesDeEquipo}>
        {/*
            <div className={estilosPagina.containerResponsive + "container-imagenes-actividades-equipo"}>
                {imagenes.map((element:any)=>{
                    return <img className="imagenes-actividades-equipo" src={element} alt="Actividad realizada con Re.Crea"/>
                })} 
            </div>*/
        }

        <div>
            <Carousel className="actividades-de-equipo-carrusel">
                {imagenes.map((element:any, index: number)=>{
                    return <Carousel.Item interval={5000} key={"actividades-de-equipo-"+index}>
                        <Image className="imagenes-actividades-equipo d-block w-100" src={element} alt="Actividad realizada con Re.Crea" width="50" height="50"/>
                    </Carousel.Item>                    
                })}
            </Carousel>
        </div>

        <div className={style.actividadesDatos}>
            <h2>
                {datos.titulo}
            </h2>
            <h3>
                {datos.fecha}
            </h3>
        </div>
    </div>
}