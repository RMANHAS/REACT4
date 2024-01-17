import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { divide } from './CoinSlice'

export default function Coin1() {
  const count =useSelector(state=>state.counter.value)
 
  const dispatch = useDispatch()
  return (
  <>
    <div>this is coin</div>
<div >
  <button onClick={() => dispatch(divide())}/>
  divide  {count}<button/>
</div>
    </>
  )
}

