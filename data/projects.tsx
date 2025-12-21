import { FaEthereum, FaTelegram, FaCode } from 'react-icons/fa';
import { SiRust, SiWeb3Dotjs, SiFastapi, SiGo } from 'react-icons/si';
import type { Project } from '@/types/project';
import type { ReactNode } from 'react';

// Extended project type with ReactNode icon for rendering
interface ProjectWithIcon extends Omit<Project, 'icon'> {
  icon: ReactNode;
}

interface ProjectsByCategory {
  ton: ProjectWithIcon[];
  ethereum: ProjectWithIcon[];
  bitcoin: ProjectWithIcon[];
  corporate: ProjectWithIcon[];
  backend: ProjectWithIcon[];
}

export const projects: ProjectsByCategory = {
  ton: [
    {
      title: 'MemeJump GameFi Platform',
      description: 'A Play-to-Earn gaming platform built as a Telegram mini-app',
      tech: ['Three.js', 'Spring Boot', 'TON', 'AWS'],
      link: 'https://t.me/memejump_bot/memejump?startapp=GZEMUAGT',
      icon: <FaCode className="w-6 h-6" />,
      highlights: [
        'Three.js-powered jump game with Web3 integration',
        'High-concurrency Java Spring Boot backend',
        'Custodial wallet system with V4R2 implementation',
        'Multi-signature wallet system for platform fees',
      ],
      stats: {
        users: '300K+',
        transactions: '1M+',
        volume: '$500K+',
      },
    },
    {
      title: 'MemeShorts Platform',
      description: 'Short video platform built as a Telegram mini-app',
      tech: ['Next.js', 'Spring Boot', 'TON', 'OAuth 2.0'],
      link: 'https://t.me/MemeShorts_bot/memeshort',
      icon: <FaCode className="w-6 h-6" />,
      highlights: [
        'Next.js frontend with SSR',
        'Spring Boot microservices',
        'OAuth 2.0 social integration',
        'TON payment system',
      ],
      stats: {
        users: '50K+',
        videos: '100K+',
        daily: '10K+',
      },
    },
  ],
  ethereum: [
    {
      title: 'Saluki Token Platform',
      description: 'Token minting platform with advanced smart contracts',
      tech: ['Solidity', 'Hardhat', 'Create2', 'Uniswap'],
      link: 'https://saluki.me/',
      icon: <FaEthereum className="w-6 h-6" />,
      highlights: [
        'Custom Solidity smart contracts',
        'Factory contract with Create2',
        'Automated contract verification',
        'Uniswap integration',
      ],
      stats: {
        tokens: '1K+',
        tvl: '$1M+',
        trades: '50K+',
      },
    },
  ],
  bitcoin: [
    {
      title: 'Runes Optimization System',
      description: 'Advanced Runes transaction optimization system',
      tech: ['Rust', 'Python', 'Bitcoin', 'Chain-mint'],
      link: 'https://github.com/Coder0xH',
      icon: <SiRust className="w-6 h-6" />,
      highlights: [
        'Rust implementation of chain-mint',
        '30% cost reduction in minting',
        'Batch processing optimization',
        'Custom transaction construction',
      ],
      stats: {
        optimization: '30%',
        throughput: '1K TPS',
        savings: '$100K+',
      },
    },
  ],
  corporate: [
    {
      title: 'Infa Labs Website',
      description: 'Interactive corporate website showcasing blockchain technology',
      tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      link: 'https://infalabs.io/',
      icon: <SiWeb3Dotjs className="w-6 h-6" />,
      highlights: [
        'Immersive 3D background with Three.js',
        'Responsive and interactive UI',
        'Modern design with glassmorphism',
        'Performance optimized animations',
      ],
      stats: {
        visitors: '10K+',
        performance: '98/100',
        uptime: '99.9%',
      },
    },
  ],
  backend: [
    {
      title: 'FastAPI Scaffold',
      description: 'Modern FastAPI scaffold with Auth, WebSocket, and Redis',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSocket'],
      link: 'https://github.com/Coder0xH/fastapi-scaffold',
      icon: <SiFastapi className="w-6 h-6" />,
      highlights: [
        'User Auth with JWT & TOTP',
        'Async Database & Redis integration',
        'WebSocket with broadcast support',
        'Docker-ready architecture',
      ],
      stats: {
        stars: '100+',
        forks: '20+',
        coverage: '90%',
      },
    },
    {
      title: 'Go Microservice Scaffold',
      description: 'DDD-based Go microservice framework with gRPC',
      tech: ['Go', 'gRPC', 'DDD', 'Wire', 'PostgreSQL'],
      link: 'https://github.com/Coder0xH/go-scaffold',
      icon: <SiGo className="w-6 h-6" />,
      highlights: [
        'DDD 4-layer architecture',
        'gRPC service communication',
        'Wallet login & JWT auth',
        'Blockchain event listening',
      ],
      stats: {
        stars: '150+',
        modules: '5+',
        performance: 'High',
      },
    },
  ],
};

// 预处理的项目列表，方便页面直接使用
export const blockchainProjects: ProjectWithIcon[] = [
  ...projects.ton,
  ...projects.ethereum,
  ...projects.bitcoin,
];
export const fullStackProjects: ProjectWithIcon[] = [...projects.corporate];

