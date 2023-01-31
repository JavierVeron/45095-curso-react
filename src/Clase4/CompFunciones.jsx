const CompFunciones = ({nombre, edad, notas}) => {
    return (
        <div>
            <h3>Mi nombre es {nombre} y tengo {edad} años.</h3>
            <p>Mi nota más alta es: {notas[0]}</p>
        </div>
    )
}

export default CompFunciones;