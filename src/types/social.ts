export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  phone?: string;
  resumeUrl?: string;
}