import React, { useContext, useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import './Datail.css'
import { 재고Context } from './App.js'

let box = styled.div`
  padding: 20px;
`
let 글씨 = styled.h4`
  font-size: 20px;
  color: ${props => props.색상};
`

export default function Datail(props, 재고) {
  let 재고1 = useContext(재고Context)
  let [alert, alert변경] = useState(true)
  let [input, input변경] = useState('')
  let { id } = useParams()
  let history = useHistory
  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false)
      console.log('gd')
    }, 2000)
  }, [alert])

  return (
    <div>
      <div className="container">
        {alert === true ? (
          <box>
            <글씨 className="red">Datail</글씨>
          </box>
        ) : null}

        <input
          onChange={e => {
            input변경(e.target.value)
          }}
        />
        {input}

        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[0].title}</h4>
            <p>{props.shoes[0].content}</p>
            <p>{props.shoes[0].price}원</p>

            <Info 재고={props.재고} />

            <button
              className="btn btn-danger"
              onClick={() => {
                props.재고변경([9, 11, 12])
              }}
            >
              주문하기
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack()
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
function Info(props) {
  return <p>재고 : {props.재고[0]}</p>
}
