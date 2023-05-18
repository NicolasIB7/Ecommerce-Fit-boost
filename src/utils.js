import { db } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";



export const getProducts = () => {
  const productsCollection = collection(db, "productos");

  return getDocs(productsCollection)
    .then((respuesta) => {
      const response = respuesta.docs.map((doc) => {
        const producto = {
          id: doc.id,
          ...doc.data(),
        };
        return producto;
      });
      return response;
    })
    .catch((error) => {
      console.log("Hubo un error pidiendo los productos", error);
    });
};




export const saveSale = (venta) => {
  const ventasCollection = collection(db, "ventas");

  return addDoc(ventasCollection, venta)
    .then((respuesta) => {
      const carrito = venta.carrito;

      const productosCollection = collection(db, "productos");

      const updateStockPromises = carrito.map((item) => {
        const productoId = item.product.id;
        const cantidadComprada = item.count;
        console.log(cantidadComprada)

        const productoDocRef = doc(productosCollection, productoId);

        return getDoc(productoDocRef)
          .then((productoDoc) => {
            if (productoDoc.exists()) {
              const productoData = productoDoc.data();
              const stockActual = productoData.stock;


              const nuevoStock = stockActual - cantidadComprada;


              return updateDoc(productoDocRef, { stock: nuevoStock });
            } else {
              console.log(`El producto con ID ${productoId} no existe`);
              return Promise.resolve(); 
            }
          })
          .catch((err) => console.log(err));
      });


      return Promise.all(updateStockPromises)
        .then(() => respuesta.id)
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
};








export const getProductDetail = (id) => {
  const productsCollection = collection(db, "productos");
  const docRef = doc(productsCollection, id);

  return getDoc(docRef)
    .then((respuesta) => {
      const productData = respuesta.data();
      const producto = {
        id: respuesta.id,
        ...productData,
      };
      return producto;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getProductByCategory = (idParams) => {
  const productsCollection = collection(db, "productos");
  const filtro = query(
    productsCollection,
    where("categoria", "==", parseInt(idParams))
  );
  return getDocs(filtro)
    .then((respuesta) => {
      const response = respuesta.docs.map((doc) => {
        const producto = {
          id: doc.id,
          ...doc.data(),
        };
        return producto;
      });

      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};
