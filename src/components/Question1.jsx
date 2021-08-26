import { Container } from 'react-bootstrap';

const Question1 = () => {

    const company = {
        name: "B2GSOFT",
        occupation: {
        title: "React.js Developer",
        experience: 1
        },
        pc: [{
            name: "hp",
            core: "i3"
            },{
            name: "asus",
            core: "i5"
            },{
            name: "dell",
            core: "i3"
        }]
    }

    return (
        
        <Container>
            {
                company.pc.map(item =>(
                    item.core == 'i3' ?
                    <h2>Name: { item.name } -- Core: { item.core }</h2>
                    : null
                ))
            }
        </Container>
    )
}

export default Question1
