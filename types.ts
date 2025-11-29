import { LucideIcon } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  iconColorClass: string;
}

export interface RuleItem {
  title: string;
  icon: LucideIcon;
  items: string[];
  iconColorClass: string;
}

export interface PlanWeek {
  week: string;
  number: number;
  tasks: string[];
  colorTheme: 'blue' | 'green' | 'yellow' | 'red';
}

export interface RiskItem {
  title: string;
  icon: LucideIcon;
  solutions: string[];
  iconColorClass: string;
}