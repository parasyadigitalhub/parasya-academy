import './styles/first.css'
import { useNavigate } from 'react-router-dom';

const cards = [
    {
        id: 1,
        icon: '<i class="fa-solid fa-clock"></i>',
        head: 'Duration',
        para: '2 Months'
    },
    {
        id: 1,
        icon: '<i class="fa-regular fa-user"></i>',
        head: 'Batch Size',
        para: '10 Students'
    },
    {
        id: 1,
        icon: '<i class="fa-solid fa-medal"></i>',
        head: 'Certification',
        para: 'Agency Level'
    },

]

export default function First() {
    const navigate = useNavigate();
    return (
        <div className="first-container">
            <div className="first-badge">
                <p><i className="fa-solid fa-chart-line"></i> Agency Integrated Marketing</p>
            </div>
            <div className="first-headings">
                <h2>Performance Marketing <br />
                    Mastery</h2>
                <p>Master performance marketing by working directly with Parasya,
                    the best performance marketing agency. Get real agency experience in just 2 months.</p>
            </div>
            <div className="first-buttons">
                <button onClick={() => navigate('/contact')}>Enroll Now - Limited Seats<i className="fa-solid fa-arrow-right"></i></button>
                <a href="/Parasya Academy Performance Marketing Module.pdf" target="_blank"
                    rel="noopener noreferrer" className="download-btn">
                    <button>Download Curriculum</button>
                </a>            </div>
            <div className="first-cards">
                {cards.map((card, index) => (
                    <div key={index} className="first-card">
                        <div className="first-card-icon" dangerouslySetInnerHTML={{ __html: card.icon }} />
                        <div className="first-card-content">
                            <h4>{card.head}</h4>
                            <p>{card.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}