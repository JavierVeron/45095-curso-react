import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/producto/" + item.id} className="text-decoration-none text-dark">
            <div className="card border-0">
                <img src={item.thumbnail} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text"><b>${item.price}</b></p>
                </div>
            </div>
        </Link>
    )
}

export default Item;