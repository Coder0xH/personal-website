import React from 'react'
import { FaEthereum, FaTelegram } from 'react-icons/fa'
import { SiRust, SiWeb3Dotjs } from 'react-icons/si'
import { Project } from '@/types/project'

export const projects: { [key: string]: Project[] } = {
  ton: [
    {
      title: 'MemeJump GameFi Platform',
      description: 'A Play-to-Earn gaming platform built as a Telegram mini-app',
      tech: ['Three.js', 'Spring Boot', 'TON', 'AWS'],
      link: 'https://t.me/memejump_bot/memejump?startapp=GZEMUAGT',
      icon: <FaTelegram className="w-6 h-6" />,
      highlights: [
        'Three.js-powered jump game with Web3 integration',
        'High-concurrency Java Spring Boot backend',
        'Custodial wallet system with V4R2 implementation',
        'Multi-signature wallet system for platform fees'
      ],
      stats: {
        users: '300K+',
        transactions: '1M+',
        volume: '$500K+'
      }
    },
    {
      title: 'MemeShorts Platform',
      description: 'Short video platform built as a Telegram mini-app',
      tech: ['Next.js', 'Spring Boot', 'TON', 'OAuth 2.0'],
      link: 'https://t.me/MemeShorts_bot/memeshort',
      icon: <FaTelegram className="w-6 h-6" />,
      highlights: [
        'Next.js frontend with SSR',
        'Spring Boot microservices',
        'OAuth 2.0 social integration',
        'TON payment system'
      ],
      stats: {
        users: '50K+',
        videos: '100K+',
        daily: '10K+'
      }
    }
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
        'Uniswap integration'
      ],
      stats: {
        tokens: '1K+',
        tvl: '$1M+',
        trades: '50K+'
      }
    }
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
        'Custom transaction construction'
      ],
      stats: {
        optimization: '30%',
        throughput: '1K TPS',
        savings: '$100K+'
      }
    }
  ],
  corporate: [
    {
      title: 'Infa Labs Website',
      description: 'Interactive corporate website showcasing blockchain technology',
      tech: ['Three.js', 'React', 'Tailwind CSS', 'Animation'],
      link: 'https://infalabs.io/',
      icon: <SiWeb3Dotjs className="w-6 h-6" />,
      highlights: [
        'Three.js 3D visualizations',
        'React interactive components',
        'Responsive design',
        'Modern animations'
      ],
      stats: {
        performance: '95+',
        animations: '20+',
        components: '50+'
      }
    }
  ]
}

// 预处理的项目列表，方便页面直接使用
export const blockchainProjects = [...projects.ton, ...projects.ethereum, ...projects.bitcoin]
export const fullStackProjects = [...projects.corporate]
