import { useState } from 'react';
import { BarChart, Database, Brain, Code, PieChart, TrendingUp } from 'lucide-react';

const Skills = () => {
  const maxYears = 8;
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleFlip = (skillName: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skillName)) {
        newSet.delete(skillName);
      } else {
        newSet.add(skillName);
      }
      return newSet;
    });
  };

  const skills = [
    {
      icon: TrendingUp,
      name: 'M&A Advisory',
      years: 4,
      description: 'Buy-side & Sell-side Advisory, Deal Sourcing',
      backDescription: 'Advised on mergers, acquisitions, and divestitures across multiple industries. Supported deal teams through transaction lifecycle management, market analysis, target identification, and strategic positioning for both buy-side and sell-side engagements.'
    },
    {
      icon: PieChart,
      name: 'Financial Due Diligence',
      years: 4,
      description: 'Quality of Earnings, Working Capital, Debt Analysis',
      backDescription: 'Conducted comprehensive financial due diligence for private equity and strategic acquirers. Performed quality of earnings analyses, normalized EBITDA adjustments, working capital assessments, and identified key financial risks to inform deal pricing and structure.'
    },
    {
      icon: BarChart,
      name: 'Deal Analytics',
      years: 4,
      description: 'Pre-LOI Deal Thesis Validation, Sell-Side & Buy-Side Analytics, Sales Cube Analysis',
      backDescription: 'Built data-driven models to evaluate deal viability, quantify synergies, and streamline post-merger integration planning. Leveraged analytics to identify trends in financial data, automate due diligence workflows, and deliver actionable insights to deal teams and stakeholders.'
    },
    {
      icon: Database,
      name: 'SQL & Databases',
      years: 6,
      description: 'PostgreSQL, MySQL, MongoDB',
      backDescription: 'Extensive experience designing and optimizing database schemas, writing complex queries, and managing data pipelines. Worked with both relational and NoSQL databases across multiple enterprise projects, handling datasets ranging from thousands to millions of records.'
    },
    {
      icon: Code,
      name: 'Data Analytics',
      years: 5,
      description: 'Python, R, Alteryx, Pandas, NumPy, Tidyverse',
      backDescription: 'Built data processing pipelines, automated reporting systems, and analytical models using a variety of tools. Proficient in data wrangling, statistical analysis, and creating reproducible workflows across Python, R, and Alteryx platforms.'
    },
    {
      icon: BarChart,
      name: 'Data Visualization',
      years: 5,
      description: 'Tableau, Power BI, Matplotlib, ggplot2',
      backDescription: 'Created interactive dashboards and compelling visual narratives for stakeholders at all levels. Experienced in translating complex data insights into clear, actionable visualizations that drive business decisions.'
    },
    {
      icon: Brain,
      name: 'Machine Learning',
      years: 4,
      description: 'Classification, Regression, Clustering',
      backDescription: 'Developed and deployed predictive models for customer segmentation, churn prediction, and demand forecasting. Experience with feature engineering, model selection, hyperparameter tuning, and A/B testing ML solutions in production.'
    },
    {
      icon: PieChart,
      name: 'Statistical Analysis',
      years: 6,
      description: 'Hypothesis Testing, A/B Testing',
      backDescription: 'Applied rigorous statistical methods to validate business hypotheses and measure experiment outcomes. Expertise in experimental design, significance testing, confidence intervals, and communicating statistical findings to non-technical audiences.'
    },
    {
      icon: TrendingUp,
      name: 'Business Intelligence',
      years: 5,
      description: 'KPI Development, Dashboard Design',
      backDescription: 'Led BI initiatives from requirements gathering to implementation. Designed KPI frameworks, built self-service analytics platforms, and partnered with leadership to establish data-driven decision-making cultures across organizations.'
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
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="perspective-1000 h-72 cursor-pointer"
              onClick={() => toggleFlip(skill.name)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                  flippedCards.has(skill.name) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg mr-4">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  
                  <div className="relative mt-auto">
                    <div className="text-sm text-gray-600 mb-1">
                      <span>Experience</span>
                    </div>
                    <div className="relative w-full">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${(skill.years / maxYears) * 100}%` }}
                        ></div>
                      </div>
                      <span 
                        className="absolute -top-6 text-sm font-medium text-gray-700 transform -translate-x-1/2"
                        style={{ left: `${(skill.years / maxYears) * 100}%` }}
                      >
                        {skill.years}+ years
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      {Array.from({ length: maxYears + 1 }).map((_, i) => (
                        <span key={i}>{i === maxYears ? '8+' : i}</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-4 text-center">Click to learn more</p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500 to-teal-500 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-white/20 rounded-lg mr-4">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                  
                  <p className="text-white/90 text-sm leading-relaxed">
                    {skill.backDescription}
                  </p>

                  <p className="text-xs text-white/60 mt-4 text-center absolute bottom-4 left-0 right-0">Click to flip back</p>
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
