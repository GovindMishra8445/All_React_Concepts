import { createRoot } from 'react-dom/client'
import './style.css'
import { Children } from 'react'

function Card(props) {
  const { key, title, image, brand, price} = props
  // console.log(key)
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  )
}


function card2(){
  return <h1>Hello</h1>
}
const root = createRoot(document.getElementById('root'))

console.log('Hello world!!!')

// fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then((data) => {
//     root.render(
//       <div className="container">
//         {data.products.map((product) => {
//           return Card({
//             key: product.id,
//             image: product.thumbnail,
//            title: product.title,
//            brand: product.brand,
//             price: product.price
//           }
//           )
//         })}
//       </div>
//     )
//   })


  root.render({
    $$typeof: Symbol.for('react.element'),
    type: card2,
    ref: null,
    props:{}
  })