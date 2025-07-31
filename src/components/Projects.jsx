import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Play, Filter } from 'lucide-react';
//import myPhoto from '../assets/myphoto.jpg'; // Adjust path if needed

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'fullstack', 'AI/ML','AR/VR'];

  const projects = [
    {
      id: 1,
      title: "React chatbot",
      description: "Developed an intelligent chatbot using React for the frontend and Node.js with Express for the backend. Integrated the open-source Gemma LLM through LM Studio to generate dynamic and human-like responses. The chatbot supports real-time messaging and mimics natural conversation flow.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwvvxF7mSPXJ40BLFr4ZyP70lCQO_FMw1tA&s",
      tags: ['React', 'UI/UX', 'Charts'],
      category: 'React',
      //liveUrl: "#",
      githubUrl: "https://github.com/Krithikaramalakshmi/reactlm",
      featured: true
    },
    {
      id: 2,
      title: "Personalized portfolio with chatbot",
      description: "Created a modern, interactive portfolio website to showcase my skills and projects. Developed using React.js, it features responsive design, dark/light mode toggle, and smooth UI animations. The site also includes a built-in chatbot, offering visitors a guided and conversational experience.",
      image: "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg",
      tags: ['AI/ML', 'Python', 'React'],
      category: 'React',
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Multi-cancer detection system",
      description: "Developed a deep learning-based Multi-Cancer Detection System using Python. The project utilized transfer learning by integrating pre-trained models like EfficientNet and DenseNet, with custom CNN layers added on top to fine-tune the architecture for cancer image classification,Libraries such as TensorFlow, Keras, and scikit-learn were used for model training and evaluation. This approach enabled accurate and efficient identification of multiple cancer types from medical imaging data.",
      image: "https://www.mdanderson.org/images/publications/cancerwise/M/PR_2023-6073_MCEDs_WEB.jpg",
      tags: ['Three.js', '3D', 'WebGL'],
      category: 'AI/ML',
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "KM PORTAL",
      description: "Developed a personalized knowledge management portal tailored for our college department to streamline content sharing, document organization, and internal communication,Built the frontend using HTML, CSS, and JavaScript, and implemented the backend with the Django (Python) framework and SQLite3 as the database. The portal supports user authentication, knowledge categorization, and efficient content retrieval.",
      image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ['React Native', 'Mobile', 'UI/UX'],
      category: 'fullstack',
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Dropout prediction system",
      description: "Award-winning website design for a creative agency featuring bold animations and interactive elements.",
      image: "data:image/png;base64,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",
      tags: ['UI/UX', 'Animation', 'Branding'],
      category: 'AI/ML',
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Psychology with VR",
      description: "Designed and developed a virtual reality experience to aid users with stress relief and overcoming common phobias. Built 3D environments and interactive content using Unity and Blender, allowing users to immerse themselves in calming or fear-based scenarios.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnypX-h01dHveAbDQ9bwpGucupnYEZI6j3Nw&s",
      tags: ['React', 'Node.js', 'Commerce'],
      category: 'AR/VR',
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Emergency alert system",
      description: "Built an AI-powered emergency alert system that automatically sends an email and SMS alert when a mobile phone detects a fall or scream from the user,Using sound detection and motion sensor inputs, the system identifies if the person is in danger and sends a real-time alert to predefined contacts for help. This project demonstrates practical use of machine learning for safety and personal security",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVs6zSBacNdeDyh2szD1VyRM8nB9eL9CUIQ&s",
      tags: ['React', 'Node.js', 'Commerce'],
      category: 'AI/ML',
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here's a collection of projects that showcase my skills in frontend development, 
            UI/UX design, and creative problem-solving.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-blue-500/20 shadow-lg shadow-blue-500/10">
            <Filter className="w-5 h-5 text-gray-400 ml-4" />
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-blue-500/20'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects
            .filter(project => project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 shadow-lg shadow-blue-500/10"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gray-800 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                   
                   
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-blue-500/20 backdrop-blur-sm rounded-full hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter(project => !project.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, rotateY: 5 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10"
              >
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-blue-500/20 backdrop-blur-sm rounded-full hover:bg-blue-500/30 transition-all duration-300 border border-blue-400/30"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;