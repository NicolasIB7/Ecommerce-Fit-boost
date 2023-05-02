// import React, { useEffect, useState } from "react";
// import style from "./ItemListContainer.module.css";
// import {data} from "../../Data/Data";
// import ItemList from "./ItemList";
// import { useParams } from "react-router-dom";

// const ItemListContainer =(props)=>{

//     const {id}=useParams();

//     const [listProducts, setListProducts]=useState([])

//     //simulo useEffect

//     // useEffect(()=>{

//     // },[])

//     return(
//         <div>
//         {data.map((listProducts)=>{
//                return( <ItemList
//                 id={listProducts.id}
//                 nombre={listProducts.nombre}
//                 imagen={listProducts.imagen}
//                 descripcion={listProducts.descripcion}
//                 precio={listProducts.precio}
//                 categoria={listProducts.categoria}
//                 />)

//             })}

//         </div>
//     )
// }

// export default ItemListContainer;

import React, { useEffect, useState } from "react";
import style from "./ItemListContainer.module.css";
import { data } from "../../Data/Data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const { id } = useParams();

  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    if (id) {
      const filteredProducts = data.filter(
        (product) => product.categoria === parseInt(id)
      );
      setListProducts(filteredProducts);
    } else {
      setListProducts(data);
    }
  }, [id]);

  return (
    <div className={style.container}>
      {listProducts.map((product) => (
        <ItemList
          id={product.id}
          nombre={product.nombre}
          imagen={product.imagen}
          descripcion={product.descripcion}
          precio={product.precio}
          categoria={product.categoria}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
