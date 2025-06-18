import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
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
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge and insights about data analytics, machine learning, and industry best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
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
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Posts
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
