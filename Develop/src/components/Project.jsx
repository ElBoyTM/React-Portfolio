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
        name: "Weather Dashboard",
        image: "/photos/WeatherDash.png",
        link: "https://github.com/ElBoyTM/Weather-Dashboard"
    },
    {
        name: "Vehicle Builder",
        image: "/photos/Vehicle.png",
        link: "https://github.com/ElBoyTM/vehicles"
    },
    {
        name: "README Generator",
        image: "/photos/README.png",
        link: "https://github.com/ElBoyTM/README-Generator"
    },
    {
        name: "Phoebe's Flowers (group project)",
        image: "/photos/Phoebe.png",
        link: "https://github.com/ElBoyTM/Phoebe-s-Flowers"
    },
    {
        name: "Candidate Search",
        image: "/photos/CandidateSearch.png",
        link: "https://github.com/ElBoyTM/Candidate-Search"
    },
    {
        name: "Kanban Board",
        image: "/photos/Kanban.png",
        link: "https://github.com/ElBoyTM/Kanban-Board"
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