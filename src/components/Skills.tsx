import { FaJava, FaPython, FaReact, FaDatabase, FaDocker, FaAws, FaGitAlt, FaLinux } from 'react-icons/fa'
import { SiSolidity, SiRust, SiSpring, SiPostgresql, SiRedis, SiMysql, SiMongodb, SiKubernetes, SiTerraform, SiGraphql, SiTypescript, SiJavascript, SiGo } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const skills = [
  // 区块链技术
  { name: 'Solidity', icon: SiSolidity, category: 'Blockchain' },
  { name: 'Rust', icon: SiRust, category: 'Blockchain' },
  
  // 后端开发
  { name: 'Java', icon: FaJava, category: 'Backend' },
  { name: 'Spring Boot', icon: SiSpring, category: 'Backend' },
  { name: 'Python', icon: FaPython, category: 'Backend' },
  { name: 'Go', icon: SiGo, category: 'Backend' },
  { name: 'GraphQL', icon: SiGraphql, category: 'Backend' },
  
  // 前端开发
  { name: 'React', icon: FaReact, category: 'Frontend' },
  { name: 'Next.js', icon: TbBrandNextjs, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  
  // 数据库
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'Redis', icon: SiRedis, category: 'Database' },
  { name: 'MySQL', icon: SiMysql, category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  
  // DevOps & 云服务
  { name: 'Docker', icon: FaDocker, category: 'DevOps' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'DevOps' },
  { name: 'AWS', icon: FaAws, category: 'DevOps' },
  { name: 'Terraform', icon: SiTerraform, category: 'DevOps' },
  { name: 'Git', icon: FaGitAlt, category: 'DevOps' },
  { name: 'Linux', icon: FaLinux, category: 'DevOps' },
]

const categories = ['Blockchain', 'Backend', 'Frontend', 'Database', 'DevOps']

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Technical Expertise
        </h2>
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all transform hover:scale-105"
                    >
                      <skill.icon className="text-4xl mb-2 text-blue-400" />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
