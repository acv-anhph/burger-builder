import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };
  
  purchaseHandler = () => {this.setState({purchasing: true})};

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map(key => {
      return ingredients[key];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);

    this.setState({purchasable: sum > 0});
  };

  addIngredientHandler = (type) => {
    let newIngredients = {...this.state.ingredients};
    newIngredients[type] += 1;

    let newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    });

    this.updatePurchaseState(newIngredients);
  };

  removeIngredientHandler = (type) => {
    let newIngredients = {...this.state.ingredients};
    if (newIngredients[type] <= 0) {
      return;
    }

    newIngredients[type] -= 1;

    let newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: newIngredients,
      totalPrice: newTotalPrice
    });

    this.updatePurchaseState(newIngredients);
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  render() {
    const disabledInfo = {...this.state.ingredients};

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} cancelPurchase={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} cancelPurchase={this.purchaseCancelHandler}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchaseHandler={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;