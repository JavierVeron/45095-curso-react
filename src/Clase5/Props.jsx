const Subtitulo = ({course, academy}) => {
    return (
        <h3>Estamos realizando el Curso de {course} en {academy}</h3>
    )
}

const Props = ({curso, lugar}) => {
    return (
        <div>
            <h1>Props</h1>
            <Subtitulo course={curso} academy={lugar} />
        </div>
    )
}

export default Props;