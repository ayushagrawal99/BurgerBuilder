import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';

const ordersummary = (props) => {

    const IngredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return  <li key={igKey}>
                    <span 
                        style={{
                                textTransform : "capitalize", 
                                color : "blue",
                                fontWeight : "bold"
                            }}>
                        {igKey}
                    </span>&nbsp;
                    : &nbsp;{props.ingredients[igKey]}
                </li>;
        })

    return(
        <Aux>
            <h2>Your Order</h2>
            <p>A delicious Burger with the following Ingredients :</p>
            <ul>
                {IngredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
}

export default ordersummary;