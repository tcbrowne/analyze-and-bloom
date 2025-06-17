
import { ExternalLink, Github, BarChart3, Database, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      description: "Interactive Tableau dashboard analyzing sales trends, customer segments, and revenue forecasting for a Fortune 500 company.",
      technologies: ["Tableau", "SQL", "Python"],
      image: "/placeholder.svg",
      demoLink: "#",
      githubLink: "#",
      icon: BarChart3
    },
    {
      id: 2,
      title: "Customer Churn Prediction Model",
      description: "Machine learning model predicting customer churn with 92% accuracy, helping reduce customer attrition by 15%.",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      image: "/placeholder.svg",
      demoLink: "#",
      githubLink: "#",
      icon: TrendingUp
    },
    {
      id: 3,
      title: "ETL Pipeline for Data Warehouse",
      description: "Automated ETL pipeline processing 10M+ records daily, integrating multiple data sources for business intelligence.",
      technologies: ["SQL", "Python", "Apache Airflow"],
      image: "/placeholder.svg",
      demoLink: "#",
      githubLink: "#",
      icon: Database
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of data analytics projects that deliver measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-white" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </a>
                  
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
