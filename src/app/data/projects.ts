import { Project } from '../model/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Apple Market',
    slug: 'apple-market',
    excerpt:
      'An online marketplace where users can post and browse used items for sale. Features include item listing with image, price, and seller information, user registration and authentication using Firebase, email verification.',
    body: 'An online marketplace where users can post and browse used items for sale. Features include item listing with image, price, and seller information, user registration and authentication using Firebase, email verification.  Once logged in, users are able to post comments on items, view their profile page, and edit their profile image. The website also provides sorting capabilities, enabling users to sort items based on their price, newest, and popularity. This project showcases my expertise in web development, specifically in the areas of user authentication and authorization, database management, and front-end development.',
    url: 'http://34.216.78.53/',
    published_date: '2023-02-23',
    image: 'images/apple-market-item-list.jpg',
    thumb: 'images/apple-market-home-page.jpg',
    category_id: 3,
    created_at: '2023-02-24T01:00:14.000000Z',
    updated_at: '2023-02-24T01:25:43.000000Z',
    category: {
      id: 3,
      slug: 'full-stack',
      name: 'Full Stack',
    },
    tags: [
      {
        id: 1,
        slug: 'react.js',
        name: 'React.js',
      },
      {
        id: 2,
        slug: 'node.js',
        name: 'Node.js',
      },
    ],
  },
  {
    id: 2,
    title: 'Workout Budy',
    slug: 'workout-budy',
    excerpt:
      'This app is a CRUD-based application designed to help users plan, track and manage their workout sessions. With this app, users have the ability to create customized workout plans, including the load, reps, and title of each exercise. The intuitive interface makes it easy for users to add, edit, and delete workout information as needed.',
    body: 'This app is a CRUD-based application designed to help users plan, track and manage their workout sessions. With this app, users have the ability to create customized workout plans, including the load, reps, and title of each exercise. The intuitive interface makes it easy for users to add, edit, and delete workout information as needed.  In addition to the workout management features, Workout Buddy also includes user authentication and security features. Users can register, login, and logout with ease, and all authentication is handled securely using JWT and a backend node.js middleware. This ensures that user data is protected and only accessible to the user who created it.',
    url: 'https://workout-buddy.up.railway.app',
    published_date: '2023-02-08',
    image: 'images/workout-buddy-app.jpg',
    thumb: 'images/workout-buddy-app.jpg',
    category_id: 3,
    created_at: '2023-02-24T01:06:46.000000Z',
    updated_at: '2023-02-24T01:25:12.000000Z',
    category: {
      id: 3,
      slug: 'full-stack',
      name: 'Full Stack',
    },
    tags: [
      {
        id: 1,
        slug: 'react.js',
        name: 'React.js',
      },
      {
        id: 2,
        slug: 'node.js',
        name: 'Node.js',
      },
    ],
  },
  {
    id: 3,
    title: 'Movie App',
    slug: 'movie-app',
    excerpt:
      'This Movie App is a dynamic and user-friendly platform for movie lovers. The app uses the TMDB movie API to provide an extensive database of movies, sorted by popularity, top rated, upcoming and now playing. Users have the ability to search for movies based on title, and view detailed information about each movie, including the overview, release date, rating, and genre.',
    body: 'This Movie App is a dynamic and user-friendly platform for movie lovers. The app uses the TMDB movie API to provide an extensive database of movies, sorted by popularity, top rated, upcoming and now playing. Users have the ability to search for movies based on title, and view detailed information about each movie, including the overview, release date, rating, and genre.  One of the standout features of the React Movie App is the ability to add movies to a personal "favourites" or "watch later" list. These selections are stored in local storage, ensuring that users can access their favourite or watch later movies even after closing the web app. The addition and removal of movies to these lists is managed using Redux, providing a seamless user experience',
    url: 'https://yhkimmm.github.io/movie-app-react/',
    published_date: '2023-02-17',
    image: 'images/tmdb-movie-app.jpg',
    thumb: 'images/tmdb-movie-app.jpg',
    category_id: 2,
    created_at: '2023-02-24T01:09:42.000000Z',
    updated_at: '2023-02-24T01:26:05.000000Z',
    category: {
      id: 2,
      slug: 'front-end',
      name: 'Front End',
    },
    tags: [
      {
        id: 1,
        slug: 'react.js',
        name: 'React.js',
      },
    ],
  },
  {
    id: 4,
    title: 'Bank Account Management',
    slug: 'bank-account-management',
    excerpt:
      'This Bank Account Management app is a ASP.NET Core MVC project. It is a comprehensive solution for managing bank accounts. It allows users to create an account with a choice of different bank account types like savings, chequing, RESP, etc.',
    body: "This Bank Account Management app is a ASP.NET Core MVC project. It is a comprehensive solution for managing bank accounts. It allows users to create an account with a choice of different bank account types like savings, chequing, RESP, etc. The application also allows them to edit, delete, and view their bank accounts with the option to sort, search account type, and paginate the list. The database is managed using Microsoft SQL Server, and the application uses sessions to track the client's ID and name. This CRUD-based application offers robust and scalable functionality for managing bank accounts.  I have added Sendgrid to the user registration process to send a confirmation email. Additionally, I have implemented reCAPTCHA to prevent bot-generated accounts.",
    url: 'https://bankaccountmanagement.azurewebsites.net/',
    published_date: '2023-02-01',
    image: 'images/bank-account-management-app.jpg',
    thumb: 'images/bank-account-management-app.jpg',
    category_id: 3,
    created_at: '2023-02-24T01:10:41.000000Z',
    updated_at: '2023-02-24T01:26:20.000000Z',
    category: {
      id: 3,
      slug: 'full-stack',
      name: 'Full Stack',
    },
    tags: [
      {
        id: 5,
        slug: 'aspnet',
        name: 'ASP.NET',
      },
    ],
  },
  {
    id: 5,
    title: 'Tech Quest',
    slug: 'tech-quest',
    excerpt:
      'This is a full-stack web application that offers diverse interview questions with various question types for users to practice technical interview techniques and prepare for their upcoming interviews.',
    body: 'This is a full-stack web application that offers diverse interview questions with various question types for users to practice technical interview techniques and prepare for their upcoming interviews.  The application is built using the MERN stack (MongoDB, Express, React, Node.js) and uses Redux for state management. The application is deployed on Vercel and uses Next.js with Typescript. The application is designed to be a one-stop shop for technical interview preparation.',
    url: 'https://techquest-rk1h476hj-devofhockey.vercel.app/',
    published_date: '2023-03-10',
    image: 'images/tech-quest-app.png',
    thumb: 'images/tech-quest-app.png',
    category_id: 3,
    created_at: '2023-02-24T01:10:41.000000Z',
    updated_at: '2023-02-24T01:26:20.000000Z',
    category: {
      id: 3,
      slug: 'full-stack',
      name: 'Full Stack',
    },
    tags: [
      {
        id: 4,
        slug: 'next.js',
        name: 'Next.js',
      },
    ],
  },
  // Developed and designed a football manager app for avid football fans to manage their own league, team, player, and position using React, AWS services, and CocroachDB
  {
    id: 6,
    title: 'Football Manager',
    slug: 'football-manager',
    excerpt:
      'This is a full-stack web application using aws services and react. It is a comprehensive solution for managing football teams. It allows users to create an account with a choice of different football teams.',
    body: 'This is a full-stack web application using aws services and react. It is a comprehensive solution for managing football teams. It allows users to create an account with a choice of different football teams. The application also allows them to edit, delete, and view their football teams with allow user to set a captain for the team. The database is managed using CocroachDB, and this CRUD-based application offers robust and scalable functionality for managing football teams.',
    url: 'https://master.d13w4989r7v7a9.amplifyapp.com/',
    published_date: '2023-03-19',
    image: 'images/football-manager-app.png',
    thumb: 'images/football-manager-app.png',
    category_id: 3,
    created_at: '2023-02-24T01:10:41.000000Z',
    updated_at: '2023-02-24T01:26:20.000000Z',
    category: {
      id: 3,
      slug: 'full-stack',
      name: 'Full Stack',
    },
    tags: [
      {
        id: 1,
        slug: 'react.js',
        name: 'React.js',
      },
    ],
  },
];
