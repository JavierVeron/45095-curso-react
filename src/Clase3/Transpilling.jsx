const Transpilling = () => {
    let nombre = "Fernando Lepore";
    let edad = 20;
    /* let estilos = {
        color: "#FFFFFF",
        backgroundColor: "black",
        padding: "20px"
    }; */
    const saludar = () => {
        alert("Hola Coders!");
    }
    const bebidas = ["Té", "Café", "Mate", "Chocolata"];

    return (
        <div>
            <h1 className="pepe">Transpilling</h1>
            <p style={{color:"pink", backgroundColor:"lightcoral"}}>Mi Nombre es <b>{nombre}</b> y mi edad es <b>{edad * 2}</b></p>
            <p><img src={"https://www.clarin.com/img/2023/01/10/72jnt2zmv_360x240__1.jpg"} alt={"Shakira y Bizarrap"} /></p>
            <p><button className="btn btn-primary" onClick={saludar}>Saludar</button></p>
            <ul>
                {bebidas.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Transpilling;