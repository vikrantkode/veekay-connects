import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    userHandle : "adarshBalika",
    bio: "A techie @everyone's_projwct , building projects for their career",
    link: "https://adarshbalika.netlify.app/",
    profileImage: "https://res.cloudinary.com/demo/image/upload/r_20/front_face.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vikrant",
    lastName: "Kumar",
    username: "vikrant2812@gmail.com",
    password: "vikrant12345",
    userHandle : "vikrant2812",
    bio: "A Software Engineer @ford , building softwares for fun",
    link: "https://vikrant.netlify.app/",
    profileImage : "https://pbs.twimg.com/profile_images/1097280825786134528/JGaXV_EB_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Yatendra",
    lastName: "Sharma",
    username: "yatendra948@gmail.com",
    password: "yaten12345",
    userHandle : "yaten_123",
    bio: "Changing ctulure at tcs",
    link: "https://sharmayatendra.netlify.app/",
    profileImage : "https://pbs.twimg.com/profile_images/1355907912393080835/jKKmGwpR_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vaibhav",
    lastName: "Mishra",
    username: "mishra.vaibhav6@gmail.com",
    password: "vaibhav112345",
    userHandle : "ivaibhavm",
    bio: "Having fun and job alltogethwer",
    link: "https://vaibhav.netlify.app/",
    profileImage : "https://pbs.twimg.com/profile_images/1110203336127504385/cwnJ75vy_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
