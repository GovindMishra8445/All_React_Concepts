const AppleBasket = ({appleCont, basketName}) => {
  return (
    <div className="basket1">
        <h1>
                <span>{appleCont}</span>Apple
        </h1>
        <p>{basketName} {appleCont === 10 && '(Full)'}  {appleCont === 0 && '(Empty)'}  {(appleCont >= 5 && appleCont != 10) && '(Half Full)'}</p>
        
    </div>
  )
}

export default AppleBasket