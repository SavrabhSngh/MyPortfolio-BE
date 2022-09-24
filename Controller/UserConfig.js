const config = {
    header: {
        'name': 'Savrabh R Singh',
        'resume': './resume.pdf'
    },
    about: {
        'name': 'Savrabh Singh',
        'description 1': '',
        'description 2': ''
    },
    features: [
        {
          id: 1,
          image:
            "https://img.icons8.com/fluency-systems-regular/64/000000/retro-tv.png",
          title: "Web Development",
          desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          id: 2,
          image: "https://img.icons8.com/material-outlined/64/000000/topic--v1.png",
          title: "Mobile App",
          desc: "There are many variations of passages of Lorem Ipsum	available, but the majority.",
        },
        {
          id: 3,
          image: "https://img.icons8.com/ios/40/000000/open-book.png",
          title: "App Development",
          desc: " It uses a dictionary of over 200 Latin words, combined witha handful of model sentence.",
        },
        {
          id: 4,
          image: "https://img.icons8.com/ios/64/000000/menu.png",
          title: "Business Stratagy",
          desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          id: 5,
          image: "https://img.icons8.com/ios-filled/64/000000/wifi.png",
          title: "CEO Marketing",
          desc: "always free from repetition, injected humour, or non-characteristic words etc.",
        },
        {
          id: 6,
          image: "https://img.icons8.com/glyph-neue/50/000000/polyline.png",
          title: "Personal Portfolio April",
          desc: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
        },
      ],
    projects: [
        {
          id: 1,
          category: "DEVELOPMENT",
          totalLike: "600",
          title: "The services provide for design ",
          image: "./images/app.jpg",
        },
        {
          id: 2,
          category: "WEB DESIGN",
          totalLike: "280",
          title: "Design for tecnology & services",
          image: "./images/web.jpg",
        },
        {
          id: 3,
          category: "APPLICATION",
          totalLike: "750",
          title: "Mobile app landing design & maintain",
          image: "./images/mobile.jpg",
        },
        {
          id: 4,
          category: "PHOTOSHOP",
          totalLike: "630",
          title: "Logo design creativity & Application ",
          image: "./images/photoshop.jpg",
        },
        {
          id: 5,
          category: "FIGMA",
          totalLike: "360",
          title: "Mobile app landing design & Services",
          image: "./images/app.jpg",
        },
        {
          id: 6,
          category: "WEB DESIGN",
          totalLike: "690",
          title: "App for tecnology & services",
          image: "./images/web.jpg",
        },
      ],
    experience: [
        {
          id: 1,
          color: "success",
          company: "Flair Labs",
          location: "Mumbai",
          designation: "Associate Software Engineer",
          startDate: "July 2021",
          endDate: "Present",
          description: ["Learned React", "Earned Money"],
        },
        {
          id: 2,
          company: "GeeksforGeeks",
          color: "secondary",
          location: "Noida",
          designation: "Technical Content Writer",
          startDate: "July 2021",
          endDate: "Sep 2021",
          description: ["Learned React", "Earned Money"],
        },
        {
          id: 3,
          company: "Fcreation LLP",
          color: "secondary",
          location: "Mumbai",
          designation: "PHP Developer",
          startDate: "Dec 2020",
          endDate: "July 2021",
          description: ["Learned React", "Earned Money"],
        },
      ],
    footer: {
        image: './favicon.ico',
        name: 'Savrabh R Singh'
    }
}

const configuration = (req, res) => {
    res.send(config);
}

module.exports = configuration;