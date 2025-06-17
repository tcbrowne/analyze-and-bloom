
import { ChevronDown, BarChart3, TrendingUp, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-full animate-bounce">
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
            <div className="p-3 bg-teal-100 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}>
              <TrendingUp className="w-8 h-8 text-teal-600" />
            </div>
            <div className="p-3 bg-indigo-100 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Database className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Taylor Browne's
            <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforming raw data into actionable insights through advanced analytics, 
            machine learning, and compelling visualizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
