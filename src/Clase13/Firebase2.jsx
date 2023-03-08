import { useState } from "react";
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
//import arrayProductos from "./json/productos.json";

const Firebase2 = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const [orderUpdated, setOrderUpdated] = useState(false);
    const [orderBatch, setOrderBatch] = useState(false);

    const generarOrden = () => {
        const buyer = {
            name: name,
            email: email,
            phone: phone
        };
        const items = [
            {id: 1, title: "Coca Cola", price: 550},
            {id: 2, title: "Pepsi", price: 520}
        ];
        const total = 1070;
        const fecha = new Date();
        const dateOrder = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {
            buyer: buyer,
            items: items,
            total: total,
            date: dateOrder
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((data) => {
            setOrderId(data.id);
            console.log("Se agrego la Orden con el ID: " + data.id);
        });        
    }

    const actualizarOrden = (orderId) => {
        const db = getFirestore();
        console.log(orderId);
        const order = doc(db, "orders", orderId);
        getDoc(order).then(data => {
            const total = data.data().total * 1.2; //aplico un 20% de recargo
            updateDoc(order, {total:total}).then(data => { //actualizo el Documento con el nuevo valor
                setOrderUpdated(true);
            });
        });
    }

    const actualizarOrdenBatch = (orderId) => {
        const db = getFirestore();
        const batch = writeBatch(db);
        const order = doc(db, "orders", orderId);
        batch.update(order, {date:"2023"}); //Actualiza uno o más campos
        batch.set(order, {course:"React JS"}); //Seteo, podemos agregar los campos existentes y agregar campos nuevos
        batch.commit(); //Efectiviza las operaciones realizadas con Batch
        setOrderBatch(true);
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    <h1>Firebase II</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" onInput={(e) => {setName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="phone" onInput={(e) => {setPhone(e.target.value)}}  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button> <button type="button" className="btn btn-secondary" onClick={() => {actualizarOrden(orderId)}}>Actualizar Orden</button> <button type="button" className="btn btn-danger" onClick={() => {actualizarOrdenBatch(orderId)}}>Actualizar Orden (Batch)</button>
                    </form>
                    
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    {orderId ? <div className="alert alert-success" role="alert">Se generó la Orden de Compra con el ID: <b>{orderId}</b></div> : ""}
                    {orderUpdated ? <div className="alert alert-warning" role="alert">Se actualizó la Orden de Compra con el ID: <b>{orderId}</b></div> : ""}
                    {orderBatch ? <div className="alert alert-danger" role="alert">Se actualizó la Orden de Compra (Batch) con el ID: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Firebase2;