/**
 * Resume data structure and content.
 * Used for the "Coder Style" resume display.
 */

export interface Project {
  name: string;
  role?: string;
  period?: string;
  techStack: string[];
  description: string;
  responsibilities?: string[];
  link?: string;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description?: string[];
  projects?: Project[];
}

export interface ResumeData {
  profile: {
    name: string;
    title: string;
    age: number;
    email: string;
    phone: string;
    location: string;
    attributes: string[];
  };
  skills: {
    languages: string[];
    blockchain: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };
  experience: Experience[];
  personalProjects: Project[];
}

export const resumeDataEn: ResumeData = {
  profile: {
    name: "Li Fenghao (Dexter)",
    title: "Blockchain Development Engineer",
    age: 29,
    email: "coder0xh@gmail.com",
    phone: "173****1995",
    location: "Shenzhen, China",
    attributes: [
      "Strong proactive thinking and problem-solving abilities",
      "Passionate about new technologies, especially blockchain"
    ]
  },
  skills: {
    languages: ["Java", "Go", "Python", "Solidity", "Rust", "TypeScript/JavaScript"],
    blockchain: ["EVM", "Solana", "TON", "Bitcoin (Runes)", "Smart Contracts", "DeFi"],
    backend: ["Spring Boot", "Spring Cloud", "Gin", "FastAPI", "Node.js"],
    database: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    devops: ["Docker", "Jenkins", "Linux (Ubuntu)", "GitLab/GitHub", "AWS"]
  },
  personalProjects: [
    {
      name: "Quant + Strategy Trading System",
      techStack: ["Python", "FastAPI", "CCXT", "TradingView Webhook"],
      description: "Automated trading system integrating multiple exchange APIs and TradingView signals.",
      responsibilities: [
        "Implemented arbitrage and hedging strategies",
        "Built signal reception via Webhooks"
      ]
    },
    {
      name: "Bitcoin Runes Minter",
      techStack: ["Rust", "Python", "Bitcoin Core"],
      description: "Optimized Runes minting tool reducing costs by 30% through compressed chain minting.",
      responsibilities: [
        "Analyzed Runes source code",
        "Constructed raw transactions in Rust"
      ]
    },
    {
      name: "Solana Batch Transfer Script",
      techStack: ["Rust", "Solana Web3.js"],
      description: "High-performance batch transfer scripts for Solana network."
    },
    {
      name: "EVM Factory Contract Platform",
      techStack: ["Solidity", "Hardhat"],
      description: "Token launch platform using Create2 for deterministic deployment and automatic verification."
    },
    {
      name: "TON Wallet & Bot",
      techStack: ["Java", "TypeScript", "TON SDK"],
      description: "Telegram Bot with integrated non-custodial wallet features."
    }
  ],
  experience: [
    {
      company: "Zoomex Crypto Exchange",
      period: "2025.07 - Present",
      role: "Senior Go/Java Developer",
      description: [
        "Responsible for backend development of exchange features",
        "Developed compliance solutions using Byone framework",
        "Implemented invitation systems and trading competition logic"
      ]
    },
    {
      company: "Shenzhen Yizhanyuan Technology",
      period: "2024.06 - Present",
      role: "Full Stack Developer & Project Manager",
      projects: [
        {
          name: "Ton Short (Short Drama Platform)",
          period: "2024.09 - Present",
          techStack: ["Next.js", "Spring Boot 3.4", "Spring Security", "TON (FunC)", "PostgreSQL"],
          description: "Telegram Mini App for short dramas with crypto payments and social login.",
          responsibilities: [
            "Designed microservices architecture and database schema",
            "Implemented partitioning for large datasets",
            "Developed Telegram Mini App template"
          ]
        },
        {
          name: "TON GameFi Mini App",
          period: "2024.07 - Present",
          techStack: ["React", "Vite", "Spring Boot", "Ton4j", "RabbitMQ", "Redisson"],
          description: "GameFi platform with custodial wallet on TON blockchain.",
          responsibilities: [
            "Architected the entire system from 0 to 1",
            "Optimized on-chain interactions using queues and virtual threads",
            "Implemented multi-sig wallet for fee management",
            "Managed a team of 7 developers"
          ]
        }
      ]
    },
    {
      company: "Nanjing Huasu Technology",
      period: "2023.12 - 2024.06",
      role: "Java Backend Engineer",
      projects: [
        {
          name: "Green Consumption Accounting",
          techStack: ["Spring Cloud", "Nacos", "Redis", "Vue2"],
          description: "National green certificate trading and accounting system.",
          responsibilities: [
            "Developed core business modules and complex SQL optimization",
            "Handled large-scale Excel data import/export",
            "Designed process flows and swimlane diagrams"
          ]
        }
      ]
    },
    {
      company: "Chengdu Zhiyuan Technology",
      period: "2021.01 - 2023.12",
      role: "Java Backend Engineer",
      projects: [
        {
          name: "Chongzhou Urban Management System",
          techStack: ["Spring Boot", "MyBatis", "Redis", "RabbitMQ"],
          description: "Smart city management system for event dispatching and monitoring.",
          responsibilities: [
            "Implemented SSO and third-party data synchronization",
            "Developed full-text search for cases"
          ]
        },
        {
          name: "Chengdu Law Enforcement System",
          techStack: ["Spring Cloud", "Elasticsearch", "MinIO"],
          description: "Comprehensive administrative law enforcement management platform.",
          responsibilities: [
            "Implemented distributed file storage with MinIO (multipart upload)",
            "Developed patrol module using Quartz scheduler"
          ]
        }
      ]
    },
    {
      company: "Shanxi Shuolian Electronic Technology",
      period: "2020.04 - 2020.11",
      role: "Java Backend Developer",
      projects: [
        {
          name: "Qianyi Finance",
          techStack: ["Spring Cloud Alibaba", "MyBatis Plus", "Aliyun OSS/SMS"],
          description: "Online lending information intermediary service platform.",
          responsibilities: [
            "Implemented SMS service and OSS file storage",
            "Handled material audit workflow"
          ]
        }
      ]
    }
  ]
};

