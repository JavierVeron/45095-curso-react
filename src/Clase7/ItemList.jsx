import Item from "./Item";

const ItemList = ({items}) => {
    return (    
        items.map(item => 
            <div className="col-md-2 mb-5" key={item.id}>             
                <Item item={item} />
            </div>
        )
    )
}

export default ItemList;