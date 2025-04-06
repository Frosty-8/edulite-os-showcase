
import React from 'react';
import { motion } from "framer-motion";
import { Server, Cpu, Database, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const requirements = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: "RAM",
    value: "≤2GB RAM",
  },
  {
    icon: <Server className="w-8 h-8 text-indigo-500" />,
    title: "Base OS",
    value: "Xubuntu",
  },
  {
    icon: <Database className="w-8 h-8 text-purple-500" />,
    title: "Storage",
    value: "4GB+ Available Space",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
    title: "Compatibility",
    value: "Works on Low-End PCs",
  },
];

const SystemRequirements = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">System Requirements</h2>
          <p className="text-xl text-gray-600">
            EduLite OS is designed to run efficiently on low-end hardware
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="bg-blue-50 p-4 rounded-full mb-4">
                    {req.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{req.title}</h3>
                  <p className="text-lg font-bold text-blue-700">{req.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-blue-800 font-medium">
              EduLite OS is optimized with ZRAM and minimal background services for maximum performance on low-end hardware.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemRequirements;
