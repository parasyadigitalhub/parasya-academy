import { useState } from 'react';
import './styles/form.css';

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
];

const courses = [
    {
        id: 1,
        name: 'Performance Marketing Mastery'
    },
    {
        id: 2,
        name: 'Agency Integrated Marketing'
    },
    {
        id: 3,
        name: 'Digital Strategy'
    },
]

export default function Form() {

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzjug5ZxGnWuQCsTtHyf86B15uLf_V4JgybbU8Mgn5x2FXLZSb0AXL6onWcom3vJWGp/exec'

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData.course.trim()) newErrors.course = 'Course is required';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsLoading(true);
            try {
                const fullName = `${formData.firstName} ${formData.lastName}`;
                const submissionData = new FormData();
                submissionData.append('name', fullName);
                submissionData.append('email', formData.email);
                submissionData.append('phone', formData.phone);
                submissionData.append('course', formData.course);

                const response = await fetch(scriptUrl, {
                    method: 'POST',
                    body: submissionData,
                });

                if (response.ok) {
                    alert('Message sent successfully!');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        course: ''
                    });
                    setErrors({});
                } else {
                    alert('Failed to send message. Please try again later.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('An error occurred. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="form-container">
            <div className="form-left">
                <h5 className="form-left-heading">Send us a Message</h5>
                <form className="form-contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-form-row">
                        <div className="form-form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <small className="form-error">{errors.firstName}</small>}
                        </div>
                        <div className="form-form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <small className="form-error">{errors.lastName}</small>}
                        </div>
                    </div>

                    <div className="form-form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <small className="form-error">{errors.email}</small>}
                    </div>

                    <div className="form-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <small className="form-error">{errors.phone}</small>}
                    </div>

                    <div className="form-form-group">
                        <label htmlFor="course">Select Course</label>
                        <select
                            id="course"
                            value={formData.course}
                            onChange={handleChange}
                        >
                            <option value="">-- Choose a course --</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.name}>
                                    {course.name}
                                </option>
                            ))}
                        </select>
                        {errors.course && <small className="form-error">{errors.course}</small>}
                    </div>

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? <div className="loader"></div> : <>Send Message <i className="fa-solid fa-paper-plane"></i></>}
                    </button>
                </form>
            </div>

            <div className="form-right">
                <div className="form-right-headings">
                    <h4>Get in Touch</h4>
                    <p>
                        Ready to transform your career with performance marketing? Contact us today to
                        learn more about our programs and how we can help you achieve your goals.
                    </p>
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
                    <p>
                        Schedule a free consultation to discuss your career goals and find the perfect course for you.
                    </p>
                    <p>
                        <a
                            href="https://wa.me/919447985763"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="form-schedule-btn"
                        >
                            Schedule Free Consultation
                        </a>
                    </p>
                    {/* <button className="form-schedule-btn">Schedule Free Consultation</button> */}
                </div>
            </div>
        </div>
    );
}
