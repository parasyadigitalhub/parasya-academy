import './styles/form.css'

const cards = [
    {
        id: 1,
        icon: '<i class="fa-solid fa-envelope"></i>',
        head: 'Email Us',
        para1: 'hello@parasyaacademy.com',
        para2: 'We will respond within 24 hours'
    },
    {
        id: 2,
        icon: '<i class="fa-solid fa-phone"></i>',
        head: 'Call Us',
        para1: '+91 9447985763',
        para2: 'Mon-Fri 9AM-6PM IST'
    },
    {
        id: 3,
        icon: '<i class="fa-solid fa-clock"></i>',
        head: 'Office Hours',
        para1: 'Monday - Friday',
        para2: '9:00 AM - 6:00 PM IST'
    },
]

export default function Form() {
    return (
        <div className="form-container">
            <div className="form-left">
                <h5 className="form-left-heading">Send us a Message</h5>
                <form className="form-contact-form">
                    <div className="form-form-row">
                        <div className="form-form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" placeholder="First Name" required />
                        </div>
                        <div className="form-form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="form-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" required />
                    </div>
                    <div className="form-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="form-form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Message" rows="4" required></textarea>
                    </div>
                    <button type="submit">
                        Send Message <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
            </div>

            <div className="form-right">
                <div className="form-right-headings">
                    <h4>Get in Touch</h4>
                    <p>Ready to transform your career with performance marketing? Contact us today to
                        learn more about our programs and how we can help you achieve your goals.</p>
                </div>
                <div className="form-right-cards">
                    {cards.map(card => (
                        <div className="form-card" key={card.id}>
                            <div className="form-card-icon" dangerouslySetInnerHTML={{ __html: card.icon }} />
                            <div className="form-card-content">
                                <h5>{card.head}</h5>
                                <p>{card.para1}</p>
                                <p>{card.para2}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="form-right-que">
                    <h5>Ready to Start?</h5>
                    <p>Schedule a free consultation to discuss your career goals and find the perfect course for you.</p>
                    <button className="form-schedule-btn">Schedule Free Consultation</button>
                </div>
            </div>
        </div>
    )
}