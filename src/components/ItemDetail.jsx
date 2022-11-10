import React from 'react'
import './data.js'
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  function addItem(x) {
    alert("quiere agregar " + x + " de este item: " + producto.nombre);
  }
    return (
        <div>
            {producto.id ? (
            <>
            ID: {producto.id}
            <br />
            {producto.img}
            <br />
            Producto: {producto.nombre}
            <br />
            {producto.desc}
            <br />
            Categoria: {producto.categoria}
            <br />
            Precio: {producto.precio}
            <br />
            Stock: {producto.stock}
            <ItemCount ini={1} max={producto.stock} addItem={addItem} />
            </>
            ) : (
              <>Loading...</>
            )}
          </div>
        );
      }