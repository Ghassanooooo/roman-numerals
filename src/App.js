import React from 'react';
import Results from './Results';
import Button from './Button';
import {operations, numbers, romanize} from './helper';
import './App.css';

  
class App extends React.Component{
  state={
      currentIndex:null,
      isNewOperation:true,
      isNewValue:true,
      value:null,
      operation:null,
      isOperation:false,
      result:null,
      regularResult:null,
      store:[],
      isResult:false
  }

 
  onNumberButtonHandler=(buttonData)=>{
    let value = buttonData.value
    if(this.state.result){
       value =''+ this.state.value + buttonData.value
       value=1*value
     }
    let result =romanize(value)

    let currentIndex = 
                      this.state.isNewValue
                      ? 
                      this.state.store.length
                      :
                      this.state.currentIndex 

    let store =
                !this.state.isNewValue
                ? 
                this.state.store
                .map((item, index)=>this.state.currentIndex === index
                ? 
                value : item)
                :
               [...this.state.store,value]
 
    store =
          this.state.isResult
          ? 
          [buttonData.value]:store
    this.setState({
      ...this.state,
           store,
           isNewOperation:true,
           currentIndex,
           isNewValue:false,
           result,
           value,
           regularResult:null,
           isResult:false
    })
    }
  
  onOperationHandler=(buttonData)=>{
    if(!this.state.value || this.state.isResult) return
    if(buttonData.isResults){
      this.onResultsHandler()
      return
    }
    if(this.state.store.length < 3){
    let currentIndex = 
                      this.state.isNewOperation
                      ? 
                      this.state.store.length
                      : this.state.currentIndex 
    
    let store =
              !this.state.isNewOperation
               ?
              this.state.store
              .map((item, index)=>this.state.currentIndex === index? buttonData.value : item)
                  : [...this.state.store,buttonData.value]
    
      this.setState({
        ...this.state,
          value:0,
          currentIndex,
          isNewOperation:false, 
          isNewValue:true, 
          isOperation:true,
          operation:buttonData,
          store,
          })
    }
 
  }

  onResultsHandler=()=>{
    const store =this.state.store
    let counter = store[0]
    let op=store[1]
        if(op === '+'){
          counter = counter + store[2]
        }
        if(op === 'x'){
          counter = counter * store[2]
        }
        if(op === '-'){
          counter = counter - store[2]
        }
    this.setState({ 
      ...this.state,
      result:romanize(counter),
      isResult:true,
      regularResult:counter,
      isOperation:false,
      isNewValue:true,
      currentIndex:null,
      operation:null
    })
  }

  onResetHandler=()=>{
    this.setState({ 
      currentIndex:null,
      isNewOperation:true,
      isNewValue:true,
      value:null,
      operation:null,
      isOperation:false,
      result:null,
      isResult:false,
      regularResult:null,
      store:[]
    })
  }
 render(){
  console.log(this.state)
  return (
    <div className="App">
     <h1>Roman numerals</h1>
       <div className='Calculator'>
       <Results  results={this.state}/>
         <div className='ButtonsContainer'>
           <div className='Numbers'>
            {numbers.map((number)=><Button key={number.value} item={number} buttonHandler={this.onNumberButtonHandler}/>)}
            <div className='Button ReStart' onClick={this.onResetHandler}><span>AC</span></div>
          </div>
           <div className='Operations'>
           {operations.map((operation)=><Button buttonHandler={this.onOperationHandler} key={operation.value} item={operation}/>)}
           </div>  
       </div>
     </div>
    </div>
  );}
}
export default App;
