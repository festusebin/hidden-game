import React from 'react';

const exports = {};

// Voter views must be extended.
// It does not have its own Wrapper view.

exports.GetVote = class extends React.Component {
  render() {
    const {parent, workable, vote} = this.props;
    const quantumresults = ['Alice recieves 5.00 Algo', 'Alice recieves 5.00 Algo','Alice recieves 5.00 Algo','Alice recieves 0.00 Algo','Alice recieves 0.00 Algo'];
    const result = Math.floor(Math.random() * quantumresults.length);
    const main = quantumresults[result];
    return (
      <div>
          {vote ? 'No Consensus reached! Our Quantum Computer will make a decison......Our Quantum Computer has determined that the result should be: '+main+'. You may vote again if you want to have more than 50% consensus.' :  ''}
        <br />
        {!workable ? 'Please wait...' : ''}
        <br />

        <button
          disabled={!workable}
          onClick={() => parent.workVote('No')}
        >No</button>
        <button
          disabled={!workable}
          onClick={() => parent.workVote('Yes')}
        >Yes</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Compiling Results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {result} = this.props;
    if(result === 'Consensus Not Reached'){
      const quantumresults = ['Alice recieves 5.00 Algo', 'Alice recieves 5.00 Algo','Alice recieves 5.00 Algo','Alice recieves 0.00 Algo','Alice recieves 0.00 Algo'];
      const result = Math.floor(Math.random() * quantumresults.length);
      return(
        <div>
        Using Quantum-Voting Results:
        <br />{result || 'Unknown'}
        <br />
          /**
            ** If you want a NFT showing that you voted on an amendment that reached consensus within the orginization, please click this. Also contact your validator so that they can ensure a proper transfer.
          **/
        </div>

      );
    }
    else{  return (
        <div>
          The result was:
          <br />{result || 'Unknown'}
          <br />
        /**
        ** If you want a NFT showing that you voted in process reaching majority vote, please click. Also contact your validator so that they can ensure a proper transfer.
         */
          
        </div>
      );}
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There was a timeout. There is either a problem with our servers, or someone took too long.
      </div>
    );
  }
}

export default exports;