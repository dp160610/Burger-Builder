
import React from 'react';
import Aux1 from '../../../hoc/Aux1/Aux1';
import Button from '../../UI/Button/Button'
class OrderSummary extends React.Component{
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate')
    }
    render(){
    const ingredientSummary= Object.keys(this.props.ingredients)
    .map(igKey =>{
    return <li key={igKey}><span style={{texttransform: 'capitilize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
    });
    
    return(
       <Aux1>
           <h3>Your Order</h3>
           <p>A delicious burger with th following ingredients:</p>
           <ul>
            {ingredientSummary}
           </ul>
    <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
           <p>Continue to Checkout?</p>
           <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
           <Button btnType="Success"  clicked={this.props.continue}>CONTINUE</Button>
       </Aux1> 
    );
    }
}

export default OrderSummary;