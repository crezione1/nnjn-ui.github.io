import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBroundary'
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false)



class App extends Component {

  constructor(props) {
    console.log('App constructor');
    super(props)

    this.state = {
      clicked: false,
      cars : [
        {name: 'Ford', year: 2020},
        {name: 'Audi', year: 2019},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  changeTitleHedler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  toggleCarsHendler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })
  }

  deleteHendler(index) {
    let cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars})

  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('App render');
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null 
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.yaer}
              index={index}
              onDelete={this.deleteHendler.bind(this, index)}
              onChangeName={event => this.onChangeName(event.target.value, index)} />
            </ErrorBoundary>
        )
      }) 
    }

    return (
        <div style={divStyle}>

          {/* <h1>{this.state.pageTitle}</h1> */}
    <h1>{this.props.title}</h1>

      <ClickedContext.Provider value={this.state.clicked}>
        <Counter />
      </ClickedContext.Provider>
    

          <hr/>
          <button 
          style={{marginTop: 20}}
          className={'AppButton'}
          onClick={this.toggleCarsHendler}>Toggle cars</button>
          <button onClick={() => this.setState({clicked: true})}>Change clicked</button>
          <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>
          { cars }
          </div>
      </div>
    );
  }
}
export default App;
