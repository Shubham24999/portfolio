import React, { useContext } from 'react'
import ProjectDetails from './ProjectDetails'
import "../App.css";
import { MyContext } from "../Context/ScreenSizeProvider";

const BlogList = [
  {
    isBlog: true,
    blogLink: "",
    title: "REST API with Java",
    description: "REST API Practice in Java Spring-boot, and Continue exploring and implementing.",
    techStack: "Java , Spring-boot",
    ghLink: "There will be",
    demoLink: "There will be",
    ytLink: "There will be"
  },
  {
    isBlog: true,
    blogLink: "",
    title: "REST API with Java",
    description: "REST API Practice in Java Spring-boot, and Continue exploring and implementing.",
    techStack: "Java , Spring-boot",
    ghLink: "There will be",
    demoLink: "There will be",
    ytLink: "There will be"
  }
];

const Blogs = () => {

  const { isMobile } = useContext(MyContext);

  return (
    <div >
      <div>
        <h1 className="projectHeading">
          My Blog's are...
        </h1>
        <div className={!isMobile ? "projects-detail" : "projects-detail-mobile"}
        >
          {
            BlogList.map((elm, ind) => <ProjectDetails key={ind} props={elm} />)

          }
        </div>
      </div>
    </div>
  )
}

export default Blogs