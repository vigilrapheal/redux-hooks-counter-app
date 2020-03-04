import React from 'react';
import {
    Card,
    Button
} from 'react-bootstrap';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store'


const Card1 = () => {

//    const [clickCounter, setClickCounter] = useState(0);

const dispatch = useDispatch();
const increment1 = () => dispatch(increment());

const clickCounter = useSelector(state => state);


   const clickButton = () => {
    //    setClickCounter(clickCounter + 1);
    increment1();
   }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Clicked { clickCounter } times</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                <Button onClick={ clickButton } variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Card1;
