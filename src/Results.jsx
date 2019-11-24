import React from 'react'

function Results(props) {
    return (
       <div className='Results'>
        <span className='RomanResults'>{props.results.result}
           <div className='RegularResults' >{props.results.store.join(' ')}{props.results.regularResult ? ' = ' +props.results.regularResult: null}</div>
        </span>
       </div>
    );
  }
  export default Results