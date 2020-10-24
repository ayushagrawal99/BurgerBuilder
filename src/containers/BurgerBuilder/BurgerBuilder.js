import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad : 0.5,
    meat : 0.9,
    bacon : 1.2,
    cheese : 1.5,
}

class BurgerBuilder extends Component {

    state = {
        Ingredients : {
            salad : 0,
            meat : 0,
            bacon : 0,
            cheese : 0,
        },
        totalPrice : 5,
        purchase : false,
    }

    updatepurchaseStateHandler = (ingredients) => {

        let sumofArray = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);

        if(sumofArray > 0){
            this.setState({purchase : true})
        } else {
            this.setState({purchase : false})
        }

    }

    addIngredientHandler = (type) => {
        let OldCount = this.state.Ingredients[type];
        let updatedCount = OldCount + 1;
        let UpdatedIngredien = {
            ...this.state.Ingredients
        }
        UpdatedIngredien[type] = updatedCount;
        let priceAddition = INGREDIENT_PRICE[type] + this.state.totalPrice;

        this.setState({
            totalPrice : priceAddition,
            Ingredients : UpdatedIngredien
        });

        this.updatepurchaseStateHandler(UpdatedIngredien);
    }

    removeIngredientHandler = (type) => {
        let OldCount = this.state.Ingredients[type];
        if(OldCount <= 0){
            return;
        }
        let updatedCount = OldCount - 1;
        let UpdatedIngredien = {
            ...this.state.Ingredients
        }
        UpdatedIngredien[type] = updatedCount;
        let priceDeduction = this.state.totalPrice - INGREDIENT_PRICE[type];

        this.setState({
            totalPrice : priceDeduction,
            Ingredients : UpdatedIngredien
        });

        this.updatepurchaseStateHandler(UpdatedIngredien);
    }

    render(){
        let disableInfo = {
            ...this.state.Ingredients
        }

        for(let key in disableInfo){
            if(disableInfo[key] <= 0){
                disableInfo[key] = true
            } else {
                disableInfo[key] = false
            }
        }

        return (
            <Aux>
                <Burger ingredients={this.state.Ingredients} />
                <BuildControls  
                    addingredient={this.addIngredientHandler}
                    removeingredient={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice.toFixed(2)}
                    purchasable={this.state.purchase}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;