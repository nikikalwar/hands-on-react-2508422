import {useState,useEffect} from 'react';

const Support=()=>{
  const [count,setCount]=useState(0);

  return (
    <>
      <button className="outline" onClick={() => setCount(count+1)}>
        {(()=>{
          if(count===0){
            return "Click to Support"
          }
          else{
            return `Supported ${count} times`
          }
        })()}
       </button>
    </>
  )
}

export default Support;