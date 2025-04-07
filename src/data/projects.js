import tour from "../../public/images/projects/tour&trawel.png";
import todo from "../../public/images/projects/todo app.png";
import weather from "../../public/images/projects/weather app.png";

export const projects = [
  {
    project_id: 1,
    project_img: tour,
    project_title: "Tour & Trawel",
    project_desc:
      "A web-based Tour and Travel Management System designed to help users explore, book, and manage travel packages  , transportation, accommodations, and activities.",
    tech_stacks: ["HTML", "CSS", "JSVASCRIPT"],
  },
  {
    project_id: 2,
    project_img: todo,
    project_title: "ToDo App",
    project_desc:
      "A task management app to add, edit, delete and mark tasks as completed using local storage.",
    tech_stacks: ["HTML", "CSS", "REACT"],
  },
  {
    project_id: 3,
    project_img: weather,
    project_title: "Weather App",
    project_desc:
      "A real-time weather application using OpenWeatherMap API to check current weather by city.",
    tech_stacks: ["HTML", "BOOTSTRAP", "API"],
  },
];
