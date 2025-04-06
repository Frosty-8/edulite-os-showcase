
"use client";

import { motion } from "framer-motion";
import { Bot, ListTodo, School, ShieldCheck, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-white" />,
    title: "Offline AI Chatbot (EduLite AI)",
    description: `EduLite OS comes pre-installed with a lightweight offline AI chatbot tailored for students and faculty. Powered by efficient local embeddings and cosine similarity, this chatbot is trained on grade-wise Q&A data across subjects like Physics, English Grammar, Chemistry, Civics, and more.`,
    gradientClass: "bg-gradient-education-1",
  },
  {
    icon: <ListTodo className="w-8 h-8 text-white" />,
    title: "Smart To-Do List",
    description: `Stay productive and organized with the EduLite OS built-in To-Do app. Designed using Tkinter, this intuitive app allows users to set High, Medium, or Low priority tasks, visually marked by color codes.`,
    gradientClass: "bg-gradient-education-2",
  },
  {
    icon: <School className="w-8 h-8 text-white" />,
    title: "Interactive Welcome Page",
    description: `The first thing users see on EduLite OS is a warm, beautifully designed welcome screen. It serves as a hub to explore the OS, offering guided onboarding for students and faculty alike.`,
    gradientClass: "bg-gradient-education-3",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: "Exam Mode (Distraction-Free Learning)",
    description: `EduLite OS features a secure Exam Mode, ideal for administering tests or practicing under real exam conditions. When activated, this mode restricts internet usage to specific URLs or completely disables browser access.`,
    gradientClass: "bg-gradient-education-4",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    title: "Kolibri – Offline Learning Platform",
    description: `EduLite OS comes integrated with Kolibri, a powerful offline educational platform. Kolibri provides access to curated open-source textbooks, exercises, and video lectures.`,
    gradientClass: "bg-gradient-education-5",
  },
];

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

// Item animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, 
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const Features = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Key Features of EduLite OS
        </h2>
        <p className="text-xl text-gray-600">
          Empowering education through lightweight, innovative technology
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="rounded-2xl overflow-hidden shadow-lg h-full flex flex-col"
          >
            {/* Gradient header with icon */}
            <div className={`${feature.gradientClass} p-8 animate-gradient-x flex items-center justify-center`}>
              <div className="bg-white/20 rounded-full p-4">
                {feature.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 bg-white flex-grow flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {feature.description}
              </p>
              
              <motion.div
                className="mt-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button className="px-6 py-2 rounded-full bg-feature-gradient hover:bg-feature-gradient-hover text-blue-800 font-medium transition-all">
                  Learn more
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
