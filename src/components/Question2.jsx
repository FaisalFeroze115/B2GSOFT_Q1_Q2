import React, {useState} from 'react'
import { Container, Button } from 'react-bootstrap';


const Question2 = () => {

    const [showAll, setShowAll] = useState(false);

    const toogleButton = () => { 
        setShowAll(!showAll);
    }

    const data = [
        {name: 'Product A', price: 300},
        {name: 'Product B', price: 200},
        {name: 'Product C', price: 700},
        {name: 'Product D', price: 500},
        {name: 'Product E', price: 650},
        {name: 'Product F', price: 800},

    ]

    return (
        <Container>
            {
                data.map((item, index) => (
                    index > 2 && !showAll ? false :
                    <h2>Name: {item.name} -- Price: {item.price}</h2>
                ))
            }

            {
                showAll ? 
                <Button onClick={toogleButton} variant="primary" size="sm">
                    Collapse
                </Button> : 
                
                <Button onClick={toogleButton} variant="primary" size="sm">
                    View All
                </Button>
                    
            }

        </Container>
    )
}

export default Question2
