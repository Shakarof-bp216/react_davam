
import { useEffect, useState } from "react";
import "./index.css";

function Trending() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <>
            <section>
                <div className="contanier">
                    <div className="mysectionname">
                        <div className="linediv"></div>
                        <h1>Trending</h1>
                        <div className="linediv"></div>
                    </div>
                    <p className=" mysectionname_bottom"><i>Top view in this week</i></p>
                </div>
                <div className="card_contanier">
                    {product.map((x) =>
                        <div className="card">
                            <div className="img_contanier"><img src={x.image} alt="" /></div>
                            <p>{x.title}</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Trending