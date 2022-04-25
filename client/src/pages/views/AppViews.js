import React from 'react';
import {Link} from 'react-router-dom';

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
        Connecting to your account....
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {acc, bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h4>Add some Funds to your account</h4>
        <br />
        Current Balance For Staking: {bal} {standardUnit}
        <hr />
      Fund account with additional {standardUnit}?
        <br />
        <br />
      Vote who the Traitor is by staking some ALGO
        <br />
        <br />
        <div>
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund wallet</button>
        </div>
        <button onClick={() => parent.skipFundAccount()}>Go to voting</button>
        <Link to='/home'>
        <button>Go to game</button>
        </Link>
      </div>
    );
  }
}

exports.ValidatorOrMember = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select Deployer if you are the creator
        <br />
        <p>
          <button
            onClick={() => parent.selectValidator()}
          >Deployer</button>
          <br />Please select Voter if you are attacker
        </p>
        <p>
          <button
            onClick={() => parent.selectMember()}
          >Voter</button>
          <br />Voting is done in consensus
        </p>
      </div>
    );
  }
}

export default exports;