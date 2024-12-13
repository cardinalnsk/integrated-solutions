export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  details: string[];
  status?: string;
}