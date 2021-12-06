import React from "react"
import style from "./tarjetaMapa.module.scss";
import Image from "next/image";

import gotoIcon from "public/iconos/icon-goto.svg";

export function TarjetaMapa(datos:any){
    //Agregar mapa iframe
    return <div className={style.tarjetaMapaComponent}>
        <div>
            <h2 onClick={()=>{
                window.location.href = datos.link;
            }}>{datos.titulo}</h2>
            <h3>{datos.descripcion}</h3>
        </div>
        <div>
            <a href={datos.link} className="btn-download" target="_blank"> 
                <Image src={gotoIcon} alt="Descargar icono"></Image>
            </a>
        </div>
    </div>
}