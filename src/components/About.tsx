import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Gamepad2, Zap, Coffee, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'Fullstack Development', icon: Code, description: 'Building end-to-end web applications with modern technologies' },
    { name: 'AI & Machine Learning', icon: Brain, description: 'Creating intelligent solutions and predictive models' },
    { name: 'Game Development', icon: Gamepad2, description: 'Crafting engaging interactive experiences and games' }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'TensorFlow',
    'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Unity', 'C#'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate fullstack developer with a deep enthusiasm for cutting-edge technologies. 
            My journey spans across web development, artificial intelligence, and game creation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Personal Info & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Personal Story */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">My Passion</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I believe in the power of technology to solve real-world problems. Whether it's building 
                intuitive web applications, developing AI solutions that make a difference, or creating 
                games that bring joy to people's lives.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4" />
                  <span>Fueled by coffee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Always learning</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies I Love</h3>
              <div className="grid grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-3 bg-white rounded-lg shadow-sm border hover:border-blue-300 hover:shadow-md transition-all text-center text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;