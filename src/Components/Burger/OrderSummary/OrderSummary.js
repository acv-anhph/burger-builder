import React from 'react';
import Aux from '../../../hoc/_Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button
        clicked={props.cancelPurchase}
        buttonType='Danger'
      >CANCEL</Button>
      <Button
        buttonType='Success'
        clicked={props.continuePurchase}
      >CONTINUE</Button>
    </Aux>
  );
};

export default OrderSummary;