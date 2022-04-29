# Hidden Traitor

Hidden Traitor is a multiplayer deduction game where players try to find out who the traitor is. 



## Game Rules

At the start of a game one player is randomly assigned the traitor role while the other players get the agent role. Each player gets to choose one of three actions each turn:

- Spy: look at another player's role.
- Swap: swap the roles of two players.
- Confirm: look at your own role (it might have changed).

At the end of turn 3 a voting starts where players vote on who they think the traitor is. If the traitor is the most voted player then the agents win, otherwise the traitor wins.

## How to run dApp

### react and reach integration---Hidden Role game

In the root directory:
### `npm run web`
Run the front-end project to start
Open a browser and enter [http://localhost:3000]

and server [http://localhost:4009]

### `REACH_CONNECTOR_MODE=ALGO ./reach devnet`
Run the consensus test network on ALGORAND


### Demo Website
Please check [https://reach-p2.vercel.app]

### REFERENCE
1. Credit to Hidden Role Game in web2 [https://github.com/DoddiSkula/hidden-traitor-backend]
2. RPS tutorial reach [https://github.com/reach-sh/reach-lang/tree/master/examples/rps-9-web]
3. Voting contract reach [https://github.com/Bhaney44/Reach/tree/main/Reach_Voting_Tutorial]

