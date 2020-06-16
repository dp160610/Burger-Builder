import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './sideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux1 from '../../../hoc/Aux1/Aux1'

const sideDrawer =(props) => {

let attachedClasses = [classes.SideDrawer,classes.Close];
if(props.open){
    attachedClasses = [classes.SideDrawer,classes.Open];
}
    return (
        <Aux1>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo />
            </div>
            
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux1>
    );
}
export default sideDrawer;