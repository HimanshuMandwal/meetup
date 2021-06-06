import NewMeetUpForm from '../components/meetups/NewMeetUpForm';
import { useHistory } from 'react-router-dom';

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetUpdata) {
    fetch('https://meetup-ff301-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetUpdata),
      headers: {
        'content': 'application/json'
      }
    }).then(() => { history.replace('/') });
  }
  return (<section>
    <h1>Add New MeetUp</h1>
    <NewMeetUpForm onAddMeetup={addMeetupHandler} />
  </section>
  )
}

export default NewMeetupPage;