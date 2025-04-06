
import Features from "../components/Features";
import DetailedFeatures from "../components/DetailedFeatures";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">EduLite OS</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          A lightweight operating system designed specifically for educational environments
        </p>
      </header>
      
      {/* Card-style features */}
      <Features />
      
      {/* Detailed features with full descriptions */}
      <DetailedFeatures />
      
      <footer className="py-12 px-6 bg-gray-800 text-white text-center">
        <p className="text-lg">
          EduLite OS - Empowering Education through Technology
        </p>
      </footer>
    </div>
  );
};

export default Index;
