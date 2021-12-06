import React from "react";

import style from "./tarjetaLibro.module.scss";
import downloadIcon from "public/iconos/icon-download.svg";

import Image from "next/image";

export function TarjetaLibro(datos:any){
    return <div className={style.tarjetaLibroComponent}>
        {datos.embed?
            <div className={style.previewTarjetaLibro}>
                <iframe src={datos.embed} title={datos.titulo}></iframe>
            </div>
        : 
            <></>
        }
        <div className={style.datosTarjetaLibro}>
            <div>
                <h2 onClick={()=>{
                    window.location.href = datos.link;
                }}>{datos.titulo}</h2>
                <h3>{datos.descripcion}</h3>
            </div>
            <div>
                <a href={datos.link} className="btn-download" target="_blank" rel="noreferrer"> 
                    <Image src={downloadIcon} alt="Descargar icono"></Image>
                </a>
            </div>
        </div>
    </div>    
}