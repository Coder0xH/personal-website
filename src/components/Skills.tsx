import { FaJava, FaPython, FaReact, FaDatabase } from 'react-icons/fa'
import { SiSolidity, SiRust, SiSpring, SiPostgresql, SiRedis, SiMysql } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const skills = [
  { name: 'Java', icon: FaJava },
  { name: 'Solidity', icon: SiSolidity },
  { name: 'Rust', icon: SiRust },
  { name: 'Python', icon: FaPython },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: TbBrandNextjs },
  { name: 'Spring Boot', icon: SiSpring },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Redis', icon: SiRedis },
  { name: 'MySQL', icon: SiMysql },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              <skill.icon className="text-4xl mb-2 text-blue-400" />
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
