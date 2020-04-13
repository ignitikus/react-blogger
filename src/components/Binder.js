import React, { Component } from 'react'

export default class Binder extends Component {
   constructor(){
      super()
      this.state = {
         text: 'Hello state',
         somethingText: ''
      }
      // this.onClickMe = this.onClickMe.bind(this) - not recommended
      // this.onClickMe = () => console.log(this) - not recommended
   }

   // onClickMe(){
   //    console.log(this)
   // }

   // usage of arrow function is recommended
   onClickMe = () => {
      console.log(this)
   }

   handleSomething = (text) => {
      // const node = document.createElement("h1")
      // node.innerText = 'Clicked on ' + text
      // document.getElementById('root').prepend(node)

      this.setState({
         somethingText: 'Clicked on Handle Something'
      })
   }
   


   render() {
      return (
         <div>
            <h1>{this.state.somethingText}</h1>
            <button 
               className='ui primary button' 
               style={{ margin: '10px 15px'}} 
               onClick={this.onClickMe/*.bind(this)*/}>
               Click Me
            </button>
            <button 
               className='ui black button' 
               style={{ margin: '10px 15px'}} 
               onClick={ () => this.handleSomething(this.state.somethingText) }
               >
               Do something
            </button>
         </div>
      )
   }
}
