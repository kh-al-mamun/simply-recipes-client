// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Categories.css';
import { heroSvg } from '../../../Icons';
import { Link, useNavigation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Spinner from '../LoaderSpinner/Spinner';

const Categories = () => {
    const [category, setCategory] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/simply-recipes/categories')
        .then(res => res.json())
        .then(data => {
            setCategory(data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
            setIsLoading(false);
            toast.error(error.message);
        })
    }, [])


    return (
        <div className='container section'>
            <h2 className='title-sec'>Our Recipe Categories</h2>
            {isLoading && <Spinner />}
            <div className='categories'>
                {category.map((cat, ind) => {
                    const catFirst = cat.category.slice(0, 1).toUpperCase();
                    const catRemains = cat.category.slice(1, cat.length);
                    const catName = catFirst + catRemains;
                    return(
                        <Link key={ind} className='category-card'>
                            <img src={cat.image} alt="" />
                            <div className='hero-svg'>{heroSvg}</div>
                            <span className='hero-text'>{catName}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Categories;