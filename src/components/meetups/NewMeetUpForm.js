import { useRef } from 'react';
import classes from './NewMeetUpForm.module.css';
import Card from '../UI/Card';

function NewMeetUpForm(props){
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault(); //this methode is javascripts methode
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    }

    console.log(meetUpData);
    props.onAddMeetup(meetUpData);
    // titleInputRef.current.value ='we can update this as well'
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title" >Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image" >Image </label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address" >Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description" >Meetup Description</label>
          <textarea rows='5' required id="description" ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetUpForm;


/*
* here we have used the htmlFor in the lable which is different that we use in HTML
*/