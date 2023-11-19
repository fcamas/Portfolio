import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  const technologies = [
    {
      name: "Swift",
      icon: html,
    },
    {
      name: "XCode",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "IOS Developer Intern",
      company_name: "Hiker Weather ",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2020 - January 2021",
      points: [
        "Build new features using SwiftUI to improve user experience by a 30%",
        "Created new endpoints to app new features, using Firebase Database.",
        "Integrated interactive images onto the app's Mapbox map using its APIs",
      ],
    },

    {
      title: "IOS Developer Intern Lead",
      company_name: "Pantsuit Professinals",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - January 2022",
      points: [
        "Provided technical guidance, mentorship, and support to a team of up to six iOS development interns",
        "Designed and optimized 60% of the UI/UX flow to create advanced, intuitive and friendly user flows",
        "Integrated advanced architectural patterns into 60% of the codebase, enhancing both scalability and testability",
        "Assisted in project planning, including task estimation, feature breakdowns, and timeline management",
        "Conducted code reviews to ensure code quality and provide constructive feedback to team members",
      ],
    },
    {
      title: "IOS Developer ",
      company_name: "JPMorgan Chase and Co",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2022 - January 2023",
      points: [
        "Addressed 15-20 UI/UX and ADA defects per sprint in a fast-paced environment.",
        "Enhanced test coverage to reach 90% test coverage using the XCTest framework",
        "Collaborated proactively with cross-functional teams to optimize processes and provide real-time status updates on issues and defects",
      ],
    },
    
  ];

  const projects = [
      {
        name: "Greinvo",
        description:
          "Recyling calculator and invoce generator",
          "Created and uploaded a scalable app from scratch to the app store",
          "Developed wireframes, prototypes, and visual designs using Figma",
          "Designed and developed the interface for entering and calculating invoice amounts",
          "Implemented localization to support multiple languages",
          "Developed a React website for GreInvo to deliver updates and the latest releases information",

        tags: [
          {
            name: "SwiftUI",
            color: "blue-text-gradient",
          },
          {
            name: "Core Data",
            color: "green-text-gradient",
          },
          {
            name: "MVVM",
            color: "pink-text-gradient",
          },
        ],
        image: carrent,
        source_code_link: "https://github.com/fcamas",
      },
  ];
   
  