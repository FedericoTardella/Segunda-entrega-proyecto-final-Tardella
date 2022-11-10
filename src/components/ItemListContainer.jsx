import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
import { productosLM } from "./data.js";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
    const {idcategoria} = useParams();

    const [productos, setProducto] = useState([]);

    useEffect(() => {
        const productoPromesa = new Promise ((res, rej) => {
            setTimeout(() =>{
                res(productosLM);
            }, 2000);
        });

        productoPromesa.then((res) => {
            if (idcategoria) {
                setProducto(res.filter((item) => item.categoria === idcategoria));
            } else {
                setProducto(res);
            }
        });
    }, [idcategoria]);

    return (
        <div className="Greeting">
            <ItemList productos={productos} />;
        </div>
    );
}