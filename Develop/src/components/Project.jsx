import './Project.css';

const projects = [
    {
        name: "React Portfolio (this website)",
        image: "/photos/ReactPort.png",
        link: "https://github.com/ElBoyTM/React-Portfolio"
    },
    {
        name: "Employee Tracker",
        image: "/photos/EmpTrack.png",
        link: "https://github.com/ElBoyTM/Employee-Tracker-2"
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
                    <a href={project.link} target="_blank" rel="noopener noreferrer" id="projectLink">{project.name}</a>
                    <img src={project.image} alt={project.name} id="projectPhoto" />
                </div>
            ))}
        </div>
    );
};