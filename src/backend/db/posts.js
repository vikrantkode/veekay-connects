import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "To kaise hai aap log ?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"PanditJi",
    username: "sanskaaribaalak",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"SharmaJi",
    username: "gyaanipurush",

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Awesome",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Fantastic!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The operation, which involved booking Air India tickets through a two-decade old BPO company, IGT Solutions, without making payments to the airline ran smoothly until the second wave of Covid hit the country, after which it started to unravel and come apart at the seams.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Indian Express",
    username: "ie",

    comments: [
      {
        _id: uuid(),
        username: "Satyam",
        text: "Great",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Shivam",
        text: "Good to hear",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "???I went into a shell???- Chetan Sakariya honestly reveals how he felt after Delhi Capitals benched him for 11 matches in IPL 2022",
    likes: {
      likeCount: 112,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Chetan",
    username: "chetan_sakariya",

    comments: [
      {
        _id: uuid(),
        username: "hardik",
        text: "Koi ni bhai .. hota hai aisa kabhi kabhi",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "chahal",
        text: "hard times shall pass",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Life is what you make it. Keep Hustling. !!",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Vikrant",
    username: "vikrant2812@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Vaibhav Mishra",
        text: "Good bro..keep it up",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Yatendra",
        text: "Hustling OP",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Planning to learn Web Development. Any Resources Comment plzz... !!",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    firstName:"Vaibhav",
    username: "mishra.vaibhav6@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Abhinav Agarwal",
        text: "Haan bhai..neoG camp join krle",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Yatendra",
        text: "Its very structured. you will love it",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    
  },
];
