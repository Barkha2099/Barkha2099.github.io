const settings = {
  isSplash: false,
};

const seo = {
  title: "Barkha's Portfolio",
  description:
    "A self-motivated and hard worker Engineer with a great passion for programming and coding. I am a creative front end developer who like making beautiful and smart things through coding.",
  og: {
    title: "Barkha Pawar's Portfolio",
    type: "website",
    url: "https://github.com/Barkha2099/Barkha_Portfolio",
  },
};

//Home Page
const greeting = {
  title: "Barkha Pawar",
  logo_name: "Barkha Pawar",

  subTitle:
    "A self-motivated and hard worker Engineer with a great passion for programming and coding. I am a creative software engineer and front end developer who like making beautiful and smart things through coding.",
  resumeLink:
    "https://drive.google.com/file/d/1jK6aTRdW7_HKUQm9JKURGV30BWg5VTGa/view?usp=sharing",
  portfolio_repository: "https://github.com/Barkha2099/Barkha2099.github.io",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Barkha2099/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/barkha-pawar-773514211/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:barkhapawar2099@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://instagram.com/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing Web applications using HTML, CSS, JavaScript and Reactjs",
        "⚡ Creating application backend in Node, MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            backgroundColor: "transparent",
            color: "#0868ac",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "transparent",
            color: "#F1502F",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            backgroundColor: "transparent",
            color: "#211F1F",
          },
        },
        // {
        //   skillName: "Express.js",
        //   fontAwesomeClassname: "simple-icons:express",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#211F1F",
        //   },
        // },

        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable production ready models.",
        "⚡ Experience of working with C, C++, Java and Python",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#234FC7",
          },
        },

        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Basic working of cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#234FC7",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Qwiklabs",
      iconifyClassname: "simple-icons:qwiklabs",
      style: {
        color: "#FCD12A",
      },
      profileLink:
        "https://www.cloudskillsboost.google/public_profiles/235c6226-5563-463b-a4f0-2735a2debbb6",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0000CD",
      },
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "black",
      },
    },
    {
      siteName: "Linkdin-Learning",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rungta College Of Engineering and Technology Bhilai",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "r1.png",
      alt_name: "RCET BHILAI",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied Bachelor of Technology In Computer Science and Engineering.",
        "⚡ Also have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, CG etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development, Basic Data Science and Basic Cloud Computing.",
      ],
      website_link: "https://www.rungta.ac.in/",
    },
    {
      title: "Senior Secondary Sector-07 Bhilai",
      subtitle: "12th - Physics Chemistry Maths with Engineering Graphics.",
      logo_path: "Steel_Authority_of_India_logo.jpg",
      alt_name: "SSS7",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ I have studied Physics Chemistry Maths with Engineering graphics in 12th",
        "⚡ Apart from this, I have done courses on Basic Python Programming.",
      ],
      website_link:
        "https://school.careers360.com/schools/bsp-senior-secondary-school-sector-7-bhilai-nagar-bhilai-nagar",
    },
    {
      title: "Senior Secondary Sector-07 Bhilai",
      subtitle: "10th",
      logo_path: "Steel_Authority_of_India_logo.jpg",
      alt_name: "SSS7",
      duration: "2015 - 2016",
      descriptions: [
        "⚡ I have studied CBSE affiliation Class 10th.",
        "⚡ Apart from this, I have studied HTML, Basic CSS, JavaScript.",
      ],
      website_link:
        "https://school.careers360.com/schools/bsp-senior-secondary-school-sector-7-bhilai-nagar-bhilai-nagar",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Design",
      subtitle: "- University of Michigan",
      logo_path: "uom_logo.png",
      certificate_link:
        "https://coursera.org/share/da0eacf52c37759cfc13981a9ee6f4dc",
      alt_name: "University of Michigan",
      color_code: "#4169E1",
    },
    {
      title: "Python",
      subtitle: "- Hamza Sarih",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-cfa63f17-5ddf-4fa8-9480-0752cd97d114/",
      alt_name: "python",
      color_code: "#28282B",
    },

    {
      title: "Google Cloud Training",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/235c6226-5563-463b-a4f0-2735a2debbb6",
      alt_name: "GCP",
      color_code: "#4285F499",
    },

    {
      title: "C++ Programming",
      subtitle: "- Lernen Hub Academy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8b8c4899-becd-409a-b712-2cfb2f473d65/",
      alt_name: "udemy",
      color_code: "#28282B",
    },
    {
      title: "JavaScript Essential",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_learning_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/01b0b9ad36a2d1c539db0f68fe574ec3984c57d6d74d9a8ba661738e3f2cfca3?trk=share_certificate",
      alt_name: "Linkedin",
      color_code: "white",
    },
    {
      title: "C for Everyone",
      subtitle: "- University of California, Santa Cruz",
      logo_path: "UCSC-logo.jpg",
      certificate_link:
        "https://coursera.org/share/cd72348fe475a67b42527364bbbb4dd3",
      alt_name: "UCSC",
      color_code: "white",
    },
    {
      title: "Java",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_learning_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/21f0c2367e58a95562c458123fba91911a0025ebf92b82a5bcd784131e82f51e?trk=share_certificate",
      alt_name: "Linkedin",
      color_code: "white",
    },
    {
      title: "Java",
      subtitle: "- LearnQuest",
      logo_path: "coursera.png",
      certificate_link:
        "https://coursera.org/share/9f82c128fb09a999146cd11be759dabe",
      alt_name: "LearnQuest",
      color_code: "white",
    },
    {
      title: "HTML, CSS, & JavaScript",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2c86292a-d3eb-4309-9548-e2a8cfdf5ec4/",
      alt_name: "udemy",
      color_code: "#28282B",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "Wipro Technologies",
          logo_path: "Wipro-logo.png",
          duration: "March 2022 - June 2022",
          location: "Work From Home",
          description:
            "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. It offered a three month internship where we learned Java programming and worked on a project where they asked us to create a responsive webpage showing data from different areas of the country affected due to covid-19 panedemic, using API and other functions. And after successfull completion of internship and project they provide us a Internship Completion Certificate.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Vacational Trainee",
          company: "SAIL Bhilai Steel Plant",
          company_url: "https://www.sail-bhilaisteel.com/",
          logo_path: "Steel_Authority_of_India_logo.jpg",
          duration: "January 2021 - February 2021",
          location: "Bhilai, Chhattisgarh",
          description:
            "I designed a Voluntary Retirement Scheme (VRS) Calculator with Login/Signup Page for the employees about to retire, so that they can calculate there respective pension against there profile, consisting there joining date and other details.",
          color: "#0879bf",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Cloud Ready",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "April 2021 - June 2021",
          location: "Work From Home",
          description:
            "Google Cloud Ready is a Google-sponsored program for university students to get started with Google Cloud. The curriculum offers 4 Milestones of Google Cloud (Beginner, Intermediate, Advanced, Ultimate) and relies on university student to train and use cloud computing.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Front-End projects and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Profile_b.png",
    description:
      "Feel free to drop an email if you have any project or any oppurtunity in mind or just want to chat! Say Hello at:.",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle: "Visit My LinkedIn Profile",
    link: "https://www.linkedin.com/in/barkha-pawar-773514211/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sector-06, Bhilai, Dist.-Durg, Chhattisgarh - 490006",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/5oToYA7GEzRG9kqo8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
