import React from 'react';
import { localStorageData } from '../../utilities/localstorage';
import './Cosmetic.css'

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic1;

    const purchaseToAdd = (price) => {
        localStorageData(price);
    }
    const purchaseOk = () => purchaseToAdd(price)

    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>Only for: $ {price}</p>
            <p><small>It is ID no: {id}</small></p>
            <button onClick={purchaseOk}>Purchase Add</button>
        </div>
    );
};

export default Cosmetic;