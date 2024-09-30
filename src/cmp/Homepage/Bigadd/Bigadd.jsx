import { Container } from "react-bootstrap";
import "./Bigadd.css";
const Bigadd = () => {

    const desing = (
        <>
            <div className="video-box">
                <video width="100%" height="100%" autoPlay muted loop>
                    <source src="meeting.mp4" ></source>
                </video>

                <div className="overlay">
                   
                </div>

            </div>
        </>
    );
    return desing;
}

export default Bigadd;