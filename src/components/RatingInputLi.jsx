function RatingInputLi({ value, isChecked, changeHandler }) {
  return (
    <li>
        <input 
        type="radio"
        id={`num${value}`}
        name="rating"
        value={value}
        onChange={changeHandler}
        checked={isChecked}
        />
        <label htmlFor={`num${value}`}>{value}</label>
    </li>
  )
}

export default RatingInputLi
