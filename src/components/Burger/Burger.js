import React from 'react';
import './Burger.css';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map(
                (_,i) => {
                    return <BurgerIngredient key={igKey+i} type={igKey} />;
                }
            )
        }).reduce((elem,el) => {
            return elem.concat(el);
        })

        if(transformedIngredients.length === 0){
            transformedIngredients = 
                <h4 style={{color : 'red'}}>
                    Please start adding Ingredients!!
                </h4>
        }
        
    return (
        <div className="Burger">
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
}  

export default burger;