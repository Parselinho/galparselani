import NotFound from "../src/components/404.js";
import About from "../src/components/About.js";
import Home from "../src/components/Home.js";
import Resume from "../src/components/Resume.js";

import Weblogal from "../src/components/projects/Weblogal.js";
import Courses from "../src/components/projects/Courses.js";
import Employees from "../src/components/projects/Employees.js";
import Fsconference from "../src/components/projects/Fsconference.js";
import PhraseHunter from "../src/components/projects/Phrase.js";
import Circle from "../src/components/projects/Circle.js";
import Gallery from "../src/components/projects/Gallery.js";
import WebApp from "../src/components/projects/Webapp.js";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  document.addEventListener("click", handleNavClick);
  window.addEventListener("hashchange", handleHashChange); // Listen for hash changes
  handleHashChange(); // Manually trigger routing on page load
}

// function handleNavClick(e) {
//   const { target } = e;
//   if (target.matches("nav a")) {
//     e.preventDefault();
//     const href = target.getAttribute("href");
//     if (href) {
//       // Update the hash based on the href
//       window.location.hash = href;
//     }
//   }
// }

function handleNavClick(e) {
  const { target } = e;
  if (target.matches("nav a")) {
    const href = target.getAttribute("href");

    // Check if the link is external
    if (href.startsWith("http://") || href.startsWith("https://")) {
      // It's an external link, so let the browser handle it normally
      return;
    }

    // It's an internal link, so handle it with custom logic
    e.preventDefault();
    if (href) {
      window.location.hash = href;
    }
  }
}

const pages = {
  404: NotFound,
  "#/": Home,
  "#/about": About,
  "#/resume": Resume,
  "#/weblogal": Weblogal,
  "#/courses": Courses,
  "#/employees": Employees,
  "#/fsconference": Fsconference,
  "#/phrase-hunter": PhraseHunter,
  "#/circle": Circle,
  "#/gallery": Gallery,
  "#/webapp": WebApp,
};

function handleHashChange() {
  const hash = window.location.hash;
  const route = hash || "#/"; // Default to "#/" if no hash
  const PageClass = pages[route] || pages["404"];
  const pageInstance = new PageClass();
  document.getElementById("content").innerHTML = pageInstance.render();
}

export default {
  initApp,
  routeLocation: handleHashChange,
  handleNavClick,
  handlePopState: handleHashChange,
};