export const resumeDataZh: ResumeData = {
  profile: {
    name: "李丰豪 (Dexter)",
    title: "区块链开发工程师",
    age: 29,
    email: "coder0xh@gmail.com",
    phone: "173****1995",
    location: "中国 深圳",
    attributes: [
      "拥有很强的主动思考能力和解决问题的能力",
      "非常喜欢新技术，特别是区块链技术"
    ]
  },
  skills: {
    languages: ["Java", "Go", "Python", "Solidity", "Rust", "TypeScript/JavaScript"],
    blockchain: ["EVM", "Solana", "TON", "Bitcoin (Runes)", "Smart Contracts", "DeFi"],
    backend: ["Spring Boot", "Spring Cloud", "Gin", "FastAPI", "Node.js"],
    database: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    devops: ["Docker", "Jenkins", "Linux (Ubuntu)", "GitLab/GitHub", "AWS"]
  },
  personalProjects: [
    {
      name: "量化 + 策略交易系统",
      techStack: ["Python", "FastAPI", "CCXT", "TradingView Webhook"],
      description: "集成多交易所 API 和 TradingView 信号的自动化交易系统。",
      responsibilities: [
        "实现期现对冲和价差套利策略",
        "通过 Webhook 接收交易信号"
      ]
    },
    {
      name: "Bitcoin Runes 铭文铸造器",
      techStack: ["Rust", "Python", "Bitcoin Core"],
      description: "优化的 Runes 铸造工具，通过压缩链式铸造将成本降低 30%。",
      responsibilities: [
        "分析 Runes 源代码",
        "使用 Rust 构建原始交易信息"
      ]
    },
    {
      name: "Solana 批量转账脚本",
      techStack: ["Rust", "Solana Web3.js"],
      description: "Solana 网络的高性能批量转账脚本，支持自定义业务逻辑。"
    },
    {
      name: "EVM 工厂合约平台",
      techStack: ["Solidity", "Hardhat"],
      description: "使用 Create2 实现确定性部署和自动验证的代币发行平台。"
    },
    {
      name: "TON 钱包与机器人",
      techStack: ["Java", "TypeScript", "TON SDK"],
      description: "集成非托管钱包功能的 Telegram 机器人。"
    }
  ],
  experience: [
    {
      company: "Zoomex交易所",
      period: "2025.07 - 至今",
      role: "高级 Go/Java 开发工程师",
      description: [
        "负责交易所功能的后端开发",
        "使用 Byone 框架开发合规方案",
        "实现邀请系统和交易大赛逻辑"
      ]
    },
    {
      company: "深圳亿展缘科技公司",
      period: "2024.06 - 至今",
      role: "全栈开发 & 项目经理",
      projects: [
        {
          name: "Ton Short (短剧平台)",
          period: "2024.09 - 至今",
          techStack: ["Next.js", "Spring Boot 3.4", "Spring Security", "TON (FunC)", "PostgreSQL"],
          description: "Telegram 小程序短剧平台，支持加密支付和社交登录。",
          responsibilities: [
            "设计微服务架构和数据库方案",
            "实现大数据量表的分区设计",
            "开发 Telegram 小程序模版"
          ]
        },
        {
          name: "TON GameFi 小程序",
          period: "2024.07 - 至今",
          techStack: ["React", "Vite", "Spring Boot", "Ton4j", "RabbitMQ", "Redisson"],
          description: "基于 TON 区块链的 GameFi 平台，包含托管钱包功能。",
          responsibilities: [
            "从 0 到 1 架构整个系统技术栈",
            "使用队列和虚拟线程优化链上交互",
            "实现多签钱包进行费用管理",
            "管理 7 人开发团队"
          ]
        }
      ]
    },
    {
      company: "南京华苏科技有限公司",
      period: "2023.12 - 2024.06",
      role: "Java 后端工程师",
      projects: [
        {
          name: "绿色消费核算全覆盖",
          techStack: ["Spring Cloud", "Nacos", "Redis", "Vue2"],
          description: "全国绿证交易和核算系统。",
          responsibilities: [
            "开发核心业务模块和复杂 SQL 优化",
            "处理大规模 Excel 数据导入导出",
            "设计业务流程图和泳道图"
          ]
        }
      ]
    },
    {
      company: "成都智愿科技有限公司",
      period: "2021.01 - 2023.12",
      role: "Java 后端工程师",
      projects: [
        {
          name: "崇州市城市综合管理运行中心",
          techStack: ["Spring Boot", "MyBatis", "Redis", "RabbitMQ"],
          description: "智慧城市事件派发和监控管理系统。",
          responsibilities: [
            "实现 SSO 单点登录和第三方数据同步",
            "开发案件全文搜索功能"
          ]
        },
        {
          name: "成都市综合行政执法管理系统",
          techStack: ["Spring Cloud", "Elasticsearch", "MinIO"],
          description: "综合行政执法管理平台。",
          responsibilities: [
            "使用 MinIO 实现分布式文件存储（分片上传）",
            "使用 Quartz 开发巡查模块"
          ]
        }
      ]
    },
    {
      company: "山西硕联电子科技股份有限公司",
      period: "2020.04 - 2020.11",
      role: "Java 后端开发",
      projects: [
        {
          name: "仟仡金融",
          techStack: ["Spring Cloud Alibaba", "MyBatis Plus", "Aliyun OSS/SMS"],
          description: "网络借贷信息中介服务平台。",
          responsibilities: [
            "实现 SMS 短信服务和 OSS 文件存储",
            "处理材料审核工作流"
          ]
        }
      ]
    }
  ]
};
