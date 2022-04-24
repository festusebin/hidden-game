'reach 0.1';

const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS, C_WINS ] = makeEnum(4);

const winner = [];



const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt, // atomic units of currency
    deadline: UInt, // time delta (blocks/rounds)
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  const Charlie   = Participant('Charlie', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  //deploy();
  
  init();

  const informTimeout = () => {
    each([Alice, Bob, Charlie], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  commit();

  Charlie.only(() => {
    interact.acceptWager(wager);
  });
  Charlie.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  const outcome = Alice;

  each([Alice, Bob, Charlie], () => {
    interact.seeOutcome(outcome);
  });

});
