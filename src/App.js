import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Home from './Home'
import Error from './Error'

function App() {
  return (
    <div className="App">
      
      <Router>
          <div>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>B2GSOFT</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link style={linkStyle} to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link style={linkStyle} to='/question1'>Question1</Link></Nav.Link>
                    <Nav.Link><Link style={linkStyle} to='/question2'>Question2</Link></Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/question1' component={Question1}/>
            <Route exact path='/question2' component={Question2}/>
            <Route path='' component={Error}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

const linkStyle = {
  font: '22px',
  color: '#fff',
  textDecoration: 'none'
}
