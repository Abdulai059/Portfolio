export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },

      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },


  {
    id: 3,
    title: "TurtleCodes",
    description:
      "A modern SaaS platform that empowers developers and businesses to build and automate intelligent AI workflows with ease.",
    subDescription: [
      "Architected a modular SaaS platform designed for seamless AI workflow automation and scalability.",
      "Integrated multiple APIs and AI models to optimize data processing, automation, and decision-making.",
      "Developed a secure and scalable backend using Node.js and Express with robust RESTful endpoints.",
      "Implemented a sleek, modern React frontend with TailwindCSS for an intuitive, responsive user experience.",
    ],
    href: "https://turtlcodes.com", // or GitHub link if not yet live
    logo: "/assets/logos/turtlecodes.svg",
    image: "/assets/projects/turtlecodes.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 3,
        name: "AI/ML",
        path: "/assets/logos/voiceflow.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },

{
  id: 2,
  title: "LtechHomes Website",
  description:
    "A responsive real-estate website built with HTML, CSS, JavaScript and PHP — featuring property listings, search & filters, contact forms and a simple admin panel for managing listings.",
  subDescription: [
    "Built a dynamic PHP + MySQL backend to manage property listings, agents, and inquiries.",
    "Implemented responsive, mobile-first UI with CSS and lightweight JavaScript for filtering, galleries and pagination.",
    "Created a secure contact & lead capture flow with server-side validation and email notifications.",
    "Delivered an admin dashboard for listing CRUD, image uploads, and content management.",
  ],
  href: "https://ltechhomes.example.com", // update to live URL or GitHub repo
  logo: "/assets/logos/ltechhomes.svg",
  image: "/assets/projects/LtechHomes.png",
  tags: [
    { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
    { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
    { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    { id: 4, name: "PHP", path: "/assets/logos/php.svg" },
    { id: 5, name: "MySQL", path: "/assets/logos/mysql.png" }
  ],
},


  {
    id: 4,
    title: "Bop-Attack Game",
    description:
      "A fun and interactive Whac-A-Mole-style browser game built using HTML, CSS, and JavaScript.",
    subDescription: [
      "Developed engaging game mechanics with JavaScript and DOM manipulation.",
      "Implemented score tracking, timer, and random mole pop-up logic.",
      "Designed responsive visuals and animations for smooth gameplay on all devices.",
      "Optimized performance for fast, lag-free user interactions.",
    ],
    href: "https://bopattack.netlify.app",
    logo: "/assets/logos/js.svg",
    image: "/assets/projects/Bop-attack.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "GitHub",
        path: "/assets/logos/github.svg",
      },
    ],
  },

  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    job: "Freelance Projects",
    date: "2025",
    contents: [
      "Built responsive and high-performance web apps using React, Tailwind CSS, and modern JavaScript.",
      "Integrated authentication and databases with Supabase and Auth0.",
      "Worked closely with clients to deliver tailored digital solutions.",
      "Optimized applications for speed, SEO, and cross-browser compatibility.",
      "Used Git and GitHub for version control and efficient project management.",
    ],
  },
  {
    title: "Web Developer",
    job: "Self-Employed",
    date: "2024",
    contents: [
      "Advanced from core web development to dynamic React-based applications.",
      "Developed full-stack projects connecting frontends with APIs and backend services.",
      "Created interactive and responsive interfaces using JavaScript and CSS frameworks.",
      "Ensured accessibility and performance across multiple devices.",
      "Expanded technical expertise through hands-on projects and continuous learning.",
    ],
  },
  {
    title: "Web Developer",
    job: "Independent Projects",
    date: "2023",
    contents: [
      "Started building web projects using HTML, CSS, and JavaScript.",
      "Explored React and Vite to understand modern development environments.",
      "Designed and styled responsive layouts with Tailwind CSS.",
      "Integrated Supabase for real-time features and authentication.",
      "Built foundational coding skills through consistent self-learning and experimentation.",
    ],
  },
];

export const reviews = [
  {
    name: "Kojo Mensah",
    username: "@kojomensah",
    body: "The animations and responsiveness are top-notch. You can tell he has both technical skill and design sense.",
    img: "https://robohash.org/kojomensah",
  },
  {
    name: "Ltechhmes",
    username: "@ltechhmes",
    body: "Working with Abdulai was an incredible experience. He built our company website from the ground up fast, modern, and user-friendly. The final product exceeded our expectations!",
    img: "https://robohash.org/ltechhmes",
  },

  {
    name: "Michael Owusu",
    username: "@mowusu",
    body: "Abdulai’s work speaks for itself sleek design, fast performance, and attention to every detail. A truly impressive portfolio!",
    img: "https://robohash.org/mowusu",
  },
  {
    name: "Abigail Darko",
    username: "@abigaildarko",
    body: "I came across the Ltechhmes website and was amazed by how seamless the experience was. Clear proof of Abdulai’s excellent work.",
    img: "https://robohash.org/abigaildarko",
  },
  {
    name: "Kojo Mensah",
    username: "@kojomensah",
    body: "The animations and responsiveness are top-notch. You can tell he has both technical skill and design sense.",
    img: "https://robohash.org/kojomensah",
  },

  // {
  //   name: "Charlie",
  //   username: "@charlie",
  //   body: "This exceeded all my expectations. Absolutely stunning!",
  //   img: "https://robohash.org/charlie",
  // },
  // {
  //   name: "Dave",
  //   username: "@dave",
  //   body: "Simply breathtaking. The best decision I've made in a while.",
  //   img: "https://robohash.org/dave",
  // },
  // {
  //   name: "Eve",
  //   username: "@eve",
  //   body: "So glad I found this. It has changed the game for me.",
  //   img: "https://robohash.org/eve",
  // },
];
