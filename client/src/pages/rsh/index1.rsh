'reach 0.1';

const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS, C_WINS ] = makeEnum(4);

const winner = (handAlice, handBob, handCharlie) =>
  (((handAlice + (4 - handBob + (8 - handCharlie))) % 3);

assert(winner(ROCK, PAPER, PAPER) == B_WINS);
assert(winner(PAPER, ROCK, ROCK) == A_WINS);
assert(winner(ROCK, ROCK, ROCK) == DRAW);
assert(winner(ROCK, SCISSORS, PAPER) == C_WINS);

forall(UInt, handAlice =>
  forall(UInt, handBob =>
    forall(UInt, handBob =>
      assert(isOutcome(winner(handAlice, handBob, handCharlie))))));

forall(UInt, (hand) =>
  assert(winner(hand, hand, hand) == DRAW));

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
    .timeout(relativeTime(deadline), () => closeTo(Charlie, informTimeout));

  Charlie.only(() => {
    interact.acceptWager(wager);
  });
  Charlie.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  var outcome = DRAW;
  invariant( balance() == 2 * wager && isOutcome(outcome) );
  while ( outcome == DRAW ) {
    commit();

    Alice.only(() => {
      const _handAlice = interact.getHand();
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
      const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(commitAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _saltAlice));
    Bob.only(() => {
      const handBob = declassify(interact.getHand());
    });
    Bob.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Charlie, informTimeout));
    commit();

    unknowable(Charlie, Bob(_handBob, _saltBob));
    Charlie.only(() => {
      const handCharlie = declassify(interact.getHand());
    });
    Charlie.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice);
      const handAlice = declassify(_handAlice);
    });
    Alice.publish(saltAlice, handAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAlice, saltAlice, handAlice);

    outcome = winner(handAlice, handBob, handCharlie);
    continue;
  }

  assert(outcome == A_WINS || outcome == B_WINS || outcome == C_WINS);
  transfer(3 * wager).to(outcome == A_WINS ? Alice : Bob, Charlie);
  commit();

  each([Alice, Bob, Charlie], () => {
    interact.seeOutcome(outcome);
  });
});
