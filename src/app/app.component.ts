import { Component } from '@angular/core';

export class TimeOfDate {
  date: Date = new Date();

  constructor() {
    const date = new Date();

    return { date: date };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    this.currentFilter = null;
  }

  date: Date = new TimeOfDate().date;
  author = 'Brayden';
  title = 'Portfolio-Brayden';
  public projects: Project[] = PROJECTS;
  public categories: Category[] = CATEGORIES;
  public tags: Tag[] = TAGS;
  public currentFilter: Category | Tag | null;

  setCategoryFilter(category: Category) {
    this.projects = PROJECTS.filter((project) => {
      return project.category_id === category.id;
    });
    this.currentFilter = category;
    console.log(this.projects);
    console.log(this.currentFilter);
  }

  setTagFilter(tag: Tag) {
    this.projects = PROJECTS.filter((project) => {
      return project.tags?.find((t) => t.id === tag.id);
    });
    this.currentFilter = tag;

    console.log(this.projects);
  }

  clearFilters() {
    this.projects = PROJECTS;
    this.currentFilter = null;
  }
}

export class Category {
  id!: number;
  name!: string;
  slug!: string;
}
const CATEGORIES: Category[] = [
  {
    id: 1,
    slug: 'back-end',
    name: 'Back End',
  },
  {
    id: 2,
    slug: 'front-end',
    name: 'Front End',
  },
  {
    id: 3,
    slug: 'full-stack',
    name: 'Full Stack',
  },
  {
    id: 4,
    slug: 'database',
    name: 'Database',
  },
];

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

const TAGS: Tag[] = [
  {
    id: 1,
    slug: 'react',
    name: 'React',
  },
  {
    id: 2,
    slug: 'node.js',
    name: 'Node.js',
  },
  {
    id: 3,
    slug: 'laravel',
    name: 'Laravel',
  },
  {
    id: 4,
    slug: 'devops',
    name: 'Devops',
  },
  {
    id: 5,
    slug: 'aspnet',
    name: 'ASP.NET',
  },
];

export class Project {
  'id': number;
  'title': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
  'tags': Tag[] | undefined;
}

const PROJECTS: Project[] = [
  {
    id: 7,
    title: 'Android App',
    slug: 'android-app',
    excerpt:
      'Et voluptatibus omnis est similique sequi reiciendis commodi est. Magnam et quia atque blanditiis doloremque.',
    body: '<p>Et sapiente sed eius est maiores est. Nobis architecto itaque saepe sint distinctio. Eos fuga in alias provident harum. Aliquam aliquam autem et repellat tempora.</p></p>Consectetur ut accusantium architecto eligendi doloribus eveniet voluptatibus. Facilis quod illo tempore suscipit. Error eius velit voluptas et repudiandae est consequatur.</p></p>Totam quis quo cum quibusdam officia blanditiis. Sint officiis eos quia voluptatem eos magnam. Id ratione fugit ea quam.</p>',
    url: null,
    published_date: null,
    image: null,
    thumb: null,
    category_id: null,
    created_at: '2023-02-23T18:23:08.000000Z',
    updated_at: '2023-02-23T18:23:08.000000Z',
    category: null,
    tags: [],
  },
  {
    id: 8,
    title: 'Industry Project',
    slug: 'industry-project',
    excerpt:
      'Aut dolores aut blanditiis nam. Tempora explicabo eius amet temporibus.',
    body: '<p>Dolor explicabo molestiae quam iste debitis magnam voluptatem tempore. Ab consequatur alias ut fugiat. Pariatur laudantium possimus fugiat eos voluptas ipsa nisi explicabo.</p></p>Repellat rem architecto corrupti est. Et molestiae iste molestiae nulla dicta. Adipisci alias enim eum qui saepe tempore. Dolorem quo doloremque quo corrupti numquam. Cumque ut nesciunt vel id.</p></p>Qui ut numquam maiores nobis. Aut saepe voluptatibus omnis id. Sint velit quis incidunt non voluptatem. Dolorem sed quis et nobis asperiores fugiat.</p></p>Consequatur ab atque repellendus aut aut odit. Id omnis doloribus repellendus consequatur quis eligendi eius. Illum molestias similique tempora nulla eius laborum.</p></p>Totam voluptatem eos dolorum iste. Libero sunt inventore ex aspernatur dolore aliquid iure. Omnis esse aut reiciendis adipisci. Voluptatum enim voluptatibus sequi.</p></p>Accusantium recusandae commodi qui dolorem repellendus eos ut et. Ea nobis ut esse iure. Velit aliquam quidem tempora occaecati ut. Sunt quia dolores ab esse beatae. Dolore tempora cumque aspernatur aliquam.</p>',
    url: null,
    published_date: null,
    image: null,
    thumb: null,
    category_id: 3,
    created_at: '2023-02-23T18:23:08.000000Z',
    updated_at: '2023-02-23T18:23:08.000000Z',
    category: {
      id: 3,
      slug: 'full-stack',
      name: 'Full Stack',
    },
    tags: [],
  },
  {
    id: 9,
    title: 'Fake Project',
    slug: 'fake-project',
    excerpt: 'Fake Project',
    body: 'Quaerat veritatis aut dolores ratione ad. Voluptatem architecto et nisi voluptate.',
    url: 'http://fakeproejcturl.com',
    published_date: '2023-02-23',
    image: 'images/showcaseimage.png',
    thumb: 'images/ShowcaseThumb (1).png',
    category_id: 1,
    created_at: '2023-02-23T18:24:37.000000Z',
    updated_at: '2023-02-23T18:24:37.000000Z',
    category: {
      id: 1,
      slug: 'back-end',
      name: 'Back End',
    },
    tags: [],
  },
  {
    id: 13,
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
        slug: 'react',
        name: 'React',
        pivot: {
          projects_id: 13,
          tags_id: 1,
        },
      },
      {
        id: 2,
        slug: 'node.js',
        name: 'Node.js',
        pivot: {
          projects_id: 13,
          tags_id: 2,
        },
      },
    ],
  },
  {
    id: 14,
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
        slug: 'react',
        name: 'React',
        pivot: {
          projects_id: 14,
          tags_id: 1,
        },
      },
      {
        id: 2,
        slug: 'node.js',
        name: 'Node.js',
        pivot: {
          projects_id: 14,
          tags_id: 2,
        },
      },
    ],
  },
  {
    id: 15,
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
        slug: 'react',
        name: 'React',
        pivot: {
          projects_id: 15,
          tags_id: 1,
        },
      },
    ],
  },
  {
    id: 16,
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
        pivot: {
          projects_id: 16,
          tags_id: 5,
        },
      },
    ],
  },
];
