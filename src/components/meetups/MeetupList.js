
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetUpList(props){
  return (
    <ul className={classes.list}>
      {
        props.meetups.map((meetup)=>
          <MeetupItem key={meetup.id} {...meetup}/>
        )
      }
    </ul>
  )
}

export default MeetUpList;