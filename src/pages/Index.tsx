
import { motion } from "framer-motion";
import { Download, Github, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import Features from "../components/Features";
import DetailedFeatures from "../components/DetailedFeatures";
import SystemRequirements from "../components/SystemRequirements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">EduLite OS</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            A lightweight operating system designed specifically for educational environments
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://drive.google.com/file/d/1DRZ2_oMEDPxR4f_w0OiAl1fDUm0rwF5f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-lg"
                >
                  <Download className="w-5 h-5 mr-2" /> Download EduLite OS
                </Button>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-black px-8 py-6 text-lg hover:bg-white/10 rounded-lg"
                onClick={() => window.open("https://github.com/LhaseParth2610/EduliteOS", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" /> View on GitHub
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </header>
      
      {/* System Requirements Section */}
      <SystemRequirements />
      
      {/* Card-style features */}
      <Features />
      
      {/* Detailed features with full descriptions */}
      <DetailedFeatures />
      
      <footer className="py-12 px-6 bg-gray-800 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg mb-4">
            EduLite OS - Empowering Education through Technology
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a 
              href="https://github.com/rohitkshirsagar19/EduLite-OS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://edulite-os.github.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
            >
              <FileCode className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm mt-4 text-gray-400">
            Released under the GPL-3.0 license
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
