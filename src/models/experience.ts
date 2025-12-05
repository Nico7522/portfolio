export interface Experience {
  title: string;
  subtitle: string;
  paragraphsDescription: {
    technologies: string;
    deployment: string;
    functionalities: string;
  };
  image: string;
  alt: string;
  link?: string;
  githhubLink?: string;
}
