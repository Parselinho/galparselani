import image from "../../public/images/aqua3.png";
import image2 from "../../public/images/2311.png";
import image3 from "../../public/images/aqua1.png";
import image4 from "../../public/images/aqua2.png";
import image5 from "../../public/images/circle.png";
import image6 from "../../public/images/courses.png";
import image7 from "../../public/images/fsconf.png";
import image8 from "../../public/images/gallery.png";
import image9 from "../../public/images/weblogal.png";

class Home {
  constructor() {
    this.cardsData = [
      {
        title: "Web Blog",
        description: `In this project, I focused primarily on enhancing my JavaScript skills. While I did work with CSS and HTML, the CSS portion remains incomplete as my main objective was to refine my JavaScript expertise. I utilized Vanilla JavaScript, CSS, HTML, MongoDB (via Mongoose), and the Express framework. This was my initial full-stack project, undertaken after a considerable period of self-study and practice.`,
        url: "https://weblogal.com",
        href: "#/weblogal",
        image: image,
      },
      {
        title: "Courses List",
        description: `In this project, I focused primarily on enchancing my React skills. While i also did work with Bootstrap, again the CSS part wasnt the main part of the project, but the react. I utilized React, css-Bootstrap, Express framework, Sequelize, SQLite3. this was my initial React Full Stack Project, undertaken after a considerable period of self-study practice. `,
        url: "https://react2.online",
        href: "#/courses",
        image: image2,
      },
      {
        title: "Employees API",
        description: `This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students. It is a quintessential example of dynamic and responsive design, employing the foundational trio of web development: HTML, CSS, and JavaScript, to create a seamless user experience.`,
        url: "https://parselinho.github.io/employees/",
        href: "#/employees",
        image: image3,
      },
      {
        title: "FSConference",
        description: `This project showcases a comprehensive registration form for a Full Stack Conference, where I honed my skills in creating dynamic and interactive web forms. The core of the project lies in JavaScript's interactivity and form validation logic, alongside building a responsive layout using CSS. Key technologies include HTML CSS and JavaScript.`,
        url: "https://parselinho.github.io/FSConference/",
        href: "#/fsconference",
        image: image4,
      },
      {
        title: "Phrase",
        description: `In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.`,
        url: "https://parselinho.github.io/Phrase-Hunter/",
        href: "#/phrase-hunter",
        image: image5,
      },
      {
        title: "Circle",
        description: `In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies.`,
        url: "https://parselinho.github.io/circleProject/",
        href: "#/circle",
        image: image6,
      },
      {
        title: "Gallery",
        description: `A visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption.`,
        url: "https://parselinho.github.io/galleryProject/",
        href: "#/gallery",
        image: image7,
      },
      {
        title: "WebApp",
        description: `The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics.`,
        url: "https://parselinho.github.io/webApp/",
        href: "#/webapp",
        image: image8,
      },
      {
        title: "Auth Library",
        description: `AuthenticRealm is a comprehensive solution for handling user authentication and authorization in Node.js applications. It simplifies the process of implementing user registration, login, email verification, password reset, and role-based access control, making it ideal for rapid development.`,
        url: "https://www.npmjs.com/package/authenticrealm",
        href: "#/auth-library",
        image: image9,
      },
    ];
  }

  createCard(card) {
    return `
      <li class="card">
        <img src="${card.image}" alt='description' loading="lazy"/>
        <div class='cardContainer'>
          <h2>${card.title}</h2>
          <p>${card.description}</p>
          <div class="cardLinks">
          <a href="${card.href}" title="navigate to the project page">More Info</a>
          <a href='${card.url}' target='_blank' rel="noopener" title="navigate to the project website">Visit Website</a>
          <div>
        </div>
      </li>
    `;
  }

  setCardData() {
    return this.cardsData.map(this.createCard).join("");
  }

  render() {
    return `
    <div class="homeContainer">
    <h2>Home Page</h2>
    <div class="homeDiv">
    <p>In my professional journey, Experienced in Sales Operations and CRM analysis, I excel in optimizing CRM and lead management systems within the tech industry, enhancing efficiency and sales conversion rates. Alongside my professional role, I've pursued a passion for full-stack development over the past 1.5 years, enriching my technical and problem-solving skills. This unique combination of strategic CRM management, sales operations expertise, and technical proficiency drives my approach to creating innovative solutions in fast-paced environments.</p>
    <aside>
          <p>
            <b>**</b> I'd like to extend my gratitude to
            <a
              href="https://www.youtube.com/@DaveGrayTeachesCode"
              target="_blank"
              rel="noopener"
              title="visit dave youtube channel"
              >Dave Gray</a
            >
            for his youtube video about css, that helped me style this project.
          </p>
        </aside>  
      </div>

    </div>

      <ul class="ul">${this.setCardData()}  </ul>

      `;
  }
}
export default Home;
