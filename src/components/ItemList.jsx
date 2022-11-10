import React from 'react';
import Item from './Item';

export default function ItemList({ productos }) {
  return (
    <div>
      {!productos.length && "Cargando..."}
      {productos.map((item) => (
        <Item item={item} />
      ))}
    </div>
  )
}
