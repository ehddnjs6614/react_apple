import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

function Cart(props) {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            // tr을 state 갯수만큼 생성
            return (
              <tr key="i">
                <td>{a.id + 1}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: '증가' })
                    }}
                  >
                    ➕
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: '감소' })
                    }}
                  >
                    ➖
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

function 함수명(state) {
  return {
    state: state,
  }
}

export default connect(함수명)(Cart)
