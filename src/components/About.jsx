import React from 'react';
import { motion, number, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react';
import resumePDF from '../assets/resume.pdf';


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    {
      icon: GraduationCap,
      title: "Computer Science and Design",
      subtitle: "R.M.K ENGINEERING COLLEGE",
      year: "2021-2025",
      description: "Specialized in Software Engineering, Graduated with honors in datascience",
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Web developer Intern",
      subtitle: "LTI Mindtree",
      year: "2023",
      description: " I developed a full-stack Knowledge Management Portal for our college department. The application, inspired by the Stack Overflow concept, was built using Python Django for the backend and HTML, CSS, and JavaScript for the frontend.",
      color: "indigo"
    },
    {
      icon: Award,
      title: "Data analytics intern",
      subtitle: "IIT madras",
      year: "2022",
      description: "I learned the fundamentals of Python programming, explored key data analysis libraries, and gained an introduction to machine learning concepts. I also worked with Sanic, a Python web framework known for its high-speed asynchronous capabilities.",
      color: "cyan"
    },
  
  ];

  const interests = [
    "Web Development",
    "AR/VR Development", 
    "Machine Learning",
    "UI/UX Design",
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer and designer who loves creating beautiful, 
            functional digital experiences that make people's lives easier and more enjoyable.
          </p>
           <div className="mt-6 flex justify-center gap-4">
  {/* View Resume */}
  <a
    href={resumePDF}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
  >
    View Resume
  </a>

  {/* Download Resume */}
  <a
    href={resumePDF}
    download="Krithika_Resume.pdf"
    className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
  >
    Download Resume
  </a>
</div>

        </motion.div>

        

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">My Journey</h3>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
              
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative flex items-start space-x-6 pb-8 last:pb-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center relative z-10 shadow-lg shadow-blue-500/25">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer group shadow-lg shadow-blue-500/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-blue-300 font-medium mb-3">{item.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests & Skills Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">What I Love</h3>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-8 shadow-lg shadow-blue-500/10">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  When I'm not coding, you'll find me exploring the intersection of technology and creativity. 
                  I believe the best digital experiences come from understanding both the technical possibilities 
                  and human psychology.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-4 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer group shadow-lg shadow-blue-500/30"
                    >
                      <span className="text-white group-hover:text-blue-400 transition-colors font-medium">
                        {interest}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "7+", label: "Projects Completed" },
                { number: "1", label: "Years Experience" },
                {number: "4+", label: "Internships" },
                { number: "∞", label: "Learning and innovation" },
        
               
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;