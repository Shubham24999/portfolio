import React, { useContext } from "react";
import ProjectDetails from "./ProjectDetails";
import "../App.css";
import { MyContext } from "../Context/ScreenSizeProvider";


const projectList = [
  {
    isBlog: false,
    blogLink: "",
    title: "REST API with Java",
    description: "REST API Practice in Java Spring-boot, and Continue exploring and implementing.",
    techStack: "Java , Spring-boot",
    ghLink: "There will be",
    demoLink: "There will be",
    ytLink: "There will be"
  },
  {
    isBlog: false,
    blogLink: "",
    title: "Jaan Pahchan Static Website",
    description: "Made A Simple Website for Practice in React.js and Material UI.",
    techStack: "React JS , Material UI",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://material-ui-pratice-with-reactjs.netlify.app/",
    ytLink: "There will be"
  },
  {
    isBlog: false,
    blogLink: "",
    title: "Khana Khazana",
    description: "Made A Simple Website for Practice in HTML, CSS and JavaScript.",
    techStack: "",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/",
    ytLink: ""
  },
  {
    isBlog: false,
    blogLink: "",
    title: "The Car Guys",
    description: "A Collaborative Website for Practice in HTML, CSS and JavaScript.",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/",
    ytLink: "",
    techStack: "",

  },
  {
    isBlog: false,
    blogLink: "",
    title: "Sahaj Shopping",
    description: "Made A Simple Website for Practice in React.js.",
    techStack: "Node JS, Express and MongoDB",
    ghLink: "There will be",
    demoLink: "There will be",
    ytLink: ""

  }
]

function Projects() {

  const { isMobile } = useContext(MyContext);

  return (
    <div >
      <div>
        <h1 className="projectHeading">
          My Recent Works...
        </h1>
        <p>
          Here are a few projects I've worked on recently.
        </p>

        <div className={!isMobile ? "projects-detail" : "projects-detail-mobile"}
        >
          {
            projectList.map((elm, ind) => <ProjectDetails key={ind} props={elm} />)

          }
        </div>
      </div>
    </div>
  );
}

export default Projects;