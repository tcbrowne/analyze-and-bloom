
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogCatalogue = () => {
  const blogPosts = [
    {
      slug: 'ai-in-transactions-advisory',
      title: 'AI in Transactions Advisory: Efficiency Gains, Commoditized Outputs, and the Threat to True Deal Advisory',
      excerpt: 'Artificial intelligence is accelerating the pace of change in the M&A ecosystem. While efficiency gains are real and valuable, they risk pushing the industry toward commoditized outputs and "race to the bottom" pricing dynamics.',
      date: '2024-01-29',
      readTime: '18 min read',
      author: 'Taylor Browne',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      category: 'Trends'
    },
    {
      slug: 'navigating-trucking-industry-financial-due-diligence',
      title: 'Navigating the Trucking Industry: A Financial Due Diligence Deep Dive',
      excerpt: 'As the backbone of North American supply chains, the trucking industry plays a pivotal role in the movement of goods and materials. Understanding the nuances of Truckload vs Less-than-Truckload carriers is critical for M&A professionals.',
      date: '2024-01-22',
      readTime: '12 min read',
      author: 'Taylor Browne',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop',
      category: 'Due Diligence'
    },
    {
      slug: 'future-data-analytics-2024',
      title: 'The Future of Data Analytics in 2024',
      excerpt: 'Exploring emerging trends in data analytics including AI integration, real-time processing, and the growing importance of data ethics.',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop',
      category: 'Trends'
    },
    {
      slug: 'building-effective-data-visualizations',
      title: 'Building Effective Data Visualizations',
      excerpt: 'Best practices for creating compelling and informative data visualizations that tell a clear story and drive decision-making.',
      date: '2024-01-08',
      readTime: '7 min read',
      author: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      category: 'Tutorial'
    },
    {
      slug: 'machine-learning-deployment-strategies',
      title: 'Machine Learning Model Deployment Strategies',
      excerpt: 'A comprehensive guide to deploying machine learning models in production environments with focus on scalability and monitoring.',
      date: '2024-01-01',
      readTime: '8 min read',
      author: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      category: 'Machine Learning'
    },
    {
      slug: 'financial-modeling-best-practices',
      title: 'Financial Modeling Best Practices for M&A',
      excerpt: 'Essential techniques and methodologies for building robust financial models in mergers and acquisitions scenarios.',
      date: '2023-12-20',
      readTime: '10 min read',
      author: 'Taylor Browne',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      category: 'Finance'
    },
    {
      slug: 'supply-chain-analytics-optimization',
      title: 'Supply Chain Analytics and Optimization',
      excerpt: 'How advanced analytics can transform supply chain efficiency and reduce operational costs in modern businesses.',
      date: '2023-12-15',
      readTime: '9 min read',
      author: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop',
      category: 'Analytics'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/#blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group"
            >
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All Blog Posts
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore all our insights about data analytics, machine learning, finance, and industry best practices
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span className="truncate">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                    >
                      Read More
                      <ArrowLeft size={16} className="ml-1 rotate-180 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogCatalogue;
