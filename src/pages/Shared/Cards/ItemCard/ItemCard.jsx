/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ItemCard.css';

const ItemCard = ({item}) => {
    const {_id, name, image} = item;
    
    return (
        <div className='item-card'>
            <img src={`/${image}`} alt={name} title={name}/>
            <h3>{name}</h3>
        </div>
    );
};

export default ItemCard;