
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams();
  
  const blogPosts = [
    {
      slug: 'navigating-trucking-industry-financial-due-diligence',
      title: 'Navigating the Trucking Industry: A Financial Due Diligence Deep Dive',
      excerpt: 'As the backbone of North American supply chains, the trucking industry plays a pivotal role in the movement of goods and materials. Understanding the nuances of Truckload vs Less-than-Truckload carriers is critical for M&A professionals.',
      date: '2024-01-22',
      readTime: '12 min read',
      author: 'Taylor Browne',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=400&fit=crop',
      category: 'Due Diligence',
      fullContent: `
        <div class="prose prose-lg max-w-none">
          <p>As the backbone of North American supply chains, the trucking industry plays a pivotal role in the movement of goods and materials. From food distribution to industrial manufacturing, trucks are integral to business operations across nearly every sector. For M&A professionals, investors, or strategic buyers, understanding the nuances of this industry is critical when conducting financial due diligence (FDD). In this article, we break down the complexities of trucking—specifically differentiating between Truckload (TL) and Less-than-Truckload (LTL) carriers—and highlight key diligence considerations for both business models.</p>

          <div class="my-8">
            <img src="https://images.unsplash.com/photo-1520637836862-4d197d17c768?w=800&h=400&fit=crop&auto=format&q=75" alt="Multiple semi trucks parked at trucking depot" class="w-full h-64 object-cover rounded-lg shadow-lg" loading="lazy" />
            <p class="text-sm text-gray-600 text-center mt-2 italic">Modern trucking operations require sophisticated logistics and fleet management</p>
          </div>

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
    }
  ];

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <Link to="/#blog" className="text-blue-600 hover:text-blue-800">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <article className="pt-16">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/#blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group"
          >
            <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.fullContent }}
          />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
