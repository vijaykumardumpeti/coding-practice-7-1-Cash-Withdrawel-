// Write your code here

import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {
      key,
      eachObject,
      decreaseBalanceForId1,
      decreaseBalanceForId2,
      decreaseBalanceForId3,
      decreaseBalanceForId4,
    } = this.props

    const {id, value} = eachObject

    this.withdrawFunction = () => {
      switch (id) {
        case 1:
          decreaseBalanceForId1()
          break
        case 2:
          decreaseBalanceForId2()
          break

        case 3:
          decreaseBalanceForId3()
          break

        default:
          decreaseBalanceForId4()
          break
      }
    }

    return (
      <li key={key}>
        <button
          onClick={this.withdrawFunction}
          className="button-style"
          type="button"
        >
          {value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
