import React from "react";

import style from "./tarjetaVideo.module.scss"; 

export function TarjetaVideo(datos:any){
    return (<div className={style.tarjetaVideoComponent}>
        {datos.link?
            <iframe src={"https://www.youtube.com/embed/"+datos.link} title={datos.titulo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        :
            datos.otherFrame?
                datos.otherFrame
            : 
                <></>
        }

        <h3 className="titulo-tarjeta-video-component">{datos.titulo}</h3>
        <h4 className="subtitulo-tarjeta-video-component">{datos.descripcion}</h4>
    </div>)
}