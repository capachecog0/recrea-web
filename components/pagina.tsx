import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import estilosPagina from "styles/pagina.module.scss";

export const ContenidoPagina: React.FC = ({ children }) => {
    return (
      <Container as="main">
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            {children}
          </Col>
        </Row>
      </Container>
    );
  };
  
  export const TituloPagina: React.FC = ({ children }) => {
    return <h1 className={estilosPagina.titulo}>{children}</h1>;
  };
  