import {useState,useEffect} from 'react';

export default ()=>{
  const [cast,setCast]=useState([])

  async function fetchCast(){
    let response=  await fetch('cast.json');
   // console.log( await response.json(),"respnse here")
    setCast(await response.json())
  }

  useEffect(()=>{
    fetchCast();
    
  },[])
  return (
    <>
  <div style={{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit,minmax(90px,1fr))',
    gap:'1rem',
    margin:'1rem'
  }}>
    {
      cast && cast.map(member=>{
        { console.log("cast is loadef", cast)}
       return <a key={member.id} data-tooltip={member.name}>
         <img src={`images/${member.slug}_tn.svg`} alt="member name" key={member.name}></img>
       </a>
      })
    }

  </div>
    </>
  )
}