import './styles/launch.css'
import { useNavigate } from 'react-router-dom';

export default function Launch() {
    const navigate = useNavigate();
    return (
        <div className="launch-container">
            <div className="launch-headings">
                <h3>Ready to Launch Your Marketing Career?</h3>
                <p>Join the next batch and start working with industry professionals immediately.</p>
            </div>
            <div className="launch-buttons">
                <button onClick={() => navigate('/contact')}>Apply for Next Batch<i class="fa-solid fa-arrow-right"></i></button>
                <button>Schedule a Call</button>
            </div>
        </div>
    )
}