import { useState } from "react";

function GoodsItem(props) {
    const { id, name, description, price, full_background, addToBasket=Function.prototype,} = props;
    const [background, setBackground] = useState();

    var img = new Image();
    img.src = full_background;
    img.onload = function () { setBackground(full_background) };
    img.onerror = function () { setBackground('./f.svg') };

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={background} alt={name} />
                <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button 
                className="btn"
                onClick={() =>
                    addToBasket({
                        id,
                        name,
                        price
                    })
                }
                >
                    Купить
                </button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export {GoodsItem};