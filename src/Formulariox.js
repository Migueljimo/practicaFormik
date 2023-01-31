import { Formik } from "formik";
import { useState } from "react";
import React from "react";

const Formulario = () => {
  const [formEnviado, CambiarFormEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};
          //validacion nombres
          if (!valores.nombre) {
            errores.nombre = "Introduzca nombre pofavo :v";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre =
              "nombre no debe tener numeros, caracteres especiales ni pasar los 40 caracteres";
          }
          //validacion correos
          if (!valores.correo) {
            errores.correo = "Introduzca correo pofavo :v";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "No tiene el formato adecuado de correo  o no debe tener caracteres especiales";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log(valores);
          console.log("Formulario enviado");
          CambiarFormEnviado(true);
          setTimeout(() => CambiarFormEnviado(false), 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            {console.log(touched)}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Inocencio Jimenez"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                id="correo"
                name="correo"
                placeholder="correo22@gmail.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>
            <button type="submit">Enviar</button>
            {formEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
