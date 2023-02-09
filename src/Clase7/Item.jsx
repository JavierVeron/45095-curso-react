const Item = ({item}) => {
    return (
        <div className="card border-0">
            <a href={item.permalink} target={"_blank"} className="text-decoration-none text-dark" rel={"noreferrer"}>
                <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text"><b>${item.price}</b></p>
                </div>
            </a>
        </div>
    )
}

export default Item;