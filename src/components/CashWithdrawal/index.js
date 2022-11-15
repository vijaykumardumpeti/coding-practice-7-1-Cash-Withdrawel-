// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  decreaseBalanceForId1 = () => {
    this.setState(prevState => ({balance: prevState.balance - 50}))
  }

  decreaseBalanceForId2 = () => {
    this.setState(prevState => ({balance: prevState.balance - 100}))
  }

  decreaseBalanceForId3 = () => {
    this.setState(prevState => ({balance: prevState.balance - 200}))
  }

  decreaseBalanceForId4 = () => {
    this.setState(prevState => ({balance: prevState.balance - 500}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal-container">
        <div className="container-1">
          <div className="profile-pic">
            <p className="profile-s">S</p>
          </div>
          <p>Sarah Williams</p>
        </div>

        <div className="container-2">
          <div className="container-2-1">
            <p className="your-balance">Your Balance</p>
          </div>
          <div className="container-2-2">
            <p className="rupees-in-digits">{balance}</p>
            <p className="rupees-in-words">In Rupees</p>
          </div>
        </div>

        <div className="container-3">
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
        </div>

        <ul className="cards-container">
          {denominationsList.map(eachObject => (
            <DenominationItem
              decreaseBalanceForId1={this.decreaseBalanceForId1}
              decreaseBalanceForId2={this.decreaseBalanceForId2}
              decreaseBalanceForId3={this.decreaseBalanceForId3}
              decreaseBalanceForId4={this.decreaseBalanceForId4}
              eachObject={eachObject}
              key={eachObject.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
