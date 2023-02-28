//file Application.jsx
import React from 'react'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';

export default function Application() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  console.log(cash);

const addCash = (cash) => {
  dispatch({type: 'ADD_CASH', payload: cash})
}

const getCash = (cash) => {
  dispatch({type: 'GET_CASH', payload: cash})
}

  return (   
    <div>
      <div>{cash}</div>
      <button onClick={() =>addCash(Number(prompt()))}>Пополнить счет</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
    </div>
  );
}

