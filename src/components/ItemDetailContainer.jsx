import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { productosLM } from "./data";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const { iditem } = useParams();

    const [producto, setProducto] = useState({});

    useEffect(() => {
        const productoPromesa = new Promise((res,rej) => {
            setTimeout(() => {
                res(productosLM.find((item) => item.id === iditem));
            }, 2000);
        });

        productoPromesa.then((res) => {
            setProducto(res);
        });
    }, [iditem]);

    return (
    <div>
        <ItemDetail producto={producto} />
    </div>
)
}
