import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Budapest%2C_Hungary_%28explored%29_%2814995308504%29.jpg/1200px-Budapest%2C_Hungary_%28explored%29_%2814995308504%29.jpg"
      title="A first Meetup"
      address="Koshytska strreet 6"
      description="The meetup description"
    />
  );
}

export default MeetupDetails;
