import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class Auth {
  constructor() {
    this.data = projects[8];
  }
  render() {
    return renderProject(this.data);
  }
}

export default Auth;
