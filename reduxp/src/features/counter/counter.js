import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'


export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {count}
        <button
         
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button onClick={()=>dispatch(incrementByAmount(10))}>increment Amount by 10</button>
    </div>
  )
}