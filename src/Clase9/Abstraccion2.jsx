import React, { useState } from "react";

const Select = ({options, onSelect, defaultOption}) => {
    return options.map(o => (<><input type="radio" name="color" key={o.value} onChange={(evt) => onSelect(o.value)} checked={defaultOption === o.value} id={o.value} /> <label htmlFor={o.value}>{o.text}</label></>))
}

const Abstraccion2 = () => {
    const [option, setOption] = useState(1);
    const options = [{value:1, text:"Azul"}, {value:2, text:"Rojo"}, {value:3, text:"Negro"}];

    const optionSelected = (value) => {
        setOption(value);
    }

    return (
        <div className="m-5">
            <h1>Abstracción #2</h1>
            <Select options={options} onSelect={optionSelected} defaultOption={option} />
            <p>Opción seleccionada: {option}</p>
        </div>
    )
}

export default Abstraccion2;