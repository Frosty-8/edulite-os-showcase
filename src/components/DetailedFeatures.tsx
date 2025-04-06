
"use client";

import { motion } from "framer-motion";
import { Bot, ListTodo, School, ShieldCheck, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Bot className="inline-block w-6 h-6 mr-2 text-white" />,
    title: "Offline AI Chatbot (EduLite AI)",
    description: `EduLite OS comes pre-installed with a lightweight offline AI chatbot tailored for students and faculty. Powered by efficient local embeddings and cosine similarity, this chatbot is trained on grade-wise Q&A data across subjects like Physics, English Grammar, Chemistry, Civics, and more. Users can interact with the chatbot without internet access, making it perfect for classroom or remote usage. It's designed for speed, privacy, and subject accuracy, all packed into a sleek CustomTkinter interface.`,
    gradientClass: "bg-gradient-education-1",
  },
  {
    icon: <ListTodo className="inline-block w-6 h-6 mr-2 text-white" />,
    title: "Smart To-Do List",
    description: `Stay productive and organized with the EduLite OS built-in To-Do app. Designed using Tkinter, this intuitive app allows users to set High, Medium, or Low priority tasks, visually marked by color codes. It supports task reordering via drag-and-drop, due dates with a calendar picker, edit mode, and a "Clear All" feature. A subtle tick animation appears when tasks are completed, adding a touch of interactivity. Its interface is perfectly integrated with EduLite's welcome screen design for a unified experience.`,
    gradientClass: "bg-gradient-education-2",
  },
  {
    icon: <School className="inline-block w-6 h-6 mr-2 text-white" />,
    title: "Interactive Welcome Page",
    description: `The first thing users see on EduLite OS is a warm, beautifully designed welcome screen. It serves as a hub to explore the OS, offering guided onboarding for students and faculty alike. This page includes quick access buttons to core tools like EduLite AI, Exam Mode, Kolibri, and To-Do. It's a friendly introduction to the OS's education-first focus, built to help new users start learning right away with minimal confusion.`,
    gradientClass: "bg-gradient-education-3",
  },
  {
    icon: <ShieldCheck className="inline-block w-6 h-6 mr-2 text-white" />,
    title: "Exam Mode (Distraction-Free Learning)",
    description: `EduLite OS features a secure Exam Mode, ideal for administering tests or practicing under real exam conditions. When activated, this mode restricts internet usage to specific URLs or completely disables browser access. It minimizes distractions and ensures a controlled environment for students to focus. Admins and teachers can toggle this mode quickly before assessments. It's perfect for practicals, mock exams, or lab-based evaluations.`,
    gradientClass: "bg-gradient-education-4",
  },
  {
    icon: <BookOpen className="inline-block w-6 h-6 mr-2 text-white" />,
    title: "Kolibri – Offline Learning Platform",
    description: `EduLite OS comes integrated with Kolibri, a powerful offline educational platform. Kolibri provides access to curated open-source textbooks, exercises, and video lectures. Students can explore topics from Mathematics to Science, all without needing an internet connection. This makes EduLite ideal for rural or under-connected areas, empowering self-paced learning anywhere, anytime. Teachers can create classes and assign lessons easily through the Kolibri dashboard.`,
    gradientClass: "bg-gradient-education-5",
  },
];

const DetailedFeatures = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-16 text-center">
          Key Features of EduLite OS
        </h2>

        <div className="space-y-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Icon and Title Section */}
              <motion.div
                className={`${feature.gradientClass} p-8 md:p-12 animate-gradient-x text-white lg:w-2/5 flex flex-col justify-center items-center lg:items-start`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-white/20 rounded-full p-4 mb-6 inline-flex">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-12 h-12 text-white" })}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left">{feature.title}</h3>
              </motion.div>

              {/* Description Section */}
              <div className="p-8 md:p-12 bg-white lg:w-3/5">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DetailedFeatures;
