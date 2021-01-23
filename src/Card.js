import React from 'react'
import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import './App.css';

function Card1({ details }) 
{
    return (
        <Card className="App">
            <CardBody className="text-center">

                <img height="150" width="150" className="rounded-circle img-thumbnail border-warning" src={details.picture?.large} />
                {/* if we re exporting from apti..if it is first leve we do by details .picture otherwise if it is 2nd or more leve we reach by using details.picture?.large...i.e by using ? */}
                <h3>{details.name?.title} {details.name?.first} {details.name?.last}</h3>
            </CardBody>
        </Card>
    )
}

export default Card1
