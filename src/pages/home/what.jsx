import './styles/what.css'

const cards = [
    {
        id: 1,
        icon: '<i class="fa-solid fa-graduation-cap"></i>',
        head: 'Learn from Real Experts',
        para: 'Get mentored by industry professionals with 10+ years of experience in their fields.'
    },
    {
        id: 2,
        icon: '<i class="fa-solid fa-suitcase"></i>',
        head: 'Practical Training',
        para: 'Work on real projects and build a portfolio that showcases your skills to employers.'
    },
    {
        id: 3,
        icon: '<i class="fa-solid fa-medal"></i>',
        head: 'Industry Certifications',
        para: 'Earn recognized certifications that validate your expertise and boost your career.'
    },
    {
        id: 4,
        icon: '<i class="fa-regular fa-user"></i>',
        head: 'Career Support',
        para: 'Get dedicated placement assistance and lifetime career guidance from our experts.'
    },
    {
        id: 5,
        icon: '<i class="fa-solid fa-brain"></i>',
        head: 'AI-Powered Learning',
        para: 'Experience next-generation learning with AI tools and personalized study paths.'
    },
    {
        id: 6,
        icon: '<i class="fa-solid fa-rocket"></i>',
        head: 'Multiple Career Paths',
        para: 'Whether you want a job, freelance work, or your own business - we prepare you for success.'
    },
]

export default function What() {
    return (
        <div className="what-container">
            <div className="what-headings">
                <h2>What You Get With Parasya</h2>
                <p>At Parasya Academy, we don't just teach theory—we help you build real
                    skills, confidence, and a clear path to success</p>
            </div>
            <div className="cards-grid">
                {cards.map((card) => (
                    <div className="what-card" key={card.id}>
                        <div
                            className="card-icon"
                            dangerouslySetInnerHTML={{ __html: card.icon }}
                        />
                        <h3>{card.head}</h3>
                        <p>{card.para}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}