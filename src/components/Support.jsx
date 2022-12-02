import {useState,useEffect} from 'react';

const Support=()=>{
  const [count,setCount]=useState(0);
  const [pageTitle,setPageTitle]=useState('Hands On React');

  useEffect(()=>{
    if(count>0){
      document.title = `${pageTitle} -- ${count}`
    }
  })
  return (
    <>
      <button className="outline" onClick={() => setCount(count+1)}>
        {count===0?"Click to Support":`Supported ${count} times`}
       </button>
    </>
  )
}

export default Support;