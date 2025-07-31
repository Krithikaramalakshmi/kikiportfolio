import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Sparkles } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm Krithika's AI assistant. I can help you learn more about her work, skills, and experience. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    "hello": "Hello! Nice to meet you! I'm here to help you learn more about Krithika's work and experience.",
    "hi": "Hi there! How can I help you today?",
    "projects": "Krithika has worked on amazing projects including EcoTrack Dashboard, AI-Powered Design Tools, 3D Portfolio experiences, and mobile banking apps. Which project interests you most?",
    "skills": "Krithika specializes in React/Next.js, TypeScript, UI/UX Design, 3D development with Three.js, and has experience with AI/ML. She's also skilled in Figma, Blender, and various design tools.",
    "experience": "Krithika is a Computer Science graduate with 3+ years of experience. She's worked as a Frontend Developer intern at TechCorp Solutions and has completed 50+ freelance projects.",
    "contact": "You can reach Krithika at hello@krithika.dev or schedule a call. She's currently available for new projects and collaborations!",
    "resume": "Krithika's resume includes her education, work experience, and certifications. You can find detailed information in the About section or contact her directly for a full resume.",
    "tech": "Krithika works with React, Next.js, TypeScript, Tailwind CSS, Three.js, Node.js, Python, and many other modern technologies. She's passionate about staying up-to-date with the latest tech trends.",
    "design": "Krithika has strong UI/UX design skills using Figma, Adobe Creative Suite, and focuses on user research, prototyping, and design systems. She believes in creating beautiful AND functional interfaces.",
    "ai": "Krithika has experience with AI/ML technologies and has built AI-powered design tools. She's interested in the intersection of AI and user experience design.",
    "3d": "Krithika works with Three.js, Blender, and WebGL for 3D development. She's created interactive 3D experiences and is passionate about immersive web technologies.",
    "availability": "Great news! Krithika is currently available for new projects and collaborations. Feel free to reach out to discuss your project requirements.",
    "default": "That's an interesting question! For more detailed information, I'd recommend checking out the different sections of the portfolio or contacting Krithika directly. Is there anything specific about her work or skills you'd like to know?"
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Tell me about your projects",
    "What are your skills?",
    "Are you available for work?",
    "How can I contact you?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-500/20 flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 px-6 py-4 border-b border-blue-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Krithika's Assistant</h3>
                  <p className="text-gray-400 text-sm flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot 
                        ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30' 
                        : 'bg-gradient-to-br from-gray-600/20 to-gray-700/20 border border-gray-500/30'
                    }`}>
                      {message.isBot ? (
                        <Bot className="w-4 h-4 text-blue-400" />
                      ) : (
                        <User className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.isBot
                        ? 'bg-white/10 backdrop-blur-sm border border-blue-500/20 text-gray-200'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-blue-500/20 px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-blue-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-blue-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-blue-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 border-t border-blue-500/20">
                <p className="text-gray-400 text-xs mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.slice(0, 2).map((question, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setInputMessage(question);
                        handleSendMessage();
                      }}
                      className="text-xs px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 hover:text-white hover:bg-blue-500/30 transition-all duration-300 border border-blue-500/30"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-blue-500/20">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={!inputMessage.trim() || isTyping}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;