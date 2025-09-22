interface Project {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  tags: string[];
  date: string;
  github?: string;
  demo? : string;
  stats? : { [key: string]: string };
  category : string;
}