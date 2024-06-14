const resume = {
  data: {
    honorific: "Mohammed",
    firstName: "Salman",
    lastName: "Khan",
    photo: null,
    title: "Frontend Web Developer",
    location: "Dohar, Dhaka, Bangladesh",
    phone: "+8801601601108",
    email: "webdevz.sk@gmail.com",
    telephone: null,
    github: "https://github.com/webdevsk",
    linkedin: "https://linkedin.com/in/webdevsk",
    twitter: null,
    facebook: null,
    liveLink: "https://resume-webdevsk.vercel.app/",
    about:
      "I am a Frontend Web Developer skilled in creating interactable solutions and solving technical and design problems using React and Vanilla JS. I have more than 2 years of experience in creating pixel-perfect and mobile responsive Websites that meet client requirements. I debug design and functional issues with my intermediate knowledge of Dev Tools, Search Engines and ChatGPT.",
    skills: [
      {
        heading: "Frontend",
        data: [
          "Next JS 14",
          "React",
          "Redux",
          "JavaScript",
          "Tailwind",
          "Sass",
          "Vue JS",
          "CSS",
        ],
      },
      {
        heading: "Backend",
        data: [
          "Node JS",
          "Express JS",
          "Prisma",
          "MongoDB",
          "MySQL",
          "Serverless",
          "Restful API",
        ],
      },
      {
        heading: "Technologies",
        data: [
          "Git",
          "GitHub",
          "WordPress",
          "Adobe Xd",
          "Figma",
          "Google Search",
          "Chat GPT",
        ],
      },
    ],
    projects: [
      {
        enabled: true,
        title: "EzamMart Online Store",
        shortDescription:
          "Daily online sports shopping mall for all sports shoppers",
        link: "https://www.ezammart.com/",
        repo: "",
        builtWith: [
          "Next JS 14",
          "Tailwind",
          "App Router",
          "Server Side Rendering (SSR)",
          "SWR",
          "Server Actions",
          "Headless Ui",
          "Radix Ui",
          "Swiper",
          "React inner image zoom",
        ],
        features: [
          "Utilized Next.js 14's SSR to enhance SEO performance and loading times.",
          "State management using SearchParams and Cookies without state management libraries.",
          "Simplified data mutations with Server Actions for efficient state management.",
          "Implemented dynamic loading of large components for optimal site speed.",
          "Utilized my expertise in CSS to create custom layouts on top of headless UI and Radix.",
        ],
      },
      {
        enabled: true,
        title: "EzamMart Android App and Website",
        shortDescription:
          "Daily online sports shopping mall for all sports shoppers",
        link: "https://m.ezammart.com",
        repo: "",
        builtWith: ["Vue 2", "SASS", "Uni-App"],
        features: [
          "Utilized my expertise in JavaScript to implement new features and enhancements to the legacy codebase.",
          "Ensured introduced changes were compatible with Vue.js 2 architecture, minimizing disruptions.",
          "Effectively utilized Vue.js 2 lifecycle hooks to manage the application's state and behavior.",
          "Leveraged automated refactoring tools (ESLint, Prettier) to maintain code quality and best practices.",
        ],
      },
      {
        enabled: true,
        title: "Ezam Tech Solutions",
        shortDescription:
          "Ecommerce, Software, Web, and Erp System development and It Services Provider Company.",
        link: "https://www.ezam-tech.com/",
        repo: "",
        builtWith: [
          "Next JS 14",
          "Tailwind",
          "App Router",
          "Server Side Rendering (SSR)",
          "Swiper",
          "Framer Motion",
        ],
        features: [
          "Built a fully responsive website using Next.js 14 and Tailwind CSS.",
          "Implemented dynamic loading for large components to optimize site speed.",
          "Leveraged CSS expertise to create custom layouts with Headless UI and Radix.",
          "Integrated Framer Motion for smooth and responsive animations.",
          "Used Swiper.js to create smooth sliders for showcasing important information.",
        ],
      },
      {
        enabled: false,
        title: "BestBuy Clone",
        shortDescription: "BestBuy but built using React JS",
        link: "https://bestbuy-clone-d99b5f.netlify.app/",
        repo: "https://github.com/webdevsk/bestbuy-clone",
        builtWith: [
          "React",
          "React-Router",
          "TailwindCSS",
          "Redux Toolkit",
          "RTK Query",
          "Auth0",
          "Headlessui-float",
          "SwiperJS",
          "ExpressJS",
          "Prisma",
          "MongoDB",
          "React-toastify",
        ],
        features: [
          "User authentication using Auth0. Global State management using Redux Toolkit.",
          "Efficiently Fetch, Mutate, Cache Products and Cart api endpoints using RTK Query.",
          "Prisma library for seamless and efficient execution of Database operations.",
          "Optimistic Updates simulating Cart mutations. Rollback and Toast notify when fails.",
          "Custom built Sticky Header, Search box and Menu which changes layout device-wise.",
          "(More features to be added upon completion)",
        ],
      },

      {
        enabled: false,
        title: "React TODO App",
        shortDescription: "A TODO APP built with React JS",
        link: "https://celadon-cactus-42acbb.netlify.app/",
        repo: "https://github.com/webdevsk/react-todo-app",
        builtWith: [
          "React",
          "React-Router",
          "TailwindCSS",
          "Material-Tailwind UI",
        ],
        features: [
          "Create, mark, pin or delete tasks. Bulk check and remove completed tasks.",
          "Handheld device accessibility. Bottom input field improves reachability.",
          "Create dynamic categories either from within the app or from the browser URL directly",
          "Side Menu visibility state is dynamically managed based on device orientation and viewport",
        ],
      },
      {
        enabled: false,
        title: "Random Task Today",
        shortDescription:
          "Generate a random task to do today and see a refreshing photo related to it",
        link: "https://splendid-narwhal-4770fd.netlify.app/",
        repo: "https://github.com/webdevsk/Random-task-today",
        builtWith: ["React", "TailwindCSS", "Netlify Serverless Functions"],
        features: [
          "Fetches a random task from Bored API and then fetches a related photo from Unsplash API",
          "Preloading, loading, and status states are managed using asynchronous functions",
          "Implemented Netlify Serverless Functions (Lambda) to handle the backend.",
          "All API calls are made from the backend functions, keeping API credentials secret",
        ],
      },
      {
        enabled: false,
        title: "Costefficient",
        shortDescription:
          "Payment Processor Services (Client Project - Work in Progress)",
        link: "https://costefficient.co.uk/",
        repo: "https://costefficient.co.uk/",
        builtWith: [
          "WordPress",
          "Elementor Pro",
          "Elementor Flexbox",
          "JavaScript",
        ],
        features: [
          "6 pages WordPress website being built from scratch with Elementor Pro.",
          "Improve upon source website design using the latest Flex-box and Elementor Beta features.",
          "Elementor Form improved with custom logic using hand-written JavaScript script.",
        ],
      },
      {
        enabled: false,
        title: "Banco Pan",
        shortDescription: "Figma to HTML Convertion",
        link: "https://webdevsk.github.io/Banco-Pan/",
        repo: "https://github.com/webdevsk/Banco-Pan",
        builtWith: ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "Figma"],
        features: [
          "Completed client-requested Figma to HTML conversion",
          "Delivered 7 pages of responsive, pixel-perfect designs",
          "Overrode Bootstrap design using SASS",
          "Integrated JS libraries and custom Javascript scripts for interactive features",
        ],
      },

      // {
      //   title: null,
      //   shortDescription: null,
      //   link: null,
      //   repo: null,
      //   builtWith: [],
      //   features: [],
      // },
    ],
    experiences: [
      {
        enabled: true,
        position: "Jr. Frontend Web Developer",
        company: "Ezam Tech Solutions Int.",
        location: "Keraniganj, Dhaka, Bangladesh",
        dateFrom: "JAN 2024",
        dateTo: "Present",
        techStack: ["Next JS 14 (App Router)", "Tailwind CSS", "Redux Toolkit"],
        skills: [
          "Proficient in Next.js for building scalable server-side rendered applications.",
          "Proven ability to translate technical requirements into actionable development task.",
          "Effective communicator with experience in liaising between UI/UX teams and management.",
          "Demonstrated leadership as the lead developer, guiding project direction and team collaboration.",
          "Familiarity with e-commerce platform development, focusing on user experience and performance.",
          "Ability to adapt to changing requirements and prioritize tasks to meet tight deadlines.",
        ],
        responsibilities: [
          "Lead Frontend Dev developing the next big E-Commerce Store (https://www.ezammart.com).",
          "Lead Frontend Dev and maintainer of the company website (https://www.ezam-tech.com/).",
          "Direct communication with UI/UX designers and management to help achieve Company`s goal.",
        ],
      },
      {
        enabled: false,
        position:
          "E-commerce Operations Associate, Inventory Management Associate",
        company: "Wadi Groceries, Carrefour",
        location: "Riyadh, Saudiarabia",
        dateFrom: "APR 2018",
        dateTo: "MAR 2019",
        skills: [
          "Communication and Organizational skills",
          "Ability to work independently and as part of a team",
          "Attention to detail",
          "Problem-solving skills",
          "Technical skills (MS Excel, Ecommerce Dashboard)",
          "Ability to learn new technologies quickly",
        ],
        responsibilities: [
          "Pocessed on average 50-70 online orders each day accurately and efficiently",
          "Assembled and packaged orders for shipping",
          "Updated database using Excel and Ecommerce console to maintain inventory records",
          "Troubleshooted technical problems",
          "Thrived to stay up-to-date on the latest ecommerce technologies",
        ],
      },
      {
        enabled: false,
        position: "Freelance Food Delivery Driver",
        company: "",
        location: "",
        dateFrom: "JUNE 2019",
        dateTo: "OCT 2019",
        skills: ["Time management", "Customer service", "Communication"],
        responsibilities: [
          "Receive orders on phone",
          "Pick up and deliver food on time",
          "Maintain a clean and organized car",
          "Follow safety procedures",
          "Communicate with customers regarding order status",
        ],
      },
      {
        enabled: false,
        position: "Returns Processor",
        company: "JollyChik Warehouse SA",
        location: "Riyadh, Saudiarabia",
        dateFrom: "FEB 2018",
        dateTo: "APR 2018",
        skills: [
          "Attention to detail",
          "Accuracy",
          "Ability to work independently and as part of a team",
          "Technical skills (scanning, data entry)",
        ],
        responsibilities: [
          "Scanned returned items, updated inventory records (average of 700 items per day)",
          "Inspected returned items for damage",
          "Processed returns according to company policy",
          "Kept the warehouse clean and organized",
        ],
      },
      {
        enabled: false,
        position: "Flyer Distributor (Part time)",
        company: "Moneygram Financial Service",
        location: "Riyadh, Saudiarabia",
        dateFrom: "JUL 2017",
        dateTo: "FEB 2018",
        skills: [
          "Persuasion skills",
          "Communication skills (verbal and written)",
          "Interpersonal skills",
          "Flexibility",
        ],
        responsibilities: [
          "Distributed flyers to targeted areas generating on average of 150-200 leads per day.",
          "Built relationships with potential leads",
          "I convinced and persuaded leads into trying the company's services",
          "I had to maintain a positive attitude and demeanor to win over potential customers",
        ],
      },
    ],
    educations: [
      {
        title: "Self-taught MERN Stack Developer",
        institute: null,
        location: "Bangladesh",
        dateFrom: "2023",
        dateTo: "Present",
      },
      {
        title: "Fullstack Web Development",
        institute: "Shikhbe Shobai",
        location: "Bangladesh",
        dateFrom: "2020",
        dateTo: "2021",
      },
      {
        title: "Higher School Certificate",
        institute: "Bangladesh International School & College",
        location: "Saudiarabia",
        dateFrom: "2014",
        dateTo: "2015",
      },
      {
        title: "Secondary School Certificate",
        institute: "Bangladesh International School & College",
        location: "Saudiarabia",
        dateFrom: "2011",
        dateTo: "2013",
      },
      {
        title: "Junior School Certificate",
        institute: "Bangladesh International School & College",
        location: "Saudiarabia",
        dateFrom: "2009",
        dateTo: "2010",
      },
    ],
    spokenLanguages: [
      "English (Fluent)",
      "Bangla (Fluent)",
      "Hindi (Fluent)",
      "Urdu (Fluent)",
      "Arabic (Basic)",
    ],
    contributions: [
      {
        title: "Browser Scripts",
        description:
          "Enhance browsing experience or bypass website restrictions",
        projects: [
          {
            title: "FB Mobile - Clean my feeds",
            description:
              "Removes Sponsored and Suggested posts from m.facebook.com",
            url: "https://greasyfork.org/en/scripts/479868-fb-mobile-clean-my-feeds",
            installs: "260+",
          },
          {
            title: "TorrentBD - Easy mentioning in Shoutbox",
            description: "Easily Mention others in Chat/Shoutbox",
            url: "https://greasyfork.org/en/scripts/454697-torrentbd-easy-mentioning-in-shoutbox",
            installs: "640+",
          },
          {
            title:
              "TorrentBD - SeedBonus to Upload Credit Converter & Tab to Indent",
            description:
              "Take a quick look at how much Upload Credit you would have if converted your SeedBonus amount. Press Tab to indent instead of going to the next input field",
            url: "https://greasyfork.org/en/scripts/450815-torrentbd-seedbonus-to-upload-credit-converter-tab-to-indent",
            installs: "260+",
          },
          {
            title: "TorrentBD True Dark CSS - Github Theme",
            description:
              "Modifies TorrentBD to use Dark mode inspired by Github.",
            url: "https://greasyfork.org/en/scripts/430842-torrentbd-true-dark-css-github-theme",
            installs: "140+",
          },
          {
            title: "Quality filters - torrentgalaxy.to",
            description:
              "Removes poor encode/quality rips and highlights best ones",
            url: "https://greasyfork.org/en/scripts/471752-quality-filters-torrentgalaxy-to",
            installs: "120+",
          },
          {
            title: "Mobilism - Mobile Easy Searchbar",
            description:
              "Adds Search bar directly to the homepage on Mobile view",
            url: "https://greasyfork.org/en/scripts/462328-mobilism-mobile-easy-searchbar",
            installs: "60+",
          },
        ],
      },
    ],
  },
}

export default resume
