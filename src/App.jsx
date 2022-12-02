import {Component, useEffect,useState} from 'react';
import ListCast from './components/ListCast';
import Support from './components/Support';
import { Welcome } from './components/Welcome';

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


function App() {
 // let name = 'StarGazers';
  const [name,changeName]=useState('StarGazers')
 
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
         <Welcome name={name}/>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast />
          <Support/>
       
        </hgroup>
      </article>
    </div>
  )
}
export default App
