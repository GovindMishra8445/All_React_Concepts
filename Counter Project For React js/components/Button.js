const Button= ({ImageUrl, buttonName, clickHandler})=> {
  return (
        <button onClick={clickHandler} title={buttonName}>
                <img src={ImageUrl} alt={buttonName} />
        </button>
  )
}

export default Button