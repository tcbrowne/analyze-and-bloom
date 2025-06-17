
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Navigating the Trucking Industry: A Financial Due Diligence Deep Dive',
      excerpt: 'As the backbone of North American supply chains, the trucking industry plays a pivotal role in the movement of goods and materials. Understanding the nuances of Truckload vs Less-than-Truckload carriers is critical for M&A professionals.',
      date: '2024-01-22',
      readTime: '12 min read',
      author: 'Taylor Browne',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop',
      category: 'Due Diligence',
      fullContent: `
        <div class="prose prose-lg max-w-none">
          <p>As the backbone of North American supply chains, the trucking industry plays a pivotal role in the movement of goods and materials. From food distribution to industrial manufacturing, trucks are integral to business operations across nearly every sector. For M&A professionals, investors, or strategic buyers, understanding the nuances of this industry is critical when conducting financial due diligence (FDD). In this article, we break down the complexities of trucking—specifically differentiating between Truckload (TL) and Less-than-Truckload (LTL) carriers—and highlight key diligence considerations for both business models.</p>

          <h2>Understanding the Business Models: TL vs. LTL</h2>
          <p><strong>Truckload (TL) carriers</strong> dedicate an entire trailer to a single shipper's freight, generally for long-haul routes. These carriers operate with fewer touchpoints and typically transport full pallets or containers, reducing the likelihood of damage or delays.</p>
          
          <p><strong>Less-than-Truckload (LTL) carriers</strong> consolidate shipments from multiple customers, often making multiple stops en route. These businesses rely heavily on terminal networks and hub-and-spoke logistics, adding layers of operational complexity.</p>

          <div class="overflow-x-auto my-6">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-50">
                  <th class="border border-gray-300 px-4 py-2 text-left">Feature</th>
                  <th class="border border-gray-300 px-4 py-2 text-left">Truckload (TL)</th>
                  <th class="border border-gray-300 px-4 py-2 text-left">Less-than-Truckload (LTL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-2 font-medium">Shipment Size</td>
                  <td class="border border-gray-300 px-4 py-2">Full trailer (typically 40,000+ lbs)</td>
                  <td class="border border-gray-300 px-4 py-2">Partial trailer (<15,000 lbs)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2 font-medium">Delivery Model</td>
                  <td class="border border-gray-300 px-4 py-2">Point-to-point</td>
                  <td class="border border-gray-300 px-4 py-2">Hub-and-spoke with cross-docking</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2 font-medium">Pricing Structure</td>
                  <td class="border border-gray-300 px-4 py-2">Per mile / per load</td>
                  <td class="border border-gray-300 px-4 py-2">Complex (per hundredweight, accessorials)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 px-4 py-2 font-medium">Asset Intensity</td>
                  <td class="border border-gray-300 px-4 py-2">High (tractors + trailers)</td>
                  <td class="border border-gray-300 px-4 py-2">Higher (terminals, docks, trucks)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2 font-medium">Profitability Drivers</td>
                  <td class="border border-gray-300 px-4 py-2">Route efficiency, fuel costs</td>
                  <td class="border border-gray-300 px-4 py-2">Load density, pickup/delivery utilization</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Key Due Diligence Areas in the Trucking Sector</h2>
          
          <h3>1. Revenue Quality and Customer Concentration</h3>
          <p>Analyze revenue mix by customer, industry, and route. In TL, customer concentration is often higher, with shippers securing dedicated freight lanes. LTL carriers may be more diversified but can have smaller, less sticky customers. Contract structure (spot vs. contract rates) also matters: LTL players tend to have more contractual revenue, providing greater stability.</p>
          <p><strong>Watch for:</strong> Excessive reliance on a few customers, or exposure to cyclical end-markets like construction or oil & gas.</p>

          <h3>2. Cost Drivers and Margin Analysis</h3>
          <p>Fuel, driver wages, maintenance, insurance, and tolls are critical inputs. For LTL carriers, additional costs like terminal operations and freight handling must be dissected. Benchmark EBITDA margins across industry peers: TL companies may operate at 10–15% margins, while efficient LTL carriers can exceed 15–18%.</p>
          <p><strong>Watch for:</strong> Unreconciled fuel surcharge programs, outdated fleet driving up maintenance, or poor route density.</p>

          <h3>3. Fleet Profile and CapEx Requirements</h3>
          <p>Evaluate average vehicle age, maintenance spend, and lease vs. own ratios. TL carriers with aging fleets may require significant reinvestment post-close. For LTL, terminal and dock infrastructure should also be assessed for scalability.</p>
          <p><strong>Watch for:</strong> Hidden deferred capex or off-balance sheet leases under ASC 842.</p>

          <h3>4. Driver Management and Labor Risk</h3>
          <p>The industry faces chronic driver shortages and high turnover, especially in long-haul TL. Labor union presence is more common in LTL (e.g., Teamsters at legacy players like YRC), adding complexity to due diligence.</p>
          <p><strong>Watch for:</strong> Rising driver acquisition costs, compliance with DOT regulations, or looming union negotiations.</p>

          <h3>5. Technology and Route Optimization</h3>
          <p>Profitability is increasingly linked to dispatching software, telematics, and customer-facing platforms. LTL carriers in particular depend on sophisticated systems for freight consolidation and terminal management.</p>
          <p><strong>Watch for:</strong> Antiquated TMS (Transportation Management Systems) or lack of ELD (Electronic Logging Device) integration.</p>

          <h3>6. Working Capital and Seasonality</h3>
          <p>LTL carriers often have more complex billing and receivables cycles, leading to higher working capital needs. Seasonality (e.g., holiday surges or Q1 slowdowns) can materially impact cash flows and must be adjusted for in normalized earnings.</p>
          <p><strong>Watch for:</strong> Unusual spikes in accrued revenue or aging A/R balances.</p>

          <h2>Conclusion</h2>
          <p>Trucking is an essential yet operationally nuanced industry, and understanding the distinct economics between TL and LTL carriers is essential in any financial due diligence process. Buyers must look beyond topline growth and assess the sustainability of margin drivers, capital intensity, customer stickiness, and regulatory compliance.</p>
          <p>Whether you're buying a regional TL operator or a national LTL network, a tailored diligence approach—anchored in both operational realities and industry benchmarks—can uncover both risks and opportunities that shape deal value.</p>
        </div>
      `
    },
    {
      title: 'The Future of Data Analytics in 2024',
      excerpt: 'Exploring emerging trends in data analytics including AI integration, real-time processing, and the growing importance of data ethics.',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop',
      category: 'Trends'
    },
    {
      title: 'Building Effective Data Visualizations',
      excerpt: 'Best practices for creating compelling and informative data visualizations that tell a clear story and drive decision-making.',
      date: '2024-01-08',
      readTime: '7 min read',
      author: 'Data Analyst',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      category: 'Tutorial'
    },
    {
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
                
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Posts
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
