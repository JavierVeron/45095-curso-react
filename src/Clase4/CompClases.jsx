import { Component } from "react";

class CompClases extends Component {
    render () {
        return (
            <div>
                <h3>Mi nombre es {this.props.nombre} y tengo {this.props.edad} años.</h3>
                <p>Mi nota más alta es: {this.props.notas[1]}</p>
            </div>
        )
    }
}

export default CompClases;