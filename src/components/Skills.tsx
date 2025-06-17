
import { BarChart, Database, Brain, Code, PieChart, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Database,
      name: 'SQL & Databases',
      level: 95,
      description: 'PostgreSQL, MySQL, MongoDB'
    },
    {
      icon: Code,
      name: 'Python & R',
      level: 90,
      description: 'Pandas, NumPy, Scikit-learn, Tidyverse'
    },
    {
      icon: BarChart,
      name: 'Data Visualization',
      level: 88,
      description: 'Tableau, Power BI, Matplotlib, ggplot2'
    },
    {
      icon: Brain,
      name: 'Machine Learning',
      level: 85,
      description: 'Classification, Regression, Clustering'
    },
    {
      icon: PieChart,
      name: 'Statistical Analysis',
      level: 92,
      description: 'Hypothesis Testing, A/B Testing'
    },
    {
      icon: TrendingUp,
      name: 'Business Intelligence',
      level: 87,
      description: 'KPI Development, Dashboard Design'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge tools and methodologies to extract meaningful insights from complex datasets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mr-4">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{skill.description}</p>
              
              <div className="relative">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
