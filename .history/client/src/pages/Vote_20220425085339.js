import React from 'react';
import AppViews from './views/AppViews';
import ValidatorViews from './views/ValidatorViews';
import MemberViews from './views/MemberViews';
// import {renderDOM, renderView} from './views/render';
import {renderDOM, renderView} from './views/render';
import './Vote.css';
import * as backend from './rsh/build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
// import Algo connector
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

//const reach = loadStdlib('CFX');

// Add this two line of code
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect }));
// const reach = loadStdlib(process.env);

const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

const vote_array = [];
const outcome_array = [];

export class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    try {
      const faucet = await reach.getFaucet();
      this.setState({view: 'FundAccount', faucet});
    } catch (e) {
      this.setState({view: 'ValidatorOrMember'});
    }
  }
  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'ValidatorOrMember'});
  }
  async skipFundAccount() { this.setState({view: 'ValidatorOrMember'}); }
  async Game() {
    this.setState({ view: 'Player' });
  }
  selectMember() { this.setState({view: 'Wrapper', ContentView: Member}); }
  selectValidator() { this.setState({view: 'Wrapper', ContentView:Validator}); }
  render() { return renderView(this, AppViews); }
}

class Voter extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getVote() { // Fun([], UInt)
    const vote = await new Promise(resolveVoteP => {
      this.setState({view: 'GetVote', workable: true, resolveVoteP});
    });
    this.setState({view: 'WaitingForResults', vote});
    return vote_array[vote];
  }
  seeResult(i) { this.setState({view: 'Done', result: outcome_array[i]}); }
  informTimeout() { this.setState({view: 'Timeout'}); }
  workVote(vote) { this.state.resolveVoteP(vote); }
}

class Validator extends Voter {
  constructor(props) {
    super(props);
    this.state = {view: 'SetStake'};
  }
  setStake(stake) { this.setState({view: 'Validator', stake}); }
  async validate() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({view: 'Validating', ctc});
    this.stake = reach.parseCurrency(this.state.stake); // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForMember', ctcInfoStr});
  }
  render() { return renderView(this,ValidatorViews); }
}

class Member extends Voter {
  constructor(props) {
    super(props);
    this.state = {view: 'Secure'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Securing'});
    backend.Bob(ctc, this);
  }
  async acceptStake(stakeAtomic) { 
    const stake = reach.formatCurrency(stakeAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptStake', stake, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render() { return renderView(this, MemberViews); }
}

export default Vote;