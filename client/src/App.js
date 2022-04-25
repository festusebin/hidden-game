import { Route, Switch } from 'react-router';
import { Index } from './pages/Index';
import { CreateGame } from './pages/CreateGame';
import { JoinGame } from './pages/JoinGame';
import { Game } from './pages/Game';
import { NotFound } from './components/NotFound/NotFound';
// import { Papp } from './pages/Papp';
import { Vote } from './pages/Vote';

function App() {
   
  return (
      <Switch>
        <Route exact path='/' component={Vote}/>
        <Route exact path='/home' component={Index}/>
        <Route exact path='/create' component={CreateGame}/>
        <Route exact path='/join' component={JoinGame}/>
        <Route exact path='/game' component= {(data) =><Game data={data} />}/>
        <Route component={NotFound}/>
      </Switch>
  );
}

export default App;