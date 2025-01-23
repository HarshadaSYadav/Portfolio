import React, { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Sun, Moon, Calendar, Briefcase, GraduationCap, Download } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.5 });
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (homeInView) setActiveSection('home');
    else if (aboutInView) setActiveSection('about');
    else if (experienceInView) setActiveSection('experience');
    else if (skillsRef) setActiveSection('skills');
    else if (projectsInView) setActiveSection('projects');
    else if (educationInView) setActiveSection('education');
    else if (contactInView) setActiveSection('contact');
  }, [homeInView, aboutInView, experienceInView, skillsInView, projectsInView, educationInView, contactInView]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: 'text-red-500',
    },
    {
      name: 'SpringBoot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: 'text-green-500',
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'text-blue-500',
    },
    {
      name: 'Hibernate',
      icon: 'https://hibernate.org/images/hibernate_icon_whitebkg.svg',
      color: 'text-yellow-500',
    },
    {
      name: 'REST APIs',
      icon: 'https://www.svgrepo.com/show/375531/api.svg',
      color: 'text-purple-500',
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'text-orange-500',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: 'text-blue-500',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'text-yellow-400',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'text-blue-400',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'text-green-500',
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: 'text-red-500',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'text-orange-500',
    },
    {
      name: 'Postman',
      icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      color: 'text-orange-500',
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: 'text-yellow-500',
    },
    {
      name: 'VSCode',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      color: 'text-blue-500',
    },
    {
      name: 'Github',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: 'text-purple-500',
    },
    {
      name: 'Vercel',
      icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item 
                      ? 'text-indigo-500 dark:text-indigo-400' 
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-indigo-500 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium capitalize transition-colors duration-200`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {theme === 'dark' ? (
                  <Sun className="text-yellow-500" size={24} />
                ) : (
                  <Moon className="text-gray-600" size={24} />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {theme === 'dark' ? (
                  <Sun className="text-yellow-500" size={24} />
                ) : (
                  <Moon className="text-gray-600" size={24} />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item 
                      ? 'text-indigo-500 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800' 
                      : 'text-gray-600 dark:text-gray-300'
                  } block px-3 py-2 text-base font-medium capitalize w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <section
          id="home"
          ref={homeRef}
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="text-center">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 animate-gradient mb-4">
                Harshada Yadav
              </h1>
              <div className=""></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
              Software Developer
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up">
              <a
                href="https://github.com/HarshadaSYadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshadayadav13"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div className="mt-12">
              <ChevronDown size={32} className="mx-auto text-gray-400 dark:text-gray-500 animate-bounce" />
            </div>
          </div>
        </section>

        <section
          id="about"
          ref={aboutRef}
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              A glimpse of me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt="Developer workspace"
                    className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="space-y-6 md:pl-8">
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Building with passion
                </h3>
                <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                  <p className="leading-relaxed">
                    I am driven by a deep passion for software development, continuously exploring new ways to create engaging and intuitive user experiences. With a solid foundation in Java Spring Boot, Hibernate, and web development, I focus on building scalable applications with clean code and optimal performance.
                  </p>
                  <p className="leading-relaxed">
                    I am committed to staying up-to-date with the latest technologies and best practices, always looking for opportunities to learn and grow. Whether it's enhancing user interfaces or implementing new features, I take pride in my work and enjoy collaborating with others to bring innovative ideas to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={skillsRef}
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white">
              My technical arsenal
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10"
                      />
                    </div>
                    <span className={`text-sm font-medium ${skill.color}`}>
                      {skill.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent hover:border-indigo-500 rounded-xl transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          ref={experienceRef}
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Experience</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
              
              <div className="space-y-12">
                {[
                  {
                    title: "SIBIC Business Incubator | Java Spring Boot Intern",
                    date: "07/2024 - Present",
                    description: "Working on a Live project with hands-on-experience in Spring Boot, Hibernate, Postman, Docker API.",
                    icon: <Briefcase className="w-6 h-6" />
                  },
                  {
                    title: "Grappltech | Software Developer Intern",
                    date: "07/2024 - 08/2024",
                    description: "Full-stack web development with hands-on experience in HTML, CSS, and JavaScript.",
                    icon: <Briefcase className="w-6 h-6" />
                  },
                  {
                    title: "Triplet's Services | Student Intern",
                    date: "07/2023 - 08/2023",
                    description: "Gained hands-on experience in designing complex queries, optimizing database performance, and managing data integrity.",
                    icon: <Briefcase className="w-6 h-6" />
                  }
                ].map((exp, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2 px-6">
                      <div className="timeline-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-3">
                            {exp.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.date}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                    <div className="timeline-dot w-4 h-4 bg-indigo-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={projectsRef}
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Spam Filtering System",
                  tech: "Java, Spring Boot, Flask, React.js, MySQL",
                  description: "Developed a Spam Filtering System using Spring Boot for the backend and Flask for machine learning-based classification.",
                  image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  title: "Student Marks Evaluation System",
                  tech: "HTML, CSS, JavaScript, Java, JSP, MySQL",
                  description: "Created a web app for automating student marks evaluation with grade entry, automated calculations, and real-time reporting.",
                  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  title: "Algorithm Visualizer",
                  tech: "HTML, CSS, JavaScript",
                  description: "Developed a web app that visualizes sorting and graph algorithms, providing interactive step-by-step execution.",
                  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80"
                }
              ].map((project, index) => (
                <div key={index} className="project-card group">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-b-xl">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.split(', ').map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={educationRef}
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Education</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500"></div>
              
              <div className="space-y-12">
                {[
                  {
                    school: "Nanasaheb Mahadik College of Engineering, Sangli",
                    degree: "Bachelor of Computer science and Engineering",
                    year: "2025",
                    icon: <GraduationCap className="w-6 h-6" />
                  },
                  {
                    school: "Vidyamandir Highschool and Junior College, Islampur",
                    degree: "HSC - 96.67%",
                    year: "2021",
                    icon: <GraduationCap className="w-6 h-6" />
                  },
                  {
                    school: "Islampur High School, Islampur",
                    degree: "SSC - 91.40%",
                    year: "2019",
                    icon: <GraduationCap className="w-6 h-6" />
                  }
                ].map((edu, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2 px-6">
                      <div className="timeline-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-500 mr-3">
                            {edu.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.school}</h3>
                        </div>
                        <div className="text-gray-600 dark:text-gray-400 mb-2">{edu.degree}</div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-dot w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;