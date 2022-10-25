import React from "react"

const Rating = ({rate, id})=>{
  let checked = Math.floor(rate)
  
  return (
    <div className={`rating rating-sm`}>
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked={checked == 1} />
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked={checked == 2}/>
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked={checked == 3} />
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked={checked == 4} />
        <input type="radio" name={`rating-${id}`} className="mask mask-star-2 bg-orange-400" checked={checked == 5} />
    </div>
    )
  
}
export default Rating