import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "blue",
      skills: [
        { name: "React/Next.js", level: 70 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 92 },
      ]
    },
    {
      title: "Design & UX",
      color: "indigo",
      skills: [
        { name: "Figma", level: 95 },
        { name: "UI/UX Design", level: 92 },
        { name: "Prototyping", level: 90 },
        { name: "User Research", level: 85 },
      ]
    },
    {
      title: "3D & Animation",
      color: "cyan",
      skills: [
      
        { name: "Blender", level: 78 },
  
        { name: "Unity", level: 70 }
      ]
    },
    {
      title: "Backend & Tools",
      color: "blue",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Git/GitHub", level: 92 },
        { name: "AWS", level: 70 },
        { name: "Firebase", level: 85 },
        {name: "Sanic", level: 75},
      ]
    }
  ];

  const radarData = [
    { skill: "Frontend", value: 95, color: "#3b82f6" },
    { skill: "Design", value: 92, color: "#6366f1" },
    { skill: "3D/Animation", value: 80, color: "#06b6d4" },
    { skill: "Backend", value: 75, color: "#1d4ed8" },
    { skill: "Mobile", value: 78, color: "#2563eb" },
    { skill: "AI/ML", value: 72, color: "#1e40af" }
  ];

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and creative capabilities 
            across different domains of development and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-lg shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Skill Overview</h3>
              
              {/* Simple Radar Chart Representation */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {/* Grid circles */}
                  {[20, 40, 60, 80, 100].map((radius) => (
                    <circle
                      key={radius}
                      cx="100"
                      cy="100"
                      r={radius * 0.8}
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.2)"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Grid lines */}
                  {radarData.map((_, index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    const x2 = 100 + Math.cos(angle) * 80;
                    const y2 = 100 + Math.sin(angle) * 80;
                    return (
                      <line
                        key={index}
                        x1="100"
                        y1="100"
                        x2={x2}
                        y2={y2}
                        stroke="rgba(59, 130, 246, 0.2)"
                        strokeWidth="1"
                      />
                    );
                  })}
                  
                  {/* Data polygon */}
                  <motion.polygon
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    points={radarData.map((item, index) => {
                      const angle = (index * 60) * (Math.PI / 180);
                      const radius = (item.value / 100) * 80;
                      const x = 100 + Math.cos(angle) * radius;
                      const y = 100 + Math.sin(angle) * radius;
                      return `${x},${y}`;
                    }).join(' ')}
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  
                  {/* Data points */}
                  {radarData.map((item, index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    const radius = (item.value / 100) * 80;
                    const x = 100 + Math.cos(angle) * radius;
                    const y = 100 + Math.sin(angle) * radius;
                    return (
                      <motion.circle
                        key={index}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        cx={x}
                        cy={y}
                        r="4"
                        fill={item.color}
                      />
                    );
                  })}
                </svg>
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-2 gap-3">
                {radarData.map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-300">{item.skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skill Categories */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10"
              >
                <h3 className="text-xl font-bold mb-6 text-blue-400">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/25"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Tools & Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Next.js', 'Tailwind', 'Figma', 
              'Node.js', 'Python', 'AWS', 'Docker', 'Git', 'Blender'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer shadow-lg shadow-blue-500/10"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300 shadow-lg shadow-blue-500/25">
                  <span className="text-2xl font-bold text-blue-400">
                    {tool.charAt(0)}
                  </span>
                </div>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  {tool}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;