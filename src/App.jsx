import {Component, useEffect,useState} from 'react';

class Welcome1 extends Component {
  constructor(props){
    console.log("constructor called")
    super(props);
  }
  componentDidMount(){
    console.log("After mounting")
  }
  componentDidUpdate(){
    console.log("If the compoennt updated or not");
    console.log("this.props.name", this.props.name)
  }
  
  render(){
    console.log("rendering method")
    return(<>
      <h1>Meet the <i style={{ color: "SteelBlue" }}>{this.props.name}</i></h1>
    </>)
  }
}

const Welcome=(props)=>{
  return (<>
    <h1>Meet the <i style={{ color: "SteelBlue" }}>{props.name}</i></h1>
  </>)
}
function App() {
 // let name = 'StarGazers';
  const [name,changeName]=useState('StarGazers')
  useEffect(()=>{
    console.log("After app mounted");
    setTimeout(()=>{
      changeName("NameXYZ")
    //  name="Something";
      console.log("value changed")
    },2000)
  },[])
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
         <Welcome name={name}/>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
