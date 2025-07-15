import './styles/team.css'

const team = [
    {
        id: 1,
        icon: '<i class="fa-solid fa-bullseye"></i>',
        name: 'Ashwin',
        position: 'Founder',
        para: 'Visionary leader with extensive experience in performance marketing and digital strategy.'
    },
    {
        id: 2,
        icon: '<i class="fa-regular fa-user"></i>',
        name: 'Rishan',
        position: 'Lead Mentor',
        para: 'Performance marketing expert with proven track record in scaling campaigns.'
    },
    {
        id: 3,
        icon: '<i class="fa-solid fa-medal"></i>',
        name: 'Reema',
        position: 'Mentor',
        para: 'Digital marketing specialist focused on conversion optimization and analytics.'
    },
    {
        id: 4,
        icon: '<i class="fa-solid fa-heart"></i>',
        name: 'Dart Coder',
        position: 'Technical Mentor',
        para: 'Full-stack developer and technical architect for marketing automation.'
    },
]

export default function Team() {
    return (
        <div className="team-container">
            <div className="team-headings">
                <h3>Meet Our Expert Team</h3>
                <p>Industry professionals dedicated to your success.
                    Our mentors bring real-world agency experience directly to your learning journey.</p>
            </div>
            <div className="team-cards">
                {team.map(member => (
                    <div className="team-card" key={member.id}>
                        <div className="team-icon" dangerouslySetInnerHTML={{ __html: member.icon }} />
                        <h4>{member.name}</h4>
                        <h5>{member.position}</h5>
                        <p>{member.para}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}