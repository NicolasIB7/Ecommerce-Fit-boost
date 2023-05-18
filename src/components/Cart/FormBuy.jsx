import React, { useRef, useState, useContext } from "react";
import style from "./FormBuy.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { contexto } from "../CustomProvider";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { saveSale } from "../../utils";

function FormBuy({ total, price }) {
  const { clearCart, cart } = useContext(contexto);
  const navigate = useNavigate();

  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const secEmailRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [secondEmail, setSecondEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSecEmailChange = (e) => {
    setSecondEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const venta = {
    carrito: cart,
    user: {
      nombre: name,
      telefono: phone,
      email: email,
    },
    total: total,
    totalPrice: price,
  };

  const handleBuy = () => {
    Swal.fire({
      title: "¿Está seguro que desea realizar la compra?",
      showCancelButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        saveSale(venta).then((id) => {
          Swal.fire(
            "Se realizó tu pedido",
            `Muchas gracias por la compra, el id de tu pedido es ${id}`,
            "success"
          ).then(() => {
            clearCart();
            navigate("/");
          });
        });
      }
    });
  };

  const isNameValid = name.trim() !== "";
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isPhoneValid = /^11\d{8}$/.test(phone.trim());
  const isMatchEmail = email.trim() === secondEmail.trim();

  return (
    <div className={style.container}>
      <h3>Cantidad total de productos: <span style={{color:"brown"}}>{total}</span></h3>

      <h3 > Precio total: <span style={{color:"brown"}}> $ {price}</span></h3>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography>Comprar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className={style.form1}>
              <label htmlFor=''>Tu nombre y apellido</label>
              <input
                class='input'
                ref={nameRef}
                style={{ height: 40, borderRadius: "3%", fontSize: 17 }}
                value={name}
                onChange={handleNameChange}
                className={isNameValid ? "" : "invalid"}
              />
              {!isNameValid && (
                <p style={{ color: "red", fontSize: 15 }} className='error'>
                  El campo es obligatorio
                </p>
              )}
            </div>
            <div className={style.form1}>
              <label htmlFor=''>Tu correo electrónico</label>
              <input
                class='input'
                ref={emailRef}
                style={{ height: 40, borderRadius: "3%", fontSize: 17 }}
                value={email}
                onChange={handleEmailChange}
                className={isEmailValid ? "" : "invalid"}
              />
              {!isEmailValid && (
                <p style={{ color: "red", fontSize: 15 }} className='error'>
                  Por favor, ingresa un correo electrónico válido
                </p>
              )}
            </div>
            <div className={style.form1}>
              <label htmlFor=''>Reingresa tu correo electrónico</label>
              <input
                class='input'
                ref={secEmailRef}
                style={{ height: 40, borderRadius: "3%", fontSize: 17 }}
                value={secondEmail}
                onChange={handleSecEmailChange}
                className={isMatchEmail ? "" : "invalid"}
              />
              {!isMatchEmail && (
                <p style={{ color: "red", fontSize: 15 }} className='error'>
                  El mail ingresado no coincide con el ingresado anteriormente.
                </p>
              )}
            </div>
            <div className={style.form1}>
              <label htmlFor=''>Telefono</label>
              <input
                class='input'
                ref={phoneRef}
                style={{ height: 40, borderRadius: "3%", fontSize: 17 }}
                value={phone}
                onChange={handlePhoneChange}
                type='number'
                className={isPhoneValid ? "" : "invalid"}
              />
              {!isPhoneValid && (
                <p style={{ color: "red", fontSize: 15 }} className='error'>
                  Por favor, ingresa un número válido.
                </p>
              )}
            </div>

            {!isNameValid || !isEmailValid || !isPhoneValid ? (
              <Button variant='contained' disabled size='medium'>
                Comprar <LocalMallIcon />
              </Button>
            ) : (
              <Button variant='contained' size='medium' onClick={handleBuy}>
                Comprar <LocalMallIcon />
              </Button>
            )}
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FormBuy;
