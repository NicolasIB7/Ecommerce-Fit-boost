# Bienvenidos a FIT BOOST
# E-commerce de Suplementos

Bienvenido al repositorio del e-commerce especializado en la venta de suplementos. Aquí podrás encontrar una amplia variedad de productos diseñados para mejorar tu rendimiento físico, potenciar tu salud y alcanzar tus objetivos fitness.

## Características principales

- Visualización de productos: Explora nuestra amplia selección de suplementos, con descripciones detalladas, imágenes y especificaciones para ayudarte a tomar la mejor decisión de compra.
- Carrito de compras: Agrega los productos que desees adquirir a tu carrito de compras, donde podrás ver un resumen de tu pedido, ajustar las cantidades y eliminar artículos si es necesario.
- Proceso de compra: Realiza tu compra de manera segura y sencilla.
- Pedidos: luego de realizar tu compra obtendrás un ID de la compra para realizar el seguimiento.

## Características técnicas

 - Para la realización de esta web se utilizó React.js junto con firebase, se profundizó en el uso del contexto para poder tener un estado global y realizar diferentes funcionalidades relacionandolas con el carrito de compras, detalles del producto, etc.
  
 - Se utilizó firebase para poder cargar todos los productos que se encuentran a la venta, se realizaron métodos para poder obtener los productos, obtener el detalle, crear un nuevo pedido.

## Requisitos de instalación

Para utilizar este proyecto, debes seguir los siguientes pasos:

1. Clonar el repositorio: 

    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
    ```

2. Instalar las dependencias: 

    ```bash
    cd nombre-del-repositorio
    npm install
    ```

3. Iniciar el proyecto:

    ```bash
    npm start
    ```

Esto iniciará el servidor y podrás acceder a la aplicación en tu navegador a través de `http://localhost:3000`.


## Dependencias utilizadas:

- Se utilizó MUI material para realizar diferentes estilos y detalles en cuanto a lo visual, además se utilizó para aplicar ciertas funcionalidades en el proyecto tales como menú desplegable, botones, carrito de compras dinámico o el formulario desplegable que se encuentra en la sección para realizar la compra. Se decidió utilizar este tecnología por lo sencillo que es utilizarla y lo fácil que es editar o agregarle estilos a los mismos componentes que proporciona material.

- Se utilizó react-icons para agregar iconos tales como instagram o linkedin, simplemente para darle un estilo o una visual más bonita y acorde.

- Se utilizó sweet alert, en este caso lo utilicé para reemplazar el "alert", es una ventana emergente la cual tiene un diseño bastante más profesional y elegante. Por ejemplo al realizar la compra o agregar productos al carrito, nos aparece esta alerta avisandonos de la acción en concreto.

- firebase se utilizó como base de datos de nuestro proyecto, lugar donde guardamos la información relacionada a todos nuestros productos para luego poder conectarnos a ella mediante react y poder (mediante la utilización de métodos) acceder a la misma e interactuar.

- react-router-dom se utilizó para poder agregar rutas dinámicas al proyecto y poder navegar por diferentes componentes, tales como la landing, la vista de detalle, el carrito de compras, etc.

## Cosas a implementar a futuro:

- Poder agregar productos a favoritos para luego visualizarlos en otra sección y así facilitar la elección a la hora de la compra.
- Hacer responsive design el proyecto.
- Agregar login simple o AUTH mediante firebase.


## Video demostrativo:

[![Video](https://img.youtube.com/vi/b7-VvbJBKM8/0.jpg)](https://youtu.be/Q-BwEki_F4g)

## Deploy:

https://ecommerce-fit-boost.vercel.app/


