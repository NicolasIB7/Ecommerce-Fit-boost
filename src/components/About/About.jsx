import React from "react";

function About() {
  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
        marginBottom: "10%",
        marginTop: "10%",
        padding: "5%",
        border: "solid",
        backgroundColor: "#004E64",
      }}>
      <h1 style={{ fontSize: 40, textDecoration: "underline" }}>FIT-BOOST</h1>

      <h2>
        ¡Bienvenido a nuestra tienda de suplementos deportivos!
        <br />
        <br />
        En Fit-boost, ofrecemos una amplia selección de suplementos de alta
        calidad para ayudarte a alcanzar tus metas fitness y deportivas. Desde
        proteínas en polvo hasta quemadores de grasa, tenemos todo lo que
        necesitas para potenciar tu rendimiento.
        <br />
        Nuestra página, desarrollada con React y MUI Material, proporciona una
        experiencia de compra intuitiva y sin complicaciones.
        <br />
        <br />
        Nuestro equipo de atención al cliente está aquí para responder tus
        preguntas y brindarte asesoramiento personalizado. Confía en nosotros
        para obtener suplementos confiables y de calidad.
        <br />
        <br />
        ¡Comienza hoy mismo tu viaje hacia un rendimiento excepcional en
        Fit-boost!
      </h2>
    </div>
  );
}

export default About;
