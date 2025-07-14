import './styles/ready.css'

export default function Ready() {
    return (
        <div className="ready-container">
            <div className="ready-card">
                <div className="ready-headings">
                    <h3>Ready to Transform Your Career?</h3>
                    <p>Join thousands of successful graduates who
                        launched their careers with Parasya Academy. Your journey to professional excellence starts here.</p>
                </div>
                <button>Start Your Journey Today<i className="fa-solid fa-arrow-right"></i></button>

                <div className="ready-border"></div>

                <h5>Get in Touch</h5>

                <div className="ready-contact">
                    <div className="ready-phone">
                        <i className="fa-solid fa-phone"></i>
                        <div className="ready-phone-details">
                            <h6>Call Us</h6>
                            <p>+91 9447985763</p>
                        </div>
                    </div>
                    <div className="ready-email">
                        <i className="fa-solid fa-envelope"></i>
                        <div className="ready-email-details">
                            <h6>Email Us</h6>
                            <p>hello@parasyaacademy.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}