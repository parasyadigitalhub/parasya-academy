import './styles/learn.css'

export default function Learn() {
    return (
        <div className="learn-container">
            <div className="learn-card">
                <div className="learn-headings">
                    <h4>What You'll Learn & Experience</h4>
                    <p>Complete curriculum designed by industry experts at Parasya agency</p>
                </div>
                <div className="learn-list">
                    <div className="learn-list-left">
                        <ul>
                            <li><i className="fa-solid fa-circle-check"></i>Work with Parasya - Best Performance Marketing Agency</li>
                            <li><i className="fa-solid fa-circle-check"></i>Advanced analytics and conversion optimization</li>
                            <li><i className="fa-solid fa-circle-check"></i>Email marketing automation</li>
                            <li><i className="fa-solid fa-circle-check"></i>A/B testing and data analysis</li>
                        </ul>
                    </div>
                    <div className="learn-list-right">
                        <ul>
                            <li><i className="fa-solid fa-circle-check"></i>Real client projects and live campaigns</li>
                            <li><i className="fa-solid fa-circle-check"></i>Facebook, Google, TikTok, and LinkedIn advertising</li>
                            <li><i className="fa-solid fa-circle-check"></i>Landing page optimization</li>
                            <li><i className="fa-solid fa-circle-check"></i>Agency-level tools and workflows</li>
                        </ul>
                    </div>
                </div>
                <div className="learn-note">
                    <h5>🚀 Exclusive Agency Partnership</h5>
                    <p>You'll work directly with Parasya agency team members, participate in real client meetings, and
                        contribute to live marketing campaigns.
                        This hands-on experience is what sets our course apart from theoretical training programs.</p>
                </div>
            </div>
        </div>
    )
}