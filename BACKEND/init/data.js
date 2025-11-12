const sampleEvents = [
  {
    title: "AI Hackathon 2025",
    description: "The AI Hackathon 2025 is a thrilling 48-hour coding marathon that brings together innovators, developers, and problem-solvers to design impactful AI-driven solutions. Over two days, participants will work in teams to tackle real-world challenges in domains like healthcare, environment, automation, and education. Guided by expert mentors, teams will brainstorm, prototype, and pitch their ideas to an esteemed panel of judges. The hackathon fosters creativity, collaboration, and technical excellence under intense time pressure. With prizes, recognition, and networking opportunities awaiting winners, this event is not just about competition but also about learning, innovation, and shaping the future with AI.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    entryFee: 200,
    eventType: "Hackathon",
    eventCategory: "Technology",
    location: "IIT Bombay, Mumbai",
    date: new Date("2025-10-05")
  },
  {
    title: "Blockchain Summit",
    description: "The Blockchain Summit is a premier event that unites innovators, developers, entrepreneurs, and industry leaders to explore the transformative power of blockchain technology. The summit features keynote sessions, panel discussions, and live workshops on topics such as decentralized finance (DeFi), NFTs, Web3, and enterprise blockchain solutions. Participants will engage in interactive networking, discover real-world use cases, and gain insights from experts driving blockchain adoption worldwide. With opportunities for collaboration, startup showcases, and idea exchange, the summit serves as a hub for innovation, learning, and growth. It is not just an event but a catalyst for shaping the decentralized future.",
    image: "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    entryFee: 800,
    eventType: "Conference",
    eventCategory: "Technology",
    location: "Bengaluru Tech Park",
    date: new Date("2025-10-08")
  },
  {
    title: "Cybersecurity Workshop",
    description: "The Cybersecurity Workshop is an immersive event designed to equip participants with essential skills and knowledge to protect digital assets in today’s interconnected world. Covering topics such as ethical hacking, network security, malware analysis, and safe coding practices, the workshop blends theory with hands-on activities. Attendees will engage in live demonstrations, interactive labs, and real-world case studies to understand how cyber threats evolve and how to counter them effectively. Whether you are a beginner or an aspiring security professional, this workshop provides practical insights and strategies to strengthen cybersecurity awareness, resilience, and preparedness for modern digital challenges.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    entryFee: 400,
    eventType: "Workshop",
    eventCategory: "Technology",
    location: "Delhi Technological University",
    date: new Date("2025-10-10")
  },
  {
    title: "Data Science Bootcamp",
    description: "The Data Science Bootcamp is a power-packed event designed to introduce participants to the world of data-driven decision-making. Covering essential topics such as data analysis, visualization, machine learning, and predictive modeling, this bootcamp offers a balance of theory and hands-on practice. Attendees will work on real datasets, learn popular tools like Python, Pandas, and visualization libraries, and explore how data science powers industries today. With expert guidance and interactive sessions, participants will gain practical skills to analyze, interpret, and present data effectively. Ideal for beginners and enthusiasts, this bootcamp unlocks the pathway to mastering the future of data.",
    image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    entryFee: 600,
    eventType: "Workshop",
    eventCategory: "Technology",
    location: "IISc Bengaluru",
    date: new Date("2025-10-12")
  },
  {
    title: "Startup Pitch Fest",
    description: "The Startup Pitch Fest is an exciting platform for aspiring entrepreneurs and innovators to showcase their groundbreaking ideas before a panel of investors, mentors, and industry leaders. Designed as a high-energy event, it offers participants the chance to deliver impactful pitches, gain valuable feedback, and explore funding opportunities. With networking sessions, mentorship rounds, and live audience engagement, the fest fosters collaboration between startups, professionals, and venture capitalists. Whether you are a budding entrepreneur or a seasoned founder, this event is the perfect stage to refine your vision, attract support, and take your startup journey to the next level.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    entryFee: 0,
    eventType: "Competition",
    eventCategory: "Technology",
    location: "IIT Delhi Auditorium",
    date: new Date("2025-10-15")
  },
  {
    title: "Cloud Computing Conference",
    description: "The Cloud Computing Conference is a premier gathering of technology leaders, developers, researchers, and enterprises to explore the future of cloud-based solutions. This event focuses on innovations in cloud infrastructure, virtualization, multi-cloud strategies, serverless computing, and edge technologies. Through keynote sessions, technical workshops, and panel discussions, participants will gain insights into emerging trends, security challenges, and real-world applications of cloud computing. The conference also offers opportunities to network with cloud experts, industry pioneers, and solution providers. Whether you’re a professional, student, or business leader, this event equips you with the knowledge to leverage cloud technology for growth and innovation.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop",
    entryFee: 500,
    eventType: "Conference",
    eventCategory: "Technology",
    location: "Hyderabad Convention Centre",
    date: new Date("2025-10-18")
  },
  {
    title: "Robotics Challenge 2025",
    description: "The Robotics Challenge 2025 is an exciting event designed to bring together innovators, engineers, and students passionate about robotics and automation. This challenge pushes participants to design, build, and program robots capable of tackling real-world tasks, from obstacle navigation to precision-based problem solving. Spanning across multiple rounds, the event tests creativity, teamwork, and technical expertise under time-bound conditions. With cutting-edge technologies like AI integration, IoT, and machine vision at the forefront, the competition showcases the future of intelligent machines. Robotics enthusiasts will also gain exposure through workshops, expert talks, and networking opportunities, making this a must-attend event for tech explorers.",
    image: "https://images.unsplash.com/photo-1643359905563-f747213c9703?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    entryFee: 300,
    eventType: "Competition",
    eventCategory: "Technology",
    location: "IIT Kanpur Campus",
    date: new Date("2025-10-20")
  },
  {
    title: "Game Development Jam",
    description: "The Game Development Jam is an adrenaline-packed creative marathon where developers, designers, and storytellers come together to build innovative games from scratch. Participants collaborate in teams and have 48 hours to design, code, and showcase their unique gaming concepts based on a surprise theme revealed at the start. From immersive storylines to engaging gameplay mechanics, the event challenges creativity, technical skills, and teamwork under tight deadlines. Industry mentors and gaming experts will guide participants through mini-sessions, while a panel of judges evaluates entries on innovation, playability, and design. This jam is the ultimate playground for aspiring game developers and creators.",
    image: "https://images.unsplash.com/photo-1725273627190-ef48c1c95cbf?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    entryFee: 200,
    eventType: "Hackathon",
    eventCategory: "Technology",
    location: "Amity University, Noida",
    date: new Date("2025-10-23")
  },
  {
    title: "VR/AR Expo",
    description: "The VR/AR Expo is an immersive event showcasing the latest innovations in Virtual Reality (VR) and Augmented Reality (AR). Tech enthusiasts, developers, and industry leaders gather to explore how extended reality is transforming gaming, education, healthcare, architecture, and entertainment. Attendees can experience live demos, hands-on workshops, and interactive product showcases from leading companies and startups. The event also features panel discussions on the future of XR, networking sessions, and opportunities to pitch groundbreaking ideas. Whether you are a developer, entrepreneur, or curious learner, the VR/AR Expo is the ultimate hub to discover the cutting edge of immersive technology.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    entryFee: 500,
    eventType: "Exhibition",
    eventCategory: "Technology",
    location: "Nehru Science Centre, Mumbai",
    date: new Date("2025-10-25")
  },
  {
    title: "IoT Innovation Fair",
    description: "The IoT Innovation Fair is a premier event celebrating the transformative power of the Internet of Things (IoT). This fair brings together innovators, startups, researchers, and industry experts to showcase groundbreaking IoT solutions across smart homes, healthcare, agriculture, manufacturing, and transportation. Attendees will experience live demonstrations, prototype exhibitions, and interactive workshops highlighting real-world applications of connected devices. The event also features keynote talks, networking sessions, and competitions for emerging startups to pitch their IoT-driven solutions. Designed for tech enthusiasts, developers, and businesses, the IoT Innovation Fair provides a dynamic platform to explore the future of connectivity and automation.",
    image: "https://plus.unsplash.com/premium_photo-1688678097510-38711f21668b?q=80&w=1197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    entryFee: 100,
    eventType: "Exhibition",
    eventCategory: "Technology",
    location: "Chennai Trade Centre",
    date: new Date("2025-10-28")
  },
  {
  title: "National Coding League",
  description: "The National Coding League is one of India’s most prestigious programming competitions, bringing together the brightest coders to solve challenging problems. Participants compete in multiple rounds of algorithmic challenges, testing their logical reasoning, speed, and efficiency in coding. With problems designed to mimic real-world scenarios, the league provides a platform for innovation and technical growth. The event encourages collaboration, perseverance, and a competitive spirit among participants. It serves as a launchpad for talented programmers to gain recognition, build their portfolios, and connect with recruiters. A must-attend for coding enthusiasts striving to prove their skills on a national stage.",
  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  entryFee: 0,
  eventType: "Competition",
  eventCategory: "Technology",
  location: "BITS Pilani, Rajasthan",
  date: new Date("2025-11-01")
},
{
  title: "AI in Healthcare Summit",
  description: "The AI in Healthcare Summit explores the role of artificial intelligence in revolutionizing the medical field. Industry leaders, doctors, data scientists, and researchers gather to discuss the use of AI in diagnostics, predictive analytics, drug discovery, robotic surgeries, and patient care. The event focuses on case studies, ethical practices, and the integration of AI in real hospital settings. Participants gain insights into future trends while exploring how AI can address global healthcare challenges. With keynote sessions, expert panels, and networking opportunities, the summit fosters collaboration between healthcare and technology communities to build a smarter, healthier tomorrow.",
  image: "https://plus.unsplash.com/premium_photo-1699387203637-6eac5a11a201?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  entryFee: 600,
  eventType: "Conference",
  eventCategory: "Technology",
  location: "Apollo Hospitals, Hyderabad",
  date: new Date("2025-11-03")
},
{
  title: "Space Tech Talk",
  description: "The Space Tech Talk is an exciting seminar led by ISRO scientists and space experts, aimed at sharing the latest advancements in space exploration, satellite technology, and interplanetary missions. The session dives deep into India’s growing space capabilities, from reusable launch vehicles to Mars missions and upcoming lunar explorations. Attendees get the opportunity to interact with leading researchers and understand the practical challenges faced in pushing the boundaries of space science. The event also highlights the role of young innovators in shaping the future of aerospace technology. Perfect for students and enthusiasts passionate about the cosmos and beyond.",
  image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
  entryFee: 0,
  eventType: "Seminar",
  eventCategory: "Technology",
  location: "ISRO HQ, Bengaluru",
  date: new Date("2025-11-05")
},
{
  title: "Open Source Contribution Camp",
  description: "The Open Source Contribution Camp is a two-day immersive workshop designed to teach students and developers how to effectively contribute to open-source projects. Covering everything from Git and GitHub basics to creating pull requests, fixing bugs, and collaborating on real-world projects, this event equips participants with the tools to become active contributors in the global tech community. Experienced mentors guide attendees through the process of choosing projects, writing clean code, and understanding open-source etiquette. The camp encourages teamwork and networking with peers, opening doors to career opportunities and international recognition in the ever-growing open-source ecosystem.",
  image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
  entryFee: 0,
  eventType: "Workshop",
  eventCategory: "Technology",
  location: "VIT Vellore",
  date: new Date("2025-11-08")
},
{
  title: "Quantum Computing Summit",
  description: "The Quantum Computing Summit is a cutting-edge conference exploring the future of quantum processors and their revolutionary impact on computing. Experts from academia, startups, and global tech companies share insights into the progress of quantum algorithms, hardware innovations, and potential real-world applications in fields like cryptography, optimization, and machine learning. The event aims to demystify complex concepts, making them accessible for students, researchers, and industry professionals. Attendees engage in panel discussions, technical sessions, and networking with pioneers in the field. It’s an unmissable opportunity to understand how quantum technology is shaping the next generation of computing power.",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
  entryFee: 1200,
  eventType: "Conference",
  eventCategory: "Technology",
  location: "IIT Madras",
  date: new Date("2025-11-10")
},
  {
  title: "Techno-Cultural Fest",
  description: "The Techno-Cultural Fest is a vibrant blend of cultural celebrations and technology-driven competitions. Students showcase their coding, robotics, and innovation skills while also participating in music, dance, and art performances. The event encourages collaboration between technical and cultural domains, giving participants a platform to express their talents holistically. With a mix of hackathons, gaming contests, cultural parades, and live entertainment, it creates an exciting atmosphere on campus. Attendees enjoy workshops, exhibitions, and performances that foster both creativity and technical expertise. It’s a must-attend celebration where technology meets art, creating unforgettable memories and networking opportunities for everyone involved.",
  image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop",
  entryFee: 300,
  eventType: "Festival",
  eventCategory: "Technology",
  location: "NIT Trichy",
  date: new Date("2025-11-13")
},
{
  title: "Drone Racing Championship",
  description: "The Drone Racing Championship is an adrenaline-packed event where participants compete with high-speed drones across challenging obstacle courses. Students and drone enthusiasts design, build, and pilot drones to demonstrate speed, control, and innovation. The event fosters creativity in drone engineering while giving audiences thrilling live races. Alongside competitions, workshops on drone technology and exhibitions on aerial robotics are also organized, making it both educational and exciting. The event attracts hobbyists, engineers, and tech innovators, offering them a platform to showcase futuristic aerial systems. It’s a perfect mix of technology and sportsmanship for students and professionals passionate about drones.",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
  entryFee: 250,
  eventType: "Competition",
  eventCategory: "Technology",
  location: "IIT Roorkee",
  date: new Date("2025-11-15")
},
{
  title: "Digital Marketing Bootcamp",
  description: "The Digital Marketing Bootcamp is an intensive workshop designed to teach participants essential skills in online branding, social media campaigns, SEO optimization, and analytics. Attendees will gain hands-on experience with digital marketing tools, content creation strategies, and real-world case studies. The bootcamp also covers Google Ads, influencer marketing, and performance tracking techniques. Industry experts guide participants on building effective campaigns for startups and businesses. Whether you are a student, entrepreneur, or professional, this event equips you with practical knowledge to thrive in the fast-paced digital era. A perfect opportunity to level up marketing skills in just a few sessions.",
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
  entryFee: 350,
  eventType: "Workshop",
  eventCategory: "Technology",
  location: "Symbiosis University, Pune",
  date: new Date("2025-11-18")
},
{
  title: "Hack4Good",
  description: "Hack4Good is a hackathon dedicated to solving real-world social challenges by leveraging technology and innovation. Participants work in teams to design and develop solutions that benefit NGOs, local communities, and social impact organizations. The event fosters creativity, problem-solving, and collaboration, pushing developers, designers, and innovators to use their skills for meaningful causes. Over 36 hours of coding, brainstorming, and mentorship, teams create impactful projects ranging from mobile apps to AI solutions. The hackathon concludes with pitches to judges, with the best ideas receiving recognition and support. Hack4Good blends competition and compassion, making it a truly rewarding experience.",
  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
  entryFee: 0,
  eventType: "Hackathon",
  eventCategory: "Technology",
  location: "Amrita University, Coimbatore",
  date: new Date("2025-11-20")
},
{
  title: "AI & Robotics Exhibition",
  description: "The AI & Robotics Exhibition is an exciting showcase of cutting-edge innovations in artificial intelligence, machine learning, and robotics. Participants and organizations display their projects, ranging from humanoid robots and autonomous drones to AI-driven applications and smart devices. The event also includes live demonstrations, interactive workshops, and keynote talks from industry leaders. Students, researchers, and tech enthusiasts can explore futuristic technologies, gain insights into industry trends, and network with innovators. The exhibition inspires creativity and encourages collaboration between academia, startups, and industry professionals. It’s a must-visit event for anyone curious about the future of AI and robotics.",
  image: "https://plus.unsplash.com/premium_photo-1682840356534-611cf4909d70?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  entryFee: 400,
  eventType: "Exhibition",
  eventCategory: "Technology",
  location: "Delhi Expo Centre",
  date: new Date("2025-11-23")
},
{
  title: "Bollywood Music Night",
  description: "Bollywood Music Night is a star-studded concert featuring live performances by some of the top Bollywood singers and musicians. The event promises an evening of energy, glamour, and soulful music with chart-topping hits and audience favorites. Attendees can sing, dance, and celebrate the magic of Bollywood in a vibrant, festive atmosphere. With dazzling lights, live bands, and unforgettable melodies, it creates an immersive concert experience. The event is perfect for music lovers and fans of Indian cinema, offering them a chance to witness their favorite artists live on stage. It’s an entertainment extravaganza that guarantees pure joy.",
  image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200&auto=format&fit=crop",
  entryFee: 1200,
  eventType: "Concert",
  eventCategory: "Entertainment",
  location: "NSCI Dome, Mumbai",
  date: new Date("2025-11-25")
},
{
  title: "Yoga & Wellness Retreat",
  description: "The Yoga & Wellness Retreat is a rejuvenating experience designed to promote physical, mental, and spiritual well-being. The event includes guided yoga sessions, meditation practices, and wellness workshops conducted by expert instructors. Participants can immerse themselves in relaxation and mindfulness while surrounded by serene natural settings. The retreat also focuses on holistic health practices, including nutrition, detox programs, and stress management techniques. It is ideal for individuals seeking balance, healing, and personal growth. Whether you are a beginner or experienced practitioner, the retreat provides tools to enhance inner peace and harmony, making it a truly transformative journey.",
  image: "https://plus.unsplash.com/premium_photo-1713908274864-bd6396aa3a38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  entryFee: 800,
  eventType: "Workshop",
  eventCategory: "Health",
  location: "Rishikesh, Uttarakhand",
  date: new Date("2025-11-28")
},
{
  title: "Food Carnival",
  description: "The Food Carnival is a delightful celebration of flavors, bringing together food lovers, chefs, and culinary artists. Attendees can enjoy a wide variety of cuisines, street food stalls, and gourmet dishes from across India and beyond. The event also features live music, cooking competitions, and interactive workshops on culinary skills. Families, friends, and foodies alike can indulge in delicious experiences while enjoying a lively, festive atmosphere. The carnival highlights both traditional and modern food trends, making it a paradise for gastronomes. It’s more than just food—it’s a cultural and social gathering full of joy, flavors, and entertainment.",
  image: "https://images.unsplash.com/photo-1739080611685-786d3562558e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  entryFee: 200,
  eventType: "Festival",
  eventCategory: "Food",
  location: "Marine Drive, Mumbai",
  date: new Date("2025-12-01")
},
{
  title: "Cricket Fan Fest",
  description: "The Cricket Fan Fest is a celebration for cricket lovers, featuring live World Cup screenings, interactive contests, and food stalls. Fans gather in a stadium-like atmosphere to cheer for their teams while enjoying delicious food and entertainment. The event includes fun activities such as quiz contests, merchandise stalls, meet-and-greet opportunities with former cricketers, and exciting giveaways. Families and friends can bond over their love for the sport in a vibrant, festive environment. It captures the true spirit of cricket, uniting fans of all ages. The Fan Fest ensures that every attendee experiences the thrill of cricket together.",
  image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
  entryFee: 300,
  eventType: "Festival",
  eventCategory: "Sports",
  location: "Eden Gardens, Kolkata",
  date: new Date("2025-12-03")
},
{
  title: "Stand-up Comedy Night",
  description: "Stand-up Comedy Night promises an evening of laughter and entertainment with performances by some of the best comedians in the country. The show features witty observations, hilarious storytelling, and sharp humor that will keep the audience in splits. It’s the perfect way to unwind and enjoy a fun night with friends and family. The event also provides a platform for emerging comedians to showcase their talent, making it a mix of established names and fresh voices. With a lively atmosphere and constant laughter, this show guarantees a memorable experience filled with humor, joy, and entertainment for all attendees.",
  image: "https://images.unsplash.com/photo-1611956425642-d5a8169abd63?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  entryFee: 700,
  eventType: "Show",
  eventCategory: "Entertainment",
  location: "Mahalakshmi Racecourse, Mumbai",
  date: new Date("2025-12-05")
},
{
  title: "Art & Culture Expo",
  description: "The Art & Culture Expo is a grand exhibition celebrating the diversity and richness of Indian art, craft, and cultural heritage. Artists and artisans from across the country present paintings, sculptures, textiles, and traditional crafts. The expo also includes cultural performances, storytelling sessions, and workshops where attendees can learn different art forms. It provides a platform for local artisans to showcase their skills and connect with a wider audience. Visitors experience India’s artistic traditions and modern innovations under one roof. The expo fosters appreciation of cultural diversity while promoting preservation and growth of traditional artistic practices for future generations.",
  image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=1200&auto=format&fit=crop",
  entryFee: 100,
  eventType: "Exhibition",
  eventCategory: "Culture",
  location: "Pragati Maidan, Delhi",
  date: new Date("2025-12-08")
},
{
  title: "Diwali Mela",
  description: "The Diwali Mela is a vibrant festive celebration filled with lights, colors, and cultural traditions. Visitors enjoy shopping stalls, festive food, handicrafts, and traditional performances that capture the essence of Diwali. Families come together to celebrate the festival of lights in a joyful and secure environment. The mela also includes live music, dance shows, rangoli competitions, and fireworks displays, making it a complete cultural experience. It supports local artisans by giving them a platform to showcase festive products and handmade crafts. The Diwali Mela blends spirituality, culture, and entertainment, making it an unmissable event during the festive season.",
  image: "https://images.unsplash.com/photo-1592843997881-cab3860b1067?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  entryFee: 50,
  eventType: "Festival",
  eventCategory: "Culture",
  location: "Connaught Place, Delhi",
  date: new Date("2025-12-10")
},
{
  title: "Marathon for a Cause",
  description: "The Marathon for a Cause is a large-scale charity run dedicated to raising awareness and support for cancer research. Participants of all ages join the marathon to show solidarity and contribute to a noble cause. The event includes multiple race categories, from fun runs to professional distances, ensuring inclusivity for all fitness levels. Alongside the run, health awareness camps, motivational talks, and fitness workshops are organized. The marathon fosters community spirit, encourages a healthy lifestyle, and channels collective efforts into meaningful impact. It’s more than just a race—it’s a movement of compassion, resilience, and unity for a better future.",
  image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1200&auto=format&fit=crop",
  entryFee: 400,
  eventType: "Sports",
  eventCategory: "Health",
  location: "India Gate, New Delhi",
  date: new Date("2025-12-13")
},
{
  title: "Fashion Week Showcase",
  description: "The Fashion Week Showcase is a glamorous event where top designers present their latest collections on the runway. Attendees witness the latest trends in clothing, accessories, and style, with models showcasing breathtaking designs. The showcase provides a platform for both established and emerging designers to reach fashion enthusiasts, media, and industry professionals. Alongside runway shows, the event includes fashion exhibitions, networking sessions, and style workshops. It celebrates creativity, innovation, and cultural influences in fashion. Fashion Week Showcase is not only about style but also about shaping future trends and creating opportunities for designers to shine on an international stage.",
  image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  entryFee: 1500,
  eventType: "Exhibition",
  eventCategory: "Fashion",
  location: "JW Marriott, Mumbai",
  date: new Date("2025-12-15")
},
{
  title: "Street Art Festival",
  description: "The Street Art Festival is a colorful cultural event that turns public walls and open spaces into creative canvases. Street artists, muralists, and graffiti creators from across the country showcase their art live, bringing vibrancy and storytelling to urban landscapes. Visitors can experience interactive workshops, music performances, and food stalls alongside the artwork, making it a lively social gathering. The festival promotes creative freedom, cultural diversity, and community engagement while providing artists with recognition. It’s a visual feast that combines culture, creativity, and entertainment, making it one of the most unique and inspiring festivals for art lovers and city dwellers alike.",
  image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop",
  entryFee: 150,
  eventType: "Festival",
  eventCategory: "Culture",
  location: "Bandra, Mumbai",
  date: new Date("2025-12-18")
}

];

module.exports = { data: sampleEvents };