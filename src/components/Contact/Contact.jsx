import React, { useRef, useState } from "react";
import style from "./Contact.module.css";
import Swal from "sweetalert2";

function Form() {
  const emailRef = useRef();
  const nameRef = useRef();
  const asuntoRef = useRef();
  const infoRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire(
      "",
      "Tu mensaje fue recibido con exito. Nos estaremos contactando",
      "success"
    );
    setName("");
    setEmail("");
    setAsunto("");
    setInfo("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAsuntoChange = (e) => {
    setAsunto(e.target.value);
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const isNameValid = name.trim() !== "";
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isAsuntoValid = asunto.trim() !== "";

  return (
    <div className={style.form}>
      <form>
        <div className={style.form1}>
          <label htmlFor=''>Tu nombre</label>
          <input
            class='input'
            ref={nameRef}
            style={{ height: 56, borderRadius: "3%", fontSize: 20 }}
            value={name}
            onChange={handleNameChange}
            className={isNameValid ? "" : "invalid"}
          />
          {!isNameValid && (
            <p style={{ color: "red", fontSize: 25 }} className='error'>
              El campo es obligatorio
            </p>
          )}
        </div>
        <div className={style.form1}>
          <label htmlFor=''>Tu correo electrónico</label>
          <input
            class='input'
            ref={emailRef}
            style={{ height: 56, borderRadius: "3%", fontSize: 20 }}
            value={email}
            onChange={handleEmailChange}
            className={isEmailValid ? "" : "invalid"}
          />
          {!isEmailValid && (
            <p style={{ color: "red", fontSize: 25 }} className='error'>
              Por favor, ingresa un correo electrónico válido
            </p>
          )}
        </div>
        <div className={style.form1}>
          <label htmlFor=''>Asunto</label>
          <input
            class='input'
            ref={asuntoRef}
            style={{ height: 56, borderRadius: "3%", fontSize: 20 }}
            value={asunto}
            onChange={handleAsuntoChange}
            className={isAsuntoValid ? "" : "invalid"}
          />
          {!isAsuntoValid && (
            <p style={{ color: "red", fontSize: 25 }} className='error'>
              Por favor, ingresa el asunto del mensaje
            </p>
          )}
        </div>
        <div className={style.form1}>
          <label htmlFor=''>Tu mensaje (opcional)</label>
          <textarea
            class='input'
            ref={infoRef}
            style={{ height: 120, borderRadius: "3%", fontSize: 20 }}
            value={info}
            onChange={handleInfoChange}></textarea>
        </div>

        {!isNameValid || !isEmailValid || !isAsuntoValid ? (
          <button
            className={style.boton}
            disabled
            style={{ backgroundColor: "grey" }}>
            Enviar
          </button>
        ) : (
          <button type='submit' onClick={handleSubmit} className={style.boton}>
            Enviar
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
