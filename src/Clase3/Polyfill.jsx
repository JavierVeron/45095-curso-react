import "core-js";

const Polyfill = () => {
    /* Array.from(new Set([1, 2, 3, 2, 1]));
    console.log([1, [2, 3], [4, [5]]].flat(3)); */

    const navegadores = ["Firefox", "Chrome", "Safari", "Opera"];
    //let objeto = navegadores.find(nav => nav === "Firefox");
    //console.log(objeto);

    for (let i=0; i<navegadores.length; i++) {
        if (navegadores[i] === "Firefox") {
            console.log(navegadores[i]);
        }
    }

    return (
        <h1>Polyfill</h1>
    )
}

export default Polyfill;