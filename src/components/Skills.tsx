import { BarChart, Database, Brain, Code, PieChart, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Database,
      name: 'SQL & Databases',
      years: 6,
      description: 'PostgreSQL, MySQL, MongoDB'
    },
    {
      icon: Code,
      name: 'Python & R',
      years: 5,
      description: 'Pandas, NumPy, Scikit-learn, Tidyverse'
    },
    {
      icon: BarChart,
      name: 'Data Visualization',
      years: 5,
      description: 'Tableau, Power BI, Matplotlib, ggplot2'
    },
    {
      icon: Brain,
      name: 'Machine Learning',
      years: 4,
      description: 'Classification, Regression, Clustering'
    },
    {
      icon: PieChart,
      name: 'Statistical Analysis',
      years: 6,
      description: 'Hypothesis Testing, A/B Testing'
    },
    {
      icon: TrendingUp,
      name: 'Business Intelligence',
      years: 5,
      description: 'KPI Development, Dashboard Design'
    },
  ];

  const maxYears = 8;

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
          {skills.map((skill) => (
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
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Experience</span>
                  <span>{skill.years} {skill.years === 1 ? 'year' : 'years'}</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: maxYears }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-8 flex-1 rounded-sm transition-all duration-300 ${
                        index < skill.years
                          ? 'bg-gradient-to-t from-blue-600 to-teal-400'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0</span>
                  <span>{maxYears}+ yrs</span>
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
