import { ExternalLink, Github, Calendar, Tag, Handshake, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Portfolio = () => {
  const sellSideTransactions = [
    {
      title: 'Greenhouse Produce Grower',
      description: 'A vertically integrated North American greenhouse produce company secured a strategic minority investment from a global asset management firm focused on sustainable and responsible investing. The capital will support ongoing expansion and innovation in controlled environment agriculture.',
      sector: 'AgTech',
      value: '$150–200M',
      date: '2024',
      type: 'Minority Investment'
    },
    {
      title: 'Engineering & Consulting Firm',
      description: 'A multi-disciplinary engineering and professional services firm was acquired by an international leader in sustainable design and infrastructure delivery. The transaction enhances the buyer\'s footprint and technical depth across North America.',
      sector: 'Professional Services',
      value: '$130–160M',
      date: '2024',
      type: 'Strategic Acquisition'
    },
    {
      title: 'IT Consulting Firm',
      description: 'A Canadian digital transformation consultancy specializing in cloud, enterprise applications, and public sector modernization was acquired by a multinational professional services company. The acquisition strengthens the acquirer\'s capabilities in Western Canada.',
      sector: 'Technology',
      value: '$40–60M',
      date: '2024',
      type: 'Strategic Acquisition'
    },
    {
      title: 'Early Childhood Education SaaS Provider',
      description: 'A leading software platform serving the early childhood education sector received a ~$70M CAD growth equity investment. The capital will fuel continued product development and expansion into new markets.',
      sector: 'EdTech',
      value: '$25–35M',
      date: '2024',
      type: 'Growth Investment'
    },
    {
      title: 'Specialty Food Producer',
      description: 'A family-owned North American specialty food manufacturer completed a successful sale to a global food group. The deal supports succession planning and provides the buyer with an established brand and operational base in Canada.',
      sector: 'Food & Beverage',
      value: '$30–45M',
      date: '2024',
      type: 'Strategic Acquisition'
    }
  ];

  const buySideTransactions = [
    {
      title: 'Logistics & Trucking Platform',
      description: 'A diversified transportation and logistics group expanded its network with the acquisition of a regional LTL and TL provider, strengthening its presence in Ontario and enhancing final-mile and contract delivery capabilities.',
      sector: 'Transportation',
      value: '$20–30M',
      date: '2024',
      type: 'Strategic Acquisition'
    },
    {
      title: 'Private Equity Investment in Food Ingredients Company',
      description: 'A Canadian private equity firm acquired a significant stake in a specialty food ingredients company. The investment will support product innovation and capacity expansion to meet growing demand in the health-conscious consumer segment.',
      sector: 'Food Ingredients',
      value: '$50–70M',
      date: '2024',
      type: 'PE Investment'
    },
    {
      title: 'Forestry Services Company',
      description: 'A Canadian reforestation services company acquired a leading U.S.-based producer of container-grown seedlings. The acquisition expands the buyer\'s geographic footprint and strengthens its capabilities in sustainable forestry and seedling technology.',
      sector: 'Forestry',
      value: '$25–35M',
      date: '2024',
      type: 'Strategic Acquisition'
    }
  ];

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

  const TransactionCard = ({ transaction, isSellSide }) => (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 w-80">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Handshake className={isSellSide ? "text-blue-600" : "text-green-600"} size={20} />
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${isSellSide ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
              {isSellSide ? 'Sell-Side' : 'Buy-Side'}
            </span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 flex items-center">
              <Calendar size={14} className="mr-1" />
              {transaction.date}
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2">{transaction.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{transaction.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
            <Tag size={10} className="mr-1" />
            {transaction.sector}
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
            {transaction.type}
          </span>
        </div>
        
        <div className="text-sm font-semibold text-gray-700">
          Estimated Revenue: {transaction.value}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Transactions Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Transactions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent M&A transactions and investments where we provided financial due diligence and advisory services
            </p>
          </div>

          {/* Sell-Side Transactions Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <Handshake className="text-blue-600 mr-3" size={24} />
              Sell-Side Advisory
            </h3>
            <div className="max-w-6xl mx-auto relative">
              {/* Swipe indicator */}
              <div className="flex items-center justify-center mb-4 text-gray-500 text-sm">
                <ChevronLeft size={16} className="mr-1" />
                <span>Swipe to see more deals</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {sellSideTransactions.map((transaction, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/3">
                      <TransactionCard transaction={transaction} isSellSide={true} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 bg-white shadow-lg border-2 hover:bg-blue-50 hover:border-blue-200" />
                <CarouselNext className="-right-12 bg-white shadow-lg border-2 hover:bg-blue-50 hover:border-blue-200" />
              </Carousel>
            </div>
          </div>

          {/* Buy-Side Transactions Carousel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <Handshake className="text-green-600 mr-3" size={24} />
              Buy-Side Advisory
            </h3>
            <div className="max-w-6xl mx-auto relative">
              {/* Swipe indicator */}
              <div className="flex items-center justify-center mb-4 text-gray-500 text-sm">
                <ChevronLeft size={16} className="mr-1" />
                <span>Swipe to see more deals</span>
                <ChevronRight size={16} className="ml-1" />
              </div>
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {buySideTransactions.map((transaction, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/3">
                      <TransactionCard transaction={transaction} isSellSide={false} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 bg-white shadow-lg border-2 hover:bg-green-50 hover:border-green-200" />
                <CarouselNext className="-right-12 bg-white shadow-lg border-2 hover:bg-green-50 hover:border-green-200" />
              </Carousel>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
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
