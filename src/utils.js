import {db} from "./firebase";
import {addDoc, collection, doc, getDoc, getDocs, query, where} from "firebase/firestore"


export const getProducts=()=>{

    const productsCollection =collection(db, "productos");

    return getDocs(productsCollection)
    .then((respuesta)=>{
       const response= respuesta.docs.map((doc)=>{
        const producto={
            id:doc.id,
            ...doc.data()
        }
        return producto;
    })
    return response;
    })
    .catch((error)=>{
        console.log("Hubo un error pidiendo los productos", error)
    })

}

export const saveSale =(venta)=>{

    console.log("creando una venta")

    const ventasCollection =collection(db, "ventas");

    return addDoc(ventasCollection, venta)
    .then((respuesta)=>{
        console.log(respuesta.id)
        return respuesta.id;

    })
    .catch((err)=>{

        console.log(err)
    })








}

export const getProductDetail=  (id)=>{
    console.log(id)
    const productsCollection =collection(db, "productos");
    const docRef = doc(productsCollection, id);
    


    return getDoc(docRef)
    .then((respuesta)=>{
        console.log(respuesta)
        const productData = respuesta.data();
            const producto={
                id:respuesta.id,
                ...productData
            }
            console.log(producto)
            return producto;
            

    })
    .catch((error)=>{
        console.error(error);
    })



}


export const getProductByCategory =(idParams)=>{
    const productsCollection =collection(db, "productos");
    const filtro= query(productsCollection, where("categoria","==", parseInt(idParams) ));
    return getDocs(filtro)
    .then((respuesta)=>{
        const response= respuesta.docs.map((doc)=>{
            const producto={
                id:doc.id,
                ...doc.data()
            }
            return producto;
        })
        
        return response;
    })
    .catch((error)=>{
        console.error(error);
    })

}