import React from 'react';
import styled from '@emotion/styled';
import {primeraLetraMayuscula} from '../Helper'

const ContenedorResumen=styled.div`
    padding: 1rem;
    text-align:center;
    background-color:#00838F;
    color:#FFF;
    margin-top:1rem;
`

const Resumen = ({datos}) => {

    const {marca,year,plan}=datos;

    if(marca===''||year===''||plan==='') return null;
    return (
        <ContenedorResumen>
        <h2>Resumen de Cotizacion</h2>
        <ul>
                <li>Marca: <span>{primeraLetraMayuscula(marca)}</span></li>
                <li>Año Vehiculo: <span>{primeraLetraMayuscula(year)}</span></li>
                <li>Plan:<span>{primeraLetraMayuscula(plan)}</span></li>
        </ul>
        </ContenedorResumen>
      );
}
 
export default Resumen;

