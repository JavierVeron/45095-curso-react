// Componente de Representación
const Item = ({valor}) => {
    return (
        <li>{valor}</li>
    )
}

// Componente de Representación
const Input = ({valor}) => {
    return (
        <input type="text" value={valor} onChange={() => {}} />
    )
}

// Componente de Representación
const Titulo = ({valor}) => {
    return (
        <h1>{valor}</h1>
    )
}

const SubTitulo = ({valor}) => {
    return (
        <h3>{valor}</h3>
    )
}

// Componente Contenedor
const CompContenedor = () => {
    return (
        <div>
            <h1>Componentes Contenedores</h1>
            <Titulo valor={"Curso de React JS"} />
            <SubTitulo valor={"Estamos viendo el tema de Contenedores!"} />
            <Input valor={"Curso de Backend?"} />
            <Titulo valor={"Para desayunar:"} />
            <ul>
                <Item valor={"Café"} />
                <Item valor={"Té"} />
                <Item valor={"Mate"} />
                <Item valor={"Chocolatada"} />
            </ul>

        </div>
    )
}

export default CompContenedor;