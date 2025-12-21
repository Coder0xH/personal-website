import { useLanguage } from '@/lib/context/LanguageContext';
import { skills as initialSkills } from '@/data/skills';
import { projects as initialProjects } from '@/data/projects';
import type { SkillCategory } from '@/types/skill';
import type { Project } from '@/types/project';
import type { ReactNode } from 'react';

// Re-define ProjectWithIcon locally since it's not exported from data/projects.tsx
interface ProjectWithIcon extends Omit<Project, 'icon'> {
    icon: ReactNode;
}

export function useSkillsData() {
    const { t } = useLanguage();

    const localizedSkills: SkillCategory[] = initialSkills.map((category) => {
        // Determine the key based on category name (simplified)
        // Mapping: "Blockchain Development" -> "blockchain", "Backend Development" -> "backend", etc.
        // Ideally, we should probably add ids to the original data, but mapping by index or checking content is a workaround.
        // Let's use a cleaner approach: matching strictly by the known order or name mapping.

        let categoryKey = '';
        if (category.category.includes('Blockchain')) categoryKey = 'blockchain';
        else if (category.category.includes('Backend')) categoryKey = 'backend';
        else if (category.category.includes('Frontend')) categoryKey = 'frontend';
        else if (category.category.includes('Database')) categoryKey = 'database';
        else if (category.category.includes('DevOps')) categoryKey = 'devops';

        if (!categoryKey) return category;

        const translatedCategory = t(`skills.${categoryKey}.category`);
        const translatedDesc = t(`skills.${categoryKey}.description`);

        const localizedItems = category.items.map((item) => {
            let itemKey = '';
            if (item.name.includes('Solidity')) itemKey = 'solidity';
            else if (item.name.includes('Web3')) itemKey = 'web3';
            else if (item.name.includes('Solana')) itemKey = 'rust'; // "Rust/Solana" in json
            else if (item.name.includes('DeFi')) itemKey = 'defi';

            else if (item.name === 'Java/Spring Boot') itemKey = 'java';
            else if (item.name === 'Python') itemKey = 'python';
            else if (item.name === 'Rust') itemKey = 'rust';
            else if (item.name === 'Go') itemKey = 'go';

            else if (item.name === 'React') itemKey = 'react';
            else if (item.name === 'Next.js') itemKey = 'next';
            else if (item.name === 'TypeScript') itemKey = 'typescript';
            else if (item.name === 'JavaScript') itemKey = 'javascript';

            else if (item.name === 'PostgreSQL') itemKey = 'postgresql';
            else if (item.name === 'Redis') itemKey = 'redis';
            else if (item.name === 'MySQL') itemKey = 'mysql';
            else if (item.name === 'MongoDB') itemKey = 'mongodb';

            else if (item.name === 'Docker') itemKey = 'docker';
            else if (item.name === 'Kubernetes') itemKey = 'kubernetes';
            else if (item.name === 'AWS') itemKey = 'aws';
            else if (item.name === 'Terraform') itemKey = 'terraform';
            else if (item.name === 'Linux') itemKey = 'linux';

            return {
                ...item,
                name: itemKey ? t(`skills.${categoryKey}.${itemKey}`) : item.name,
            };
        });

        return {
            ...category,
            category: translatedCategory,
            description: translatedDesc,
            items: localizedItems,
        };
    });

    return localizedSkills;
}

export function useProjectsData() {
    const { t } = useLanguage();

    const localizeProject = (project: ProjectWithIcon, key: string) => {
        return {
            ...project,
            title: t(`projects.${key}.title`),
            description: t(`projects.${key}.description`),
            highlights: (t(`projects.${key}.highlights`) as unknown as string[]), // Type assertion since t() returns string
        };
    };

    // We need to map the initial projects to their keys.
    // Since initialProjects is an object with arrays, we recreate the object.
    const localizedProjects = {
        ton: initialProjects.ton.map((p) => {
            if (p.title.includes('MemeJump')) return localizeProject(p, 'memejump');
            if (p.title.includes('MemeShorts')) return localizeProject(p, 'memeshorts');
            return p;
        }),
        ethereum: initialProjects.ethereum.map((p) => {
            if (p.title.includes('Saluki')) return localizeProject(p, 'saluki');
            return p;
        }),
        bitcoin: initialProjects.bitcoin.map((p) => {
            if (p.title.includes('Runes')) return localizeProject(p, 'runes');
            return p;
        }),
        corporate: initialProjects.corporate.map((p) => {
            if (p.title.includes('Infa Labs')) return localizeProject(p, 'infalabs');
            return p;
        }),
    };

    return localizedProjects;
}
