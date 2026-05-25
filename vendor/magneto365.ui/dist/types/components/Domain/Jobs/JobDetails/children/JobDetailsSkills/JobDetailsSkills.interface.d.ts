import { ISkill } from '@components/UI/atoms';

declare type Skill = ISkill & {
    id: number | string;
};
interface IJobDetailsSkills {
    className?: string;
    children?: React.ReactNode;
    skills: Skill[];
}

export { IJobDetailsSkills };
