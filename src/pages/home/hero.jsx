import './styles/hero.css'

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <h1>Master New Skills</h1>
                <h1>In Just 2 Months</h1>
                <p>No boring theory. Learn with real projects, get hands-on experience, and build your future with industry-expert guidance.</p>
                <button>Start Learning Today<i className="fa-solid fa-arrow-right"></i></button>
                <div className="hero-list">
                    <ul>
                        <li><i className="fa-regular fa-circle-check"></i> Industry-Ready Skills</li>
                        <li><i className="fa-regular fa-circle-check"></i> Expert Mentorship</li>
                        <li><i className="fa-regular fa-circle-check"></i> Lifetime Support</li>
                    </ul>
                </div>
            </div>
            <div className="hero-right">
                <div className="main-img-container">
                    <span className="job-badge">100% Job Support</span>
                    <div className="main-img-wrapper">
                        <img src="/ins1.jpg" alt="Instructor" className="main-img" />
                        <span className="expert-badge">Expert Instructors</span>
                    </div>
                </div>
                <img src="/ins2.jpg" alt="Instructor" className="small-img" />
            </div>
        </div>
    )
}