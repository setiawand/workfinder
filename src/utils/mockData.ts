import type { Job, Company } from '../types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: {
      id: 'comp-1',
      name: 'TechCorp Indonesia',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      description: 'Leading technology company in Southeast Asia',
      industry: 'Technology',
      size: '500-1000 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://techcorp.id',
      verified: true
    },
    description: 'We are looking for a passionate Frontend Developer to join our dynamic team. You will be responsible for creating amazing user experiences using modern web technologies.',
    requirements: ['3+ years React experience', 'TypeScript proficiency', 'CSS/SCSS expertise', 'Git version control'],
    benefits: ['Health insurance', 'Flexible working hours', 'Remote work options', 'Professional development budget'],
    salary: {
      min: 15000000,
      max: 25000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: true,
    postedAt: new Date('2024-01-10T10:30:00Z'),
    expiresAt: new Date('2024-02-10T10:30:00Z'),
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript', 'Git']
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: {
      id: 'comp-2',
      name: 'StartupHub',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
      description: 'Fast-growing fintech startup revolutionizing payments',
      industry: 'Fintech',
      size: '50-100 employees',
      location: 'Bandung, Indonesia',
      website: 'https://startuphub.co.id',
      verified: true
    },
    description: 'Join our backend team to build scalable microservices and APIs. Work with cutting-edge technologies in a fast-paced startup environment.',
    requirements: ['5+ years backend development', 'Node.js/Python expertise', 'Database design skills', 'Cloud platform experience'],
    benefits: ['Equity options', 'Unlimited PTO', 'Learning stipend', 'Modern office space'],
    salary: {
      min: 20000000,
      max: 35000000,
      currency: 'IDR'
    },
    location: 'Bandung, Indonesia',
    type: 'full-time',
    level: 'senior',
    remote: false,
    postedAt: new Date('2024-01-12T14:20:00Z'),
    expiresAt: new Date('2024-02-12T14:20:00Z'),
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: {
      id: 'comp-3',
      name: 'Creative Studio',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
      description: 'Award-winning design agency creating beautiful digital experiences',
      industry: 'Design',
      size: '10-50 employees',
      location: 'Yogyakarta, Indonesia',
      website: 'https://creativestudio.id',
      verified: false
    },
    description: 'We are seeking a talented UI/UX Designer to create intuitive and visually appealing digital products. Join our creative team and work on exciting projects.',
    requirements: ['3+ years UI/UX experience', 'Figma/Sketch proficiency', 'User research skills', 'Portfolio required'],
    benefits: ['Creative freedom', 'Flexible schedule', 'Design tools budget', 'Team retreats'],
    salary: {
      min: 12000000,
      max: 20000000,
      currency: 'IDR'
    },
    location: 'Yogyakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: true,
    postedAt: new Date('2024-01-08T09:15:00Z'),
    expiresAt: new Date('2024-02-08T09:15:00Z'),
    skills: ['Figma', 'Sketch', 'User Research', 'Prototyping', 'Adobe Creative Suite']
  },
  {
    id: '4',
    title: 'Product Manager',
    company: {
      id: 'comp-4',
      name: 'E-commerce Giant',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop',
      description: 'Leading e-commerce platform serving millions of customers',
      industry: 'E-commerce',
      size: '1000+ employees',
      location: 'Surabaya, Indonesia',
      website: 'https://ecommercegiant.id',
      verified: true
    },
    description: 'Lead product strategy and development for our mobile app. Work with cross-functional teams to deliver features that delight millions of users.',
    requirements: ['5+ years product management', 'Data-driven mindset', 'Agile methodology', 'Technical background preferred'],
    benefits: ['Stock options', 'Health & dental', 'Gym membership', 'Career development'],
    salary: {
      min: 30000000,
      max: 50000000,
      currency: 'IDR'
    },
    location: 'Surabaya, Indonesia',
    type: 'full-time',
    level: 'senior',
    remote: false,
    postedAt: new Date('2024-01-14T16:45:00Z'),
    expiresAt: new Date('2024-02-14T16:45:00Z'),
    skills: ['Product Strategy', 'Data Analysis', 'Agile', 'User Research', 'Roadmapping']
  },
  {
    id: '5',
    title: 'Digital Marketing Specialist',
    company: {
      id: 'comp-5',
      name: 'Marketing Pro',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop',
      description: 'Full-service digital marketing agency helping brands grow online',
      industry: 'Marketing',
      size: '100-500 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://marketingpro.id',
      verified: true
    },
    description: 'Drive digital marketing campaigns across multiple channels. Analyze performance data and optimize strategies to maximize ROI for our clients.',
    requirements: ['3+ years digital marketing', 'Google Ads certified', 'Social media expertise', 'Analytics proficiency'],
    benefits: ['Performance bonus', 'Training programs', 'Work from home', 'Team events'],
    salary: {
      min: 10000000,
      max: 18000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: true,
    postedAt: new Date('2024-01-13T12:00:00Z'),
    expiresAt: new Date('2024-02-13T12:00:00Z'),
    skills: ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics', 'Content Marketing']
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: {
      id: 'comp-6',
      name: 'AI Solutions',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
      description: 'Leading AI and machine learning solutions provider',
      industry: 'Artificial Intelligence',
      size: '200-500 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://aisolutions.id',
      verified: true
    },
    description: 'Join our data science team to build predictive models and extract insights from large datasets. Work on cutting-edge AI projects.',
    requirements: ['PhD/Masters in Data Science', 'Python/R expertise', 'Machine Learning algorithms', 'Statistical analysis'],
    benefits: ['Research budget', 'Conference attendance', 'Flexible hours', 'Stock options'],
    salary: {
      min: 25000000,
      max: 45000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'senior',
    remote: true,
    postedAt: new Date('2024-01-15T08:30:00Z'),
    expiresAt: new Date('2024-02-15T08:30:00Z'),
    skills: ['Python', 'R', 'Machine Learning', 'TensorFlow', 'SQL']
  },
  {
    id: '7',
    title: 'Mobile App Developer',
    company: {
      id: 'comp-7',
      name: 'AppCraft Studio',
      logo: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop',
      description: 'Mobile app development studio creating innovative solutions',
      industry: 'Mobile Development',
      size: '50-100 employees',
      location: 'Bali, Indonesia',
      website: 'https://appcraft.id',
      verified: true
    },
    description: 'Develop native and cross-platform mobile applications. Work on exciting projects for startups and enterprises.',
    requirements: ['4+ years mobile development', 'React Native/Flutter', 'iOS/Android native', 'App Store deployment'],
    benefits: ['Bali office location', 'Surf breaks', 'Health insurance', 'Equipment allowance'],
    salary: {
      min: 18000000,
      max: 30000000,
      currency: 'IDR'
    },
    location: 'Bali, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: false,
    postedAt: new Date('2024-01-11T11:20:00Z'),
    expiresAt: new Date('2024-02-11T11:20:00Z'),
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: '8',
    title: 'DevOps Engineer',
    company: {
      id: 'comp-8',
      name: 'CloudTech',
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop',
      description: 'Cloud infrastructure and DevOps consulting company',
      industry: 'Cloud Computing',
      size: '100-200 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://cloudtech.id',
      verified: true
    },
    description: 'Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability and scalability.',
    requirements: ['5+ years DevOps experience', 'AWS/GCP/Azure', 'Docker/Kubernetes', 'Infrastructure as Code'],
    benefits: ['Cloud certifications', 'Remote work', 'Learning budget', 'Performance bonus'],
    salary: {
      min: 22000000,
      max: 38000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'senior',
    remote: true,
    postedAt: new Date('2024-01-09T15:45:00Z'),
    expiresAt: new Date('2024-02-09T15:45:00Z'),
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
  },
  {
    id: '9',
    title: 'Content Writer',
    company: {
      id: 'comp-9',
      name: 'Content Hub',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=100&h=100&fit=crop',
      description: 'Content marketing agency specializing in tech and lifestyle brands',
      industry: 'Content Marketing',
      size: '20-50 employees',
      location: 'Bandung, Indonesia',
      website: 'https://contenthub.id',
      verified: false
    },
    description: 'Create engaging content across multiple platforms. Write blog posts, social media content, and marketing materials.',
    requirements: ['2+ years content writing', 'SEO knowledge', 'Social media savvy', 'Portfolio required'],
    benefits: ['Creative environment', 'Flexible schedule', 'Writing workshops', 'Remote work'],
    salary: {
      min: 8000000,
      max: 15000000,
      currency: 'IDR'
    },
    location: 'Bandung, Indonesia',
    type: 'full-time',
    level: 'entry',
    remote: true,
    postedAt: new Date('2024-01-16T09:00:00Z'),
    expiresAt: new Date('2024-02-16T09:00:00Z'),
    skills: ['Content Writing', 'SEO', 'Social Media', 'WordPress', 'Copywriting']
  },
  {
    id: '10',
    title: 'Cybersecurity Analyst',
    company: {
      id: 'comp-10',
      name: 'SecureNet',
      logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop',
      description: 'Cybersecurity firm protecting businesses from digital threats',
      industry: 'Cybersecurity',
      size: '100-200 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://securenet.id',
      verified: true
    },
    description: 'Monitor security threats, conduct vulnerability assessments, and implement security measures to protect client systems.',
    requirements: ['3+ years cybersecurity', 'Security certifications', 'Incident response', 'Risk assessment'],
    benefits: ['Security training', 'Certification support', 'Health insurance', 'Bonus structure'],
    salary: {
      min: 20000000,
      max: 35000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: false,
    postedAt: new Date('2024-01-12T13:30:00Z'),
    expiresAt: new Date('2024-02-12T13:30:00Z'),
    skills: ['Network Security', 'Penetration Testing', 'SIEM', 'Incident Response', 'Risk Management']
  },
  {
    id: '11',
    title: 'Sales Executive',
    company: {
      id: 'comp-11',
      name: 'SalesForce Indonesia',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      description: 'Leading CRM and sales automation platform',
      industry: 'Software',
      size: '1000+ employees',
      location: 'Jakarta, Indonesia',
      website: 'https://salesforce.com',
      verified: true
    },
    description: 'Drive new business acquisition and manage client relationships. Exceed sales targets and contribute to company growth.',
    requirements: ['3+ years B2B sales', 'CRM experience', 'Relationship building', 'Target achievement'],
    benefits: ['Commission structure', 'Sales incentives', 'Career progression', 'Training programs'],
    salary: {
      min: 15000000,
      max: 30000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: false,
    postedAt: new Date('2024-01-14T10:15:00Z'),
    expiresAt: new Date('2024-02-14T10:15:00Z'),
    skills: ['B2B Sales', 'CRM', 'Negotiation', 'Lead Generation', 'Account Management']
  },
  {
    id: '12',
    title: 'Graphic Designer',
    company: {
      id: 'comp-12',
      name: 'Visual Arts Studio',
      logo: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=100&h=100&fit=crop',
      description: 'Creative studio specializing in branding and visual identity',
      industry: 'Design',
      size: '10-20 employees',
      location: 'Yogyakarta, Indonesia',
      website: 'https://visualarts.id',
      verified: false
    },
    description: 'Create visual designs for print and digital media. Work on branding projects, marketing materials, and web graphics.',
    requirements: ['2+ years graphic design', 'Adobe Creative Suite', 'Brand design experience', 'Portfolio required'],
    benefits: ['Creative freedom', 'Design software licenses', 'Flexible hours', 'Project variety'],
    salary: {
      min: 9000000,
      max: 16000000,
      currency: 'IDR'
    },
    location: 'Yogyakarta, Indonesia',
    type: 'full-time',
    level: 'entry',
    remote: true,
    postedAt: new Date('2024-01-10T14:20:00Z'),
    expiresAt: new Date('2024-02-10T14:20:00Z'),
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'InDesign', 'Branding', 'Typography']
  },
  {
    id: '13',
    title: 'Business Analyst',
    company: {
      id: 'comp-13',
      name: 'Consulting Partners',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop',
      description: 'Management consulting firm helping businesses optimize operations',
      industry: 'Consulting',
      size: '200-500 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://consultingpartners.id',
      verified: true
    },
    description: 'Analyze business processes, identify improvement opportunities, and support digital transformation initiatives.',
    requirements: ['4+ years business analysis', 'Process mapping', 'Data analysis', 'Stakeholder management'],
    benefits: ['Client exposure', 'Travel opportunities', 'Professional development', 'Performance bonus'],
    salary: {
      min: 18000000,
      max: 28000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: false,
    postedAt: new Date('2024-01-13T16:00:00Z'),
    expiresAt: new Date('2024-02-13T16:00:00Z'),
    skills: ['Business Analysis', 'Process Mapping', 'SQL', 'Excel', 'Stakeholder Management']
  },
  {
    id: '14',
    title: 'QA Engineer',
    company: {
      id: 'comp-14',
      name: 'Quality First',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop',
      description: 'Software testing and quality assurance specialist company',
      industry: 'Software Testing',
      size: '50-100 employees',
      location: 'Bandung, Indonesia',
      website: 'https://qualityfirst.id',
      verified: true
    },
    description: 'Ensure software quality through manual and automated testing. Design test cases and identify bugs before release.',
    requirements: ['3+ years QA experience', 'Test automation tools', 'Bug tracking systems', 'Agile methodology'],
    benefits: ['Testing tools access', 'Certification support', 'Remote work', 'Team collaboration'],
    salary: {
      min: 14000000,
      max: 22000000,
      currency: 'IDR'
    },
    location: 'Bandung, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: true,
    postedAt: new Date('2024-01-11T12:45:00Z'),
    expiresAt: new Date('2024-02-11T12:45:00Z'),
    skills: ['Test Automation', 'Selenium', 'JIRA', 'API Testing', 'Agile Testing']
  },
  {
    id: '15',
    title: 'HR Generalist',
    company: {
      id: 'comp-15',
      name: 'People Solutions',
      logo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&h=100&fit=crop',
      description: 'HR consulting firm providing comprehensive people solutions',
      industry: 'Human Resources',
      size: '100-200 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://peoplesolutions.id',
      verified: true
    },
    description: 'Handle end-to-end HR processes including recruitment, employee relations, and performance management.',
    requirements: ['3+ years HR experience', 'Recruitment expertise', 'Employee relations', 'HR systems knowledge'],
    benefits: ['HR certifications', 'Work-life balance', 'Professional network', 'Career growth'],
    salary: {
      min: 12000000,
      max: 20000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: false,
    postedAt: new Date('2024-01-15T11:30:00Z'),
    expiresAt: new Date('2024-02-15T11:30:00Z'),
    skills: ['Recruitment', 'Employee Relations', 'Performance Management', 'HRIS', 'Labor Law']
  },
  {
    id: '16',
    title: 'Financial Analyst',
    company: {
      id: 'comp-16',
      name: 'FinanceHub',
      logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop',
      description: 'Financial services and investment advisory firm',
      industry: 'Finance',
      size: '200-500 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://financehub.id',
      verified: true
    },
    description: 'Analyze financial data, prepare reports, and support investment decisions. Work with portfolio managers and clients.',
    requirements: ['CFA/Finance degree', '3+ years analysis experience', 'Excel/Financial modeling', 'Market knowledge'],
    benefits: ['CFA support', 'Performance bonus', 'Market data access', 'Professional development'],
    salary: {
      min: 20000000,
      max: 35000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: false,
    postedAt: new Date('2024-01-12T09:20:00Z'),
    expiresAt: new Date('2024-02-12T09:20:00Z'),
    skills: ['Financial Modeling', 'Excel', 'Bloomberg', 'Valuation', 'Risk Analysis']
  },
  {
    id: '17',
    title: 'Social Media Manager',
    company: {
      id: 'comp-17',
      name: 'Social Buzz',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop',
      description: 'Social media marketing agency for lifestyle and fashion brands',
      industry: 'Social Media',
      size: '20-50 employees',
      location: 'Bali, Indonesia',
      website: 'https://socialbuzz.id',
      verified: false
    },
    description: 'Manage social media accounts, create content strategies, and engage with online communities for multiple clients.',
    requirements: ['2+ years social media', 'Content creation skills', 'Analytics tools', 'Trend awareness'],
    benefits: ['Creative projects', 'Bali lifestyle', 'Content tools', 'Flexible schedule'],
    salary: {
      min: 10000000,
      max: 18000000,
      currency: 'IDR'
    },
    location: 'Bali, Indonesia',
    type: 'full-time',
    level: 'entry',
    remote: true,
    postedAt: new Date('2024-01-14T15:10:00Z'),
    expiresAt: new Date('2024-02-14T15:10:00Z'),
    skills: ['Social Media Strategy', 'Content Creation', 'Instagram', 'TikTok', 'Analytics']
  },
  {
    id: '18',
    title: 'Software Architect',
    company: {
      id: 'comp-18',
      name: 'Enterprise Solutions',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      description: 'Enterprise software development and system integration',
      industry: 'Enterprise Software',
      size: '500-1000 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://enterprisesolutions.id',
      verified: true
    },
    description: 'Design and oversee software architecture for large-scale enterprise applications. Lead technical teams and make strategic decisions.',
    requirements: ['8+ years software development', 'Architecture patterns', 'Team leadership', 'Enterprise systems'],
    benefits: ['Technical leadership', 'Architecture training', 'Stock options', 'Flexible work'],
    salary: {
      min: 40000000,
      max: 65000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'executive',
    remote: true,
    postedAt: new Date('2024-01-16T08:00:00Z'),
    expiresAt: new Date('2024-02-16T08:00:00Z'),
    skills: ['Software Architecture', 'Microservices', 'System Design', 'Leadership', 'Enterprise Patterns']
  },
  {
    id: '19',
    title: 'Customer Success Manager',
    company: {
      id: 'comp-19',
      name: 'SaaS Innovations',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
      description: 'SaaS platform providing business automation solutions',
      industry: 'SaaS',
      size: '100-200 employees',
      location: 'Jakarta, Indonesia',
      website: 'https://saasinnovations.id',
      verified: true
    },
    description: 'Ensure customer satisfaction and success with our platform. Drive adoption, retention, and expansion of client accounts.',
    requirements: ['3+ years customer success', 'SaaS experience', 'Account management', 'Data analysis'],
    benefits: ['Customer impact', 'Growth opportunities', 'Remote work', 'Success metrics bonus'],
    salary: {
      min: 16000000,
      max: 26000000,
      currency: 'IDR'
    },
    location: 'Jakarta, Indonesia',
    type: 'full-time',
    level: 'mid',
    remote: true,
    postedAt: new Date('2024-01-13T14:30:00Z'),
    expiresAt: new Date('2024-02-13T14:30:00Z'),
    skills: ['Customer Success', 'Account Management', 'SaaS Metrics', 'Communication', 'Problem Solving']
  },
  {
    id: '20',
    title: 'Machine Learning Engineer',
    company: {
      id: 'comp-20',
      name: 'AI Research Lab',
      logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop',
      description: 'Research and development lab focusing on AI and machine learning',
      industry: 'AI Research',
      size: '50-100 employees',
      location: 'Bandung, Indonesia',
      website: 'https://airesearchlab.id',
      verified: true
    },
    description: 'Develop and deploy machine learning models in production. Work on cutting-edge AI research and applications.',
    requirements: ['5+ years ML experience', 'Deep learning frameworks', 'MLOps knowledge', 'Research background'],
    benefits: ['Research projects', 'Conference funding', 'GPU resources', 'Publication support'],
    salary: {
      min: 30000000,
      max: 50000000,
      currency: 'IDR'
    },
    location: 'Bandung, Indonesia',
    type: 'full-time',
    level: 'senior',
    remote: true,
    postedAt: new Date('2024-01-15T10:00:00Z'),
    expiresAt: new Date('2024-02-15T10:00:00Z'),
    skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'MLOps']
  }
];

export const getCurrentUser = () => ({
  id: 'current-user',
  email: 'user@example.com',
  name: 'Current User',
  isAuthenticated: true
});