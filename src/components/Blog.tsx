
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Advanced SQL Techniques for Data Analysis",
      excerpt: "Exploring window functions, CTEs, and advanced joins to unlock deeper insights from your data.",
      date: "2024-01-15",
      author: "Taylor Browne",
      readTime: "8 min read",
      category: "SQL"
    },
    {
      id: 2,
      title: "Building Predictive Models with Python",
      excerpt: "A comprehensive guide to creating robust machine learning models for business forecasting.",
      date: "2024-01-10",
      author: "Taylor Browne",
      readTime: "12 min read",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "Data Visualization Best Practices",
      excerpt: "Creating compelling and informative dashboards that drive business decisions.",
      date: "2024-01-05",
      author: "Taylor Browne",
      readTime: "6 min read",
      category: "Visualization"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge and insights from the world of data analytics and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
