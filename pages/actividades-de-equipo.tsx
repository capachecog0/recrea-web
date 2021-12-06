import Encabezado from "components/encabezado";
import Footer from "components/footer";
import ImagenCarrusel from "components/imagenCarrusel";
import { ContenidoPagina, TituloPagina } from "components/pagina";
import imgBanner from "public/paginas/actividades/reunion.jpg"
import { TarjetaActividadesDeEquipo } from "components/tarjetaActividadDeEquipo";
import React from "react";
import estilosPagina from "styles/pagina.module.scss";

export default function ActividadesDeEquipo(){
    return <>
      <Encabezado />

      <div className="position-relative">
        <ImagenCarrusel
          src={imgBanner}
          alt="Capacitate"
        >
          <p>
            
          </p>
        </ImagenCarrusel>
      </div>

      <ContenidoPagina>
        <TituloPagina className={estilosPagina.tituloMargenReducido}>
          Actividades de equipo
        </TituloPagina>

        <p className="text-center mb-5">Conoce nuestras actividades</p>

        <div>
            <div className={estilosPagina.containerResponsive}>
                <TarjetaActividadesDeEquipo titulo="Se un héroe - Santa Cruz" fecha="26 de noviembre" imagenes={["https://lh4.googleusercontent.com/M8qILdh3SSBVzfEdq0ookqMF5oX-RQNyoSGCMwIcgr3imk3LBQl__oweghgDy8CaDIwxqosJoWc7EnlYEVGewQchSiUvSe8k-ZTwnoOq38_s5c9c110X1KFwlDeC6zMdb_V2YLgW", "https://lh5.googleusercontent.com/P0FDEJxYGpDwNCNHNEMoORQDQn3Nk3L-fPXzNHDhm1mj5a9o-66PReSxwNRVSnw-JXEDluaJIaCZo74yCGxiu1K9aYehag-pYC2963edCHBneXwXwPuSzMToaCUO39ln5laIYaIe"]}/>
                <TarjetaActividadesDeEquipo titulo="Se un héroe - Tarija" fecha="27 de octubre" imagenes={["https://lh6.googleusercontent.com/h5M6RTpVGtqJuC9kCPcOCuLP6J_VcwNXZrOJtitFDy_Q7UWUEGp0ls_pETUNQtCqsOYU89nlCh31RG6gK6y_rYYqJQMgFSzxCK8nonbcG4Qbsja_y9HD8tSI1LujxX_Z8LjLDBCy", "https://lh6.googleusercontent.com/Nc13S3WgkhdoezHfUupO1vkptSnJhQc1rEBJap16hxwOXlxg4Qwoy50SHvQcMzhTSEyCnXpQY3Y6WXqZBNlHSSftty5uSmvSXSPQqWttUYqApwTV66eLRTfOXDTYcI2UCoo97QL2"]}/>
                <TarjetaActividadesDeEquipo titulo="Se un héroe - Cochabamba" fecha="20 de octubre" imagenes={["https://lh6.googleusercontent.com/gBVx_bVL4xPT0qArRQW_ivNYXPt21Ul64Y_wiMvm8Xtzc-fho5d1vwuXsBc3xOHz24ZAVluV0vI1nUgWPzA7Kn0e3PgiY0kXzMtzvgTKJk2h3Fv2mprew7TORNlta5KNGyVvM4Ni", "https://lh6.googleusercontent.com/tQhjBhnYe0CBFiNKnGwEcRmYKe86oS4HuxYC4u_E4jAcNpdYBLb19eyYiJKPxpsBAdluShXZIPKv-JpMBYkrdV8qXJqm0MEQFUWUwfZatCFMBxhesIO94NR63sie4N8yGy11BVjS"]}/>
                <TarjetaActividadesDeEquipo titulo="Se un héroe - La Paz" fecha="26 de agosto" imagenes={["https://lh4.googleusercontent.com/lCxKmaD5P6F7Ir6NlRKnIoXuTf6qHP5zOiupFtX0O74x19j44QKWsqEQxi4kZJksijoy29uRhWgN82TDzbfXdMmpuLSL5_5prUrH2Lw2W39vx1wqNhILb4XGiGkRZlk8AQbCIsFK", "https://lh4.googleusercontent.com/NzUzxRPTp1EUOmbWZ_1p7IkpwVvwUNMBLp2vCFQ98wqAtjyirrgVCmqARhfNN1nUH3fE6XB3JfF6mn4G6JsIrTIbYWSl9TU7QBjqUuH1orVfhQT9zdjtKf-6fXoZH6a2gQFOyJn1", "https://lh3.googleusercontent.com/osY_65NkRqubp3psMHqrktpXlMrO_okX5kmEQJq6DlC8wOt83J5Vn2aCIBzUrWqPw6ajmk0RQXaRPznhwn-IPMmFl75NJ8E7CMrT0eRYFAzPkBS-TY2cJtCELlOJ0gFR7iCD6zLu", "https://lh3.googleusercontent.com/e7DOMdw-915DrxAZqEAg30ayekCR5KNkmX7OEa9YZ9Dqzycmv4DZ9bE7QEDsc9mGZQMv3PcPB2TKPH1NY95vX6e_ANzvI4lmWIYIdh8zvjUvIE2S6b14w2Pwzfr4ti1f9bB70pqQ"]}/>
                <TarjetaActividadesDeEquipo titulo="Julio sin Plástico" fecha="31 de julio" imagenes={["https://lh4.googleusercontent.com/pvy2t5D4DPU0SQxf-oV7ygJxpw7KBV9LyBSrRtRBOCYuUmSxvwq7HjWgQ5cTA9LwSSYxxvypqCbygZnMOHnYA2F9dutOX9LaGLa5zCz_zP4Qexr71KOqy4_d3fgdyFBob-71iJBj", "https://lh6.googleusercontent.com/VyW_BRlaxiUhpsuswPlNgJORpMo2xc3m9wjsBXjj8N9oKeyCl1huugZg_T1H5KR7fHYURQhakNbflq8-Oh7QMQVQK_aL6EpiCkiQKbrjpCb8rodSWvHJdpAUtaZJFs3rqiQ2BQad"]}/>
                <TarjetaActividadesDeEquipo titulo="Reforestación Quenallata" fecha="04 de julio" imagenes={["https://lh5.googleusercontent.com/OVieZPw835LPoElrTTL7bS77GTsQ2fzxwuTy2FhapDUa5fQ6XaVsnuL3y5JmuQX36jW2Kckn9nwIjR8F-8yR6-OA-LS4zgqCEGyrxbi6x_Yi7fCxyqnT4ixUCkLwyuocMTAGzrU7", "https://lh4.googleusercontent.com/e4Hre8BMUCf26KQJHyuZyqPxB7ETYpgU6ueOPTdKlllfhBAl4jk1xrF6qcv_jspsskXyO2dt6kIi_YSEamiFL2ysddEoAo9s-0jzJlKrx_RrZtsNppMM8Zh2nwCku8SU_49uDB6L"]}/>
                <TarjetaActividadesDeEquipo titulo="Limpieza Bolognia" fecha="19 de junio" imagenes={["https://lh6.googleusercontent.com/BDkTYALt5GsyBHfNyZTroZ8WjgCROCPYoborBQp8PwyKfexyYmOh-92WtWhPo7y_lDmxRiC-Jnnpf7khWk9oJksI0v--vmJ6fqgOyZIfOrx_UzbBKzE29KEfrMS7Za1tqGGjkJIt", "https://lh6.googleusercontent.com/fPwYQ8zw8L14ssjSoBo9-slwK7_lWEkqfZPJQFOiYlIlwz6YYyCgll1KQcsaDousAumYqs5X154s_TS2uHDijt-EiXW6m2zC-fRu71zbTJkQ9Tcqe6fO0m6wpkErpa9OI6hsLMMC"]}/>
                <TarjetaActividadesDeEquipo titulo="Limpieza Chojasivi" fecha="24 de mayo" imagenes={["https://lh3.googleusercontent.com/2rMW3tBXweiPh-o35DkTK_1bETY8V0tX58yjbJE21UZFTSuGe6jpVOiTJKwMSWIQn32I45bVI4-68Q1L3aRb8Mn_GzJts29Ou0XZscb8IkFpahTYOV_XTv--76t93gabgGwHbC8P", "https://lh5.googleusercontent.com/mFpMWiTabr4mwjhmp7IsQvdvd5jg0ljp_oNWZJRfLBGYFsXMBuKvfHGT2OdLof_Wym2zUzgHqR2Dr87wn8HTGMy2FJrcqHArNhuTnb1UiHXzYKA4t64j8LuIKGa4xl3Lq3Y2emRg"]}/>
                <TarjetaActividadesDeEquipo titulo="Limpieza a Tiquina" fecha="25 de abril" imagenes={["https://lh3.googleusercontent.com/coyBGsJZEjgRmLt13bVwWONKEKHeFVTZsd2nRItA27GjhOM2PVzVSODVtjxVMuYIfto6hYUjqGGFQ1azMMwtEG3gRI7i7v1aPDm4N4BqpM_aM28Q0MH1OTiWiLc7X7du6qFhUu3V", "https://lh3.googleusercontent.com/zdwv2L0xnQhfUvMBfkDmg-bs0SdQtjBimnM8K2YMCosBGP-LQWk760z7A8sQLNuu_hvBkH5etFOrZuKr7ST8nm8aFI2JCBnLWIkiyV0Gc1BGfYYzWRFXabjIIBt5WKJVMstBCgdq", "https://lh4.googleusercontent.com/KU2m8fkFgx2K5Un-vgl2t_sRXD2712TJ00niHyy9UFr5CArMyFMDwglLICLoZjJX5cW36Ehy1_RunA-0zNae7yLg38H6YNC5DcLV_g-yktwHl6uNfYHb_BuJSPsoMycN86SXcmQY"]}/>
            </div>
        </div>

      </ContenidoPagina>

      <Footer />
    </>
    
}