import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={style.all}>
      <div className={style.div1}>
        <div>
          <img
            src='https://t4.ftcdn.net/jpg/03/70/09/35/360_F_370093526_mJLYjlxn5Jb2pMsiQeyE7PMMnCp7NY8z.jpg'
            alt=''
            className={style.imagen}
          />
          <h3 className={style.h3} style={{ color: "white" }}>
            fitboost.com © Bumeran.com
          </h3>
        </div>

        <div className={style.datos}>
          <h3
            className={style.h3}
            style={{ marginBottom: "3%", color: "white" }}>
            Encontranos en
          </h3>
          <p className={style.p} style={{ marginBottom: "10%", color: "grey" }}>
            Acevedo 160, Villa Crespo, Ciudad Autónoma de <br />
            Buenos Aires, Argentina.
          </p>
        </div>

        <div className={style.datos}>
          <button
            className={style.boton1}
            style={{ marginBottom: "3%", color: "white" }}>
            <AiOutlineMail style={{ marginRight: 18 }} />
            <a
              href='mailto:nicobouvet7@gmail.com'
              style={{ textDecoration: "none", color: "white" }}>
              contacto@fitboost.com{" "}
            </a>
          </button>
          <br />
          <button className={style.boton2}>
            {" "}
            <BsFillTelephoneFill style={{ marginRight: 18, color: "white" }} />
            <a
              href='tel://1133829878'
              style={{ textDecoration: "none", color: "white" }}>
              {" "}
              1133829878{" "}
            </a>
          </button>
        </div>
      </div>

      <div className={style.div2}>
        <p className={style.p} style={{ color: "#AFA0CD" }}>
          © 2023 • fitboost.com
        </p>
        <div className={style.iconos}>
          <span className={style.icono1}>
            <a
              href='https://www.instagram.com/nicobouvet7'
              title='Instagram'
              style={{ color: "white" }}>
              <BsInstagram />
            </a>
          </span>
          <span className={style.icono}>
            <a
              href='https://www.linkedin.com/company/nicolasbouvet7'
              title='Linkedin'
              style={{ color: "white" }}>
              <BsLinkedin />
            </a>
          </span>
        </div>
        <p className={style.p}>
          {" "}
          <Link href='/' style={{ textDecoration: "none", color: "#AFA0CD" }}>
            Back to top
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
