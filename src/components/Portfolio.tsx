
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Interactive dashboard analyzing sales trends across multiple regions with predictive forecasting capabilities.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop',
      tags: ['Tableau', 'SQL', 'Python'],
      date: '2024',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Machine learning project identifying distinct customer segments to optimize marketing strategies and increase retention.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      tags: ['Python', 'Scikit-learn', 'Clustering'],
      date: '2024',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Financial Risk Assessment Model',
      description: 'Predictive model for assessing loan default risk using advanced statistical methods and feature engineering.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      tags: ['R', 'Machine Learning', 'Statistics'],
      date: '2023',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Web Analytics Deep Dive',
      description: 'Comprehensive analysis of website performance metrics with actionable recommendations for UX improvements.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tags: ['Google Analytics', 'Power BI', 'A/B Testing'],
      date: '2023',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of data-driven solutions that have delivered measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700 flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {project.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border border-blue-200"
                    >
                      <Tag size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
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
