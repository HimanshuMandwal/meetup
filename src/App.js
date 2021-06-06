import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetUpPage from './pages/AllMeetUp';
import NewMeetupPage from './pages/NewMeetup';
import FavoriteMeetupPage from './pages/FavoriteMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact> <AllMeetUpPage /> </Route>
        <Route path='/new-meetup' > <NewMeetupPage /> </Route>
        <Route path='/favorites' > <FavoriteMeetupPage /> </Route>
      </Switch>
    </Layout>
  );
}

export default App;
