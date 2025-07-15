import './styles/choose.css'

const cards = [
    {
        id: 1,
        icon: '<i class="fa-solid fa-bullseye"></i>',
        head: 'Real Agency Experience',
        para: 'Work directly with Parasya agency on live client campaigns'
    },
    {
        id: 2,
        icon: '<i class="fa-solid fa-chart-column"></i>',
        head: 'Performance Focused',
        para: 'Learn data-driven marketing that delivers measurable results'
    },
    {
        id: 3,
        icon: '<i class="fa-solid fa-bolt"></i>',
        head: 'Industry Tools',
        para: 'Master professional tools used by top marketing agencies'
    },
    {
        id: 4,
        icon: '<i class="fa-solid fa-medal"></i>',
        head: 'Career Ready',
        para: 'Graduate with portfolio and agency experience for immediate employment'
    },
]

export default function Choose() {
    return (
        <div className="choose container">
            <div className="choose-headings">
                <h3>Why Choose Our Performance Marketing Course?</h3>
                <p>This isn't just another marketing course. You'll work
                    alongside Parasya agency professionals on real campaigns.</p>
            </div>
            <div className="choose-cards">
                {cards.map(card => (
                    <div className="choose-card" key={card.id}>
                        <div
                            className="choose-icon"
                            dangerouslySetInnerHTML={{ __html: card.icon }}
                        />
                        <h4>{card.head}</h4>
                        <p>{card.para}</p>
                    </div>
                ))}
            </div>        </div>
    )
}