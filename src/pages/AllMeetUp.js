import { useState , useEffect } from 'react';
import MeetUpList from '../components/meetups/MeetupList';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];


function AllMeetupPage() {
  const [isLoading , setIsLoading] = useState(true);
  const [loadedMeetUps , setLoadedMeetUps] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch('https://meetup-ff301-default-rtdb.firebaseio.com/meetups.json')
    .then(response => {return response.json()})
    .then((data)=>{
      setIsLoading(false);
      const meetUps = [];
      for(const key in data) {
        const meetUp = {
          id: key,
          ...data[key],
        }
        meetUps.push(meetUp);
      }
       setLoadedMeetUps(meetUps);
      // console.log(data);
    });
  },[]);

  if(isLoading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }
  return (<div>
    <h1>All Meetups</h1>
    <MeetUpList meetups= {loadedMeetUps}/>
  </div>)
}

export default AllMeetupPage;

// to prevent infinite loop we use react useEffect hook to call the render only ones
// without array at the end of useEffect the function executes infinitly empty array [] then the react run the function at only at once when component render