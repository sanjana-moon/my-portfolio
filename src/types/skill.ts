export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "Languages"
  | "Others";