import './styles/apart.css'

const cards = [
    {
        id: 1,
        icon: '<i class="fa-regular fa-user"></i>',
        head: 'Real Agency Integration',
        para: 'Work directly with Parasya agency on live client campaigns and projects'
    },
    {
        id: 1,
        icon: '<i class="fa-solid fa-bullseye"></i>',
        head: 'Performance Focused',
        para: 'Learn data-driven strategies that deliver measurable business results'
    },
    {
        id: 1,
        icon: '<i class="fa-solid fa-medal"></i>',
        head: 'Career Ready',
        para: 'Graduate with portfolio, experience, and industry connections'
    },
]

export default function Apart() {
    return (
        <div className="apart-container">
            <div className="apart-headings">
                <h3>What Sets Us Apart</h3>
            </div>
            <div className="apart-cards">
                {cards.map((card, index) => (
                    <div className="apart-card" key={index}>
                        <div
                            className="apart-icon"
                            dangerouslySetInnerHTML={{ __html: card.icon }}
                        />
                        <h4>{card.head}</h4>
                        <p>{card.para}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}