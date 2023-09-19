import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faBlog, faBriefcase, faContactCard, faHome, faInfo } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
export const iconOptions = {
  Null: null,
  Moon: faMoon,
  Sun: faSun,
};

export const themeOptions = {
  Moon: faMoon,
  Sun: faSun,
};

export const optionsSort = [
  { label: 'Title', value: 'title' },
  { label: 'Year', value: 'year' },
  { label: 'ID', value: 'id' },
];

export const links = [
  {
    link: 'https://discordapp.com/users/613024264706064390',
    id: 1,
    icon: faDiscord,
  },
  {
    title: 'telegram',
    link: 'https://t.me/sekk_er',
    id: 2,
    icon: faTelegram,
  },
  {
    link: 'https://www.instagram.com/sekk_er/',
    id: 2,
    icon: faInstagram,
  },
  {
    link: 'https://twitter.com/AleksandrSekker',
    id: 3,
    icon: faTwitter,
  },
  {
    link: 'https://www.linkedin.com/in/aleksandr-sekker-521352161/',
    id: 4,
    icon: faLinkedin,
  },
  {
    link: 'github.com/AleksandrSekker',
    id: 5,
    icon: faGithub,
  },
];


export const tableHeaders = ['ID', 'Name', 'Price', 'Stock', ]; // Example table headers
export const tableData = [
  {
    ID: 1,
    Name: 'Product A',
    Price: 25.99,
    Stock: 50,
  },
  {
    ID: 2,
    Name: 'Product B',
    Price: 19.99,
    Stock: 30,
  },
  {
    ID: 3,
    Name: 'Product C',
    Price: 34.99,
    Stock: 20,
  },
];

export const routes = [
  { title: "Home", link: "/", icon: faHome, id: 1 },
  { title: "About", link: "/about", icon: faInfo, id: 2 },
  { title: "Projects", link: "/projects", icon: faBriefcase, id: 3 },
  { title: "Skills", link: "/skills", icon: faBlog, id: 4 },
  { title: "Contact", link: "/contact", icon: faContactCard, id: 5 },
  // { title: "Blog", link: "/blog", icon: faBlog, id: 6 },
];
