import { PrismaClient, ProjectCategory } from '@prisma/client'
import { projects } from '../src/data/projects'
import React from 'react'

const prisma = new PrismaClient()

async function main() {
  // 清空现有数据
  await prisma.project.deleteMany()

  // 转换并插入数据
  for (const category in projects) {
    for (const project of projects[category]) {
      await prisma.project.create({
        data: {
          name: project.title.toLowerCase().replace(/ /g, '-'),
          title: project.title,
          description: project.description,
          category: category.toUpperCase() as ProjectCategory,
          tech_stack: project.tech.join(','),
          link: project.link || null,
          icon_name: project.icon.toString(),
          highlights: project.highlights.join('\n'),
          metrics: project.stats,
          priority: 0
        }
      })
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })