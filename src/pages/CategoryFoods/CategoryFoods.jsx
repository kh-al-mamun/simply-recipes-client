// eslint-disable-next-line no-unused-vars
import React from 'react';
import './CategoryFoods.css';
import { useLoaderData, useParams } from 'react-router-dom';
import ItemCard from '../Shared/Cards/ItemCard/ItemCard';

const CategoryFoods = () => {
    const categoryItems = useLoaderData();
    const name = useParams()
    console.log(categoryItems);

    return (
        <div className='container section'>
            <h1 className='title-sec'>All recipes for <span style={{textTransform: 'capitalize'}}>{name.catName}</span></h1>
            <div className='category-items'>
                {categoryItems.map(item => <ItemCard key={item._id} item={item}/>)}
            </div>
        </div>
    );
};

export default CategoryFoods;