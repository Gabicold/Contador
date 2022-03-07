import React, {Component} from "react"

export default class app extends Component{

state = {
  num:0
}

add = ( ) =>{
  if(this.state.num < 10)
    this.setState({
      num: this.state.num + 1
    })
}

remover = () => {
  if(this.state.num > 0){
    this.setState({
      num: this.state.num -1
    })
  }
}

clear = () => {
  this.setState({
    num: 0
  })
}
render(){
  return(
    <div>
      <h1>Contador</h1>
      <h2>{this.state.num}</h2>
      <button onClick={this.add}>+</button>
      <button onClick={this.remover}>-</button>
      <button onClick={this.clear}>C</button>
      
    </div>
  );
}

}