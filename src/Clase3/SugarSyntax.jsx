const SugarSyntax = () => {
    /* const condition = true;
    let resultado = null;
    let condition2 = false; */

    // JavaScript tradicional
    /* if (condition) {
        resultado = "La condición es verdadera!";
    } else {
        resultado = "La condición es falsa!";
    }
    
    console.log(resultado); */

    // Usando Sugar Syntax
    /* resultado = condition ? condition2 ? "La condición es verdadera!" : "Otra Cosa" : "La condición es falsa!";
    console.log(resultado); */

    //Operador Spread
    /* const miLista = [1, 2, 3, 7];
    const miLista2 = [...miLista, 8, 9];
    const objeto1 = {id:1, nombre:"Coca Cola", precio:500};
    const objeto2 = {...objeto1, figurita:"Sí"};
    console.log(miLista);
    console.log(miLista2);
    console.log(objeto1);
    console.log(objeto2); */

    return (
        <div className="container-fluid p-3">
            <div className="row my-6">
                <div className="col-md-6">
                    <h1>Sugar Syntax</h1>
                </div>
            </div>
        </div>
    )
}

export default SugarSyntax;