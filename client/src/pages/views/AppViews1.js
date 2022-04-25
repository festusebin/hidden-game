import React from 'react';
import { Index } from '../Index';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>Hidden Traitor</h1>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait connecting to your account....
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h4>Add some Funds to your account</h4>
        <br />
        Current Balance For Staking: {bal} {standardUnit}
        <hr />
      Fund account with additional {standardUnit}?
        <br />
      Does not work with all wallets. Your organization(Hidden Traitor) must have enough ALGO to fund for staking perspectives.
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Add ALGO(will cost gas)</button>
        <button onClick={() => parent.skipFundAccount()}>Go to voting</button>
        <button onClick={() => Index()}>Go to game</button>
      </div>
    );
  }
}

exports.Player = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <div>

      </div>
    )
  }
}

exports.ValidatorOrMember = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role
        <br />
        <p>
          <button
            onClick={() => parent.selectMember()}
          >Attacher</button>
          <br />
          Attach to the Deployer's contract.
          /**
          ** Regular Member within the organization. Has the ability to vote on propositions. 
          **/
        </p>
        <p>
          <button
            onClick={() => parent.selectValidator()}
          >Deployer</button>
          <br />
          Set the wager, deploy the contract.
          /**
          ** Will ensure voter exists within the organization and then also paticipate in the voting process.
          **/
        </p>
      </div>
    );
  }
}

export default exports;