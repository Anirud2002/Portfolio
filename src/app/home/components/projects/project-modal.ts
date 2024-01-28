export interface Project {
    title: string,
    description: string,
    technologies: string[];
    githubLink?: string,
    link: string,
    bgColor: string | 'primary',
    associatedWith?: string
}