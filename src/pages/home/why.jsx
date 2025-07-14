import './styles/why.css'

export default function Why() {
    return (
        <div className="why-container">
            <div className="why-headings">
                <h2>Why Choose Parasya Academy?</h2>
                <p>Here's what makes us different from other training institutes</p>
            </div>
            <div className="why-cards">
                <div className="why-card-left">
                    <h4><i class="fa-solid fa-xmark"></i>Other Courses</h4>
                    <ul>
                        <li><i class="fa-solid fa-xmark"></i>Only theoretical knowledge without practical application</li>
                        <li><i class="fa-solid fa-xmark"></i>Generic curriculum not updated with industry trends</li>
                        <li><i class="fa-solid fa-xmark"></i>Limited support after course completion</li>
                        <li><i class="fa-solid fa-xmark"></i>No real portfolio or project experience</li>
                    </ul>
                </div>
                <div className="why-card-right">
                    <h4><i class="fa-solid fa-check"></i>Parasya Academy</h4>
                    <ul>
                        <li><i class="fa-solid fa-check"></i>Hands-on learning with real projects and live client work</li>
                        <li><i class="fa-solid fa-check"></i>Industry-current curriculum designed by working professionals</li>
                        <li><i class="fa-solid fa-check"></i>Lifetime career support and placement assistance</li>
                        <li><i class="fa-solid fa-check"></i>Build a professional portfolio that impresses employers</li>
                    </ul>
                </div>
            </div>
            <div className="why-ready">
                <p><span></span>Ready to start your transformation?</p>
            </div>
        </div>
    )
}