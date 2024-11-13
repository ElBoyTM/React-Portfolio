const projects = [
    {
        name: "Project One",
        image: "path/to/project-one-image.jpg",
        link: "https://link-to-project-one.com"
    },
    {
        name: "Project Two",
        image: "path/to/project-two-image.jpg",
        link: "https://link-to-project-two.com"
    },
    {
        name: "Project Three",
        image: "path/to/project-three-image.jpg",
        link: "https://link-to-project-three.com"
    }
];

export default function Project() {
    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.name}</h2>
                    <img src={project.image} alt={project.name} />
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    );
};