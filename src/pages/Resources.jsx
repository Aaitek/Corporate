import { Link } from 'react-router-dom'

const Resources = () => {
  const resources = [
    {
      title: 'Blog',
      description: 'Latest insights, trends, and best practices in technology',
      icon: '📝',
      link: '/resources/blog',
    },
    {
      title: 'Case Studies',
      description: 'Detailed success stories from our client partnerships',
      icon: '📊',
      link: '/partner-success',
    },
    {
      title: 'Whitepapers',
      description: 'In-depth research and analysis on technology topics',
      icon: '📄',
      link: '/resources/whitepapers',
    },
    {
      title: 'Documentation',
      description: 'Technical documentation and API references',
      icon: '📚',
      link: '/resources/docs',
    },
    {
      title: 'Webinars',
      description: 'Recorded webinars and live sessions with industry experts',
      icon: '🎥',
      link: '/resources/webinars',
    },
    {
      title: 'FAQ',
      description: 'Frequently asked questions and answers',
      icon: '❓',
      link: '/resources/faq',
    },
  ]

  const recentArticles = [
    {
      title: 'How to Fix the Next.js RCE Vulnerability',
      date: 'December 10, 2025',
      category: 'Tech',
      excerpt: 'Learn about the critical Next.js App Router RCE vulnerability and how to fix it quickly.',
    },
    {
      title: 'The Rise of API Testing Automation',
      date: 'December 08, 2025',
      category: 'Press',
      excerpt: 'Discover why API testing automation is essential for modern applications.',
    },
    {
      title: 'ServiceNow Playbooks: Automating Complex Workflows',
      date: 'December 08, 2025',
      category: 'Press',
      excerpt: 'Learn how ServiceNow Playbooks simplify complex workflows with guided steps.',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access valuable resources to help you stay informed and make better technology decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.link}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 block"
            >
              <div className="text-5xl mb-4">{resource.icon}</div>
              <h2 className="heading-3 mb-4">{resource.title}</h2>
              <p className="text-gray-600">{resource.description}</p>
            </Link>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="heading-2 text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="text-sm text-primary-600 font-semibold">
                    {article.category}
                  </span>
                </div>
                <h3 className="heading-3 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  to={`/resources/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Keep Reading →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources

