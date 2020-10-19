import React from 'react'
import classes from'./Car.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'


class Car extends React.Component {

    componentDidMount() {
        this.inputRef.focus()
    }

    render() {

    const inputClasses = [classes.input]

    if (this.props.name !== '') {
        inputClasses.push(classes.green)
    } else {
        inputClasses.push(classes.red)
    }

    if (this.props.name.length > 4) {
        inputClasses.push('bold')
    }
   

    return (
       <React.Fragment>
            <h3>Car name: {this.props.name}</h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input 
                ref={(inputRef) => this.inputRef = inputRef}
                type="text" 
                onChange={this.props.onChangeName} 
                value={this.props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
    )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, classes.car)