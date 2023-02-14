const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <div className="row">
                        <div className="col text-end">
                            <img src={item.thumbnail} alt={item.title} width={180} />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;