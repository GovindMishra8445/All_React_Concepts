import { createRoot } from "react-dom/client";

function Card(props) {
        const { key, title, image, brand, price, category, rating } = props
        return (
                <div className="card" key={key}>
                        <img src={image} alt="iPhone" />
                        <div className="card-container">
                                <h3>{title}</h3>
                                <p>{brand}</p>
                                <p><b>$ {price}</b></p>
                                <p>{category}</p>
                                <p>{rating}</p>
                        </div>
                </div>
        )
}

const root = createRoot(document.getElementById('root'))

fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => {
                root.render(
                        <div className="container">{data.products.map((products) => {
                                return Card({ key: products.id, title: products.title, image: products.thumbnail, brand: products.brand, price: products.price, category: products.category, rating: products.rating })
                        })}
                        </div>)

        });                                                             