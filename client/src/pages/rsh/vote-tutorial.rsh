'reach 0.1';

const [ isVote, ALICE, BOB, CHARLIE] = makeEnum(3);
const [ finalResult, FAIL, DRAW, SUCCESS ] = makeEnum(3);

const consensus = (voteA, voteB, voteC) =>
      voteA + voteB + voteC;
      
/* assert(consensus(ALICE, BOB) == FAIL);
assert(consensus(BOB, CHARLIE) == SUCCESS);
assert(consensus(ALICE, ALICE) == DRAW); */



const Voter =
      { ...hasRandom,
        getVote: Fun([], UInt),
        seeResult: Fun([UInt], Null),
        informTimeout: Fun([], Null) };
const Alice =
      { ...Voter,
        stake: UInt };
const Bob =
      { ...Voter,
        acceptStake: Fun([UInt], Null) };
const Cha =
      { ...Voter,
        acceptStake: Fun([UInt], Null) };

const DEADLINE = 3000;

export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob), Participant('Cha', Cha)],
    (A, B, C) => {
      const informTimeout = () => {
        each([A, B, C], () => {
          interact.informTimeout(); }); };
      A.only(() => {
        const stake = declassify(interact.stake); });
      A.publish(stake)
        .pay(stake);
      commit();
      B.only(() => {
        interact.acceptStake(stake); });
      B.pay(stake)
        .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
      commit();
      C.only(() => {
        interact.acceptStake(stake); });
      C.pay(stake)
        .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
      var result = DRAW;
      invariant(balance() == 3 * stake);
      while ( result == DRAW ) {
        commit();
        A.only(() => {
          const _voteA = interact.getVote();
          const [_decisionA, _saltA] = makeCommitment(interact, _voteA);
          const decisionA = declassify(_decisionA); });
        A.publish(decisionA)
          .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
        commit();
        unknowable(B, A(_voteA, _saltA));
        B.only(() => {
          const voteB = declassify(interact.getVote()); });
        B.publish(voteB)
          .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
        commit();
        C.only(() => {
          const voteC = declassify(interact.getVote()); });
        C.publish(voteC)
          .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
        commit();
        A.only(() => {
          const [saltA, voteA] = declassify([_saltA, _voteA]); });
        A.publish(saltA, voteA)
          .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
        checkCommitment(decisionA, saltA, voteA);
        result = consensus(voteA, voteB, voteC);
        continue; }
      transfer(3 * stake).to(result == SUCCESS ? A : B);
      commit();
      each([A, B, C], () => {
        interact.seeResult(result); });
      exit(); });