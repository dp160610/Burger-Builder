
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls =[
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'},
    {label:'Cheese', type:'cheese'}
];
const buildControls =(props) =>(
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>(
            <BuildControl 
            added={()=>props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            label={ctrl.label} key={ctrl.label}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button 
        disabled={!props.purchaseable}
        className={classes.OrderButton} onClick={props.ordered}>ORDER NOW</button>
    </div>
);
export default buildControls;