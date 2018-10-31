import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/_Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate(nextProps, nextState) {
    console.log('[OrderSummary] componentWillUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
      return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}</li>
    });
    
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button
          clicked={this.props.cancelPurchase}
          buttonType='Danger'
        >CANCEL</Button>
        <Button
          buttonType='Success'
          clicked={this.props.continuePurchase}
        >CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
