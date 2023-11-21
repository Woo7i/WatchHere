import React, {useState, useEffect} from 'react';
import { AiFillStar } from 'react-icons/ai';

function StarRating(){
  const [score, setScore] = useState(0);
  const [hoverScore, setHoverScore] = useState(0);
  const [starIndex, setStarIndex] = useState(0);
  
  const handleHoverStar = (index) => {
    setHoverScore(index);
  }
  const handleMouseLeaveStar = () => {
    setHoverScore(0);
  }
  const handleClickStar = (index) => {
    setScore((cur) => cur===index?0:index);
  }

  useEffect(()=>{
    let curStarIndex = (hoverScore!=0? hoverScore: score);
    setStarIndex(curStarIndex);
  }, [score, hoverScore])

  return (
    <div>{[1,2,3,4,5].map((index)=>(
      <AiFillStar key={`hoverscore${index}`} 
      className={`inline-block ${starIndex>=index? 'text-yellow-200': 'text-white'} text-5xl`}
      onMouseEnter={()=>handleHoverStar(index)}
      onMouseLeave={()=>handleMouseLeaveStar()}
      onClick={()=>handleClickStar(index)}
      />
    ))}</div>
  )

}


export default StarRating;
