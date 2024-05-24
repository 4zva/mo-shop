function BasketItem(props) {
    const { 
        id, 
        name, 
        price, 
        quantity, 
        removeFromBasket=Function.prototype,
        incQuantity=Function.prototype,
        decQunatity=Function.prototype,
    } = props;
    return (
        <ul className="collectione">
            <li className="collection-item">
                {name}{""} 
                <i 
                    className="material-icons basket-quantity"
                    onClick={() => decQunatity}
                >
                    remove
                </i> 
                x {quantity}
                <i 
                    className="material-icons basket-quantity"
                    onClick={() => incQuantity(id)}
                >
                    add
                </i>{""} 
                = {price * quantity} руб.
                <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                    <i className="materials-icons basket-delete">clear</i>
                </span>

            </li>

        </ul>
    );
}

export {BasketItem};