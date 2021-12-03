/*eslint-disable*/
import React, { useContext, useState } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import './App.css'
import Data from './data'
import Datail from './Datail'
import Cart from './Cart'
import axios from 'axios'

export let 재고Context = React.createContext() //범위를 생성해줌

import { Link, Route, Switch } from 'react-router-dom'

function App() {
  let [shoes, shoes변경] = useState(Data)
  let [재고, 재고변경] = useState([10, 11, 12])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Datail">
                Datail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="bg p-5 rounded-lg m-3">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <a className="btn btn-primary btn-lg" href="1" role="button">
              Learn more
            </a>
          </div>
          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />
              })}
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then(result => {
                  shoes변경([...shoes, ...result.data])
                })
                .catch(() => {
                  console.log('실패')
                })
            }}
          >
            더보기
          </button>
        </Route>

        <Route exact path="/Datail">
          <재고Context.Provider value={재고}>
            <Datail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고Context.Provider>
        </Route>

        <Route exact path="/Cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  )
}

function Card(props) {
  let 재고 = useContext(재고Context)

  return (
    <div className="col-md-4">
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width="100%"
        alt=""
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Test />
    </div>
  )
}
function Test() {
  let 재고 = useContext(재고Context)
  return <p>재고 : </p>
}

export default App
