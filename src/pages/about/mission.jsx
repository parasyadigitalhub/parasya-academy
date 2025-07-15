import './styles/mission.css'

export default function Mission() {
    return (
        <div className="mission-container">
            <div className="mission-cards">
                <div className="mission-cards-left">
                    <i className="fa-solid fa-bullseye"></i>
                    <h3>Our Mission</h3>
                    <p>To revolutionize digital marketing education by providing hands-on, agency-integrated
                        learning experiences that prepare students for immediate success in the performance marketing industry.</p>
                </div>
                <div className="mission-cards-right">
                    <i className="fa-solid fa-medal"></i>
                    <h3>Our Vision</h3>
                    <p>To become the leading performance marketing academy
                        that creates industry-ready professionals through innovative, practical education and direct agency partnerships.</p>
                </div>
            </div>
        </div>
    )
}