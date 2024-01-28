import { Component, OnInit } from '@angular/core';
import { Project } from './project-modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent  implements OnInit {
  projects: Project[] = [
    {
      title: "Arrivee",
      description: "An app that reminds you to do the things when you are near a location you've set.",
      technologies: ["angular", "ionic", "c-sharp", "aws"],
      githubLink: "https://github.com/Anirud2002/Arrivee",
      link: "https://testflight.apple.com/join/Jr8SZOcO",
      bgColor: "#408e91",
    },
    {
      title: "Bottom Line Estimator",
      description: "New revamped version of BLE which lets students to calculate their cost-of-attendance in BSU.",
      technologies: ["angular", "ionic", "c-sharp", "aws"],
      link: "https://estimator.boisestate.edu",
      associatedWith: "Boise State University",
      bgColor: "#408e91"
    },
    {
      title: "Assignment Calculator",
      description: "New BSU App that gives resources on a particular type of assignment to the students and help them get done by the due date.",
      technologies: ["angular", "ionic", "c-sharp", "aws"],
      link: "https://assignment-calculator.boisestate.edu/home",
      associatedWith: "Boise State University",
      bgColor: "#408e91"
    },
    {
      title: "TimeToFocus",
      description: "An study timer app which follows pomodoro techinique and has different configurations.",
      technologies: ["react", "mongoDB", "node", "express"],
      githubLink: "https://github.com/Anirud2002/timetofocus",
      link: "https://time-to-focus.netlify.app/",
      bgColor: "#DB524D"
    },
    {
      title: "Weather App",
      description: "A weather app that uses the Open Weather API to get the weather for cities.",
      technologies: ["react", "mongoDB", "node", "express"],
      link: "https://65b5a0a14d919af804bf5451--anirudweatherapp.netlify.app/",
      bgColor: "#00538B"
    },
  ]
  constructor() { }

  ngOnInit() {}

}
