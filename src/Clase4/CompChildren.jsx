export const Ad = () => {
    return (
        <h3>Curso de React JS!!!</h3>
    )
}

const CompChildren = ({lugar, children}) => {
    return (
        <div>
            {children}
            <h1 className="bg-success">{lugar}</h1>
        </div>
    )
}

export default CompChildren;