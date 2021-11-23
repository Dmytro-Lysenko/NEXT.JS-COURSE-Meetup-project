//our domain.com/

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEEtUPS = [
  {
    id: "m1",
    title: "A first meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Budapest%2C_Hungary_%28explored%29_%2814995308504%29.jpg/1200px-Budapest%2C_Hungary_%28explored%29_%2814995308504%29.jpg",
    adress: "Some address 5, 12345",
    description: "This is the very first meetup",
  },

  {
    id: "m2",
    title: "A second meet up",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wXqOcUYK9UZhS7XTn73h8-MSI-pftZ1Nyg&usqp=CAU",
    adress: "Some address 22, 12345",
    description: "This is the very second meetup",
  },

  {
    id: "m3",
    title: "A third meet up",
    image:
      "https://discover-ukraine.info/uploads/i/i/4eea45b07360e4.83381928.100.jpg",
    adress: "Some address 2333, 12345",
    description: "This is the vthird meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEEtUPS} />;
};

export default HomePage;
