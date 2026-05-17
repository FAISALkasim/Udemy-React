import cc1 from "../assets/images/cc1.jpg"
import cc2 from "../assets/images/cc2.jpg"
import cc3 from "../assets/images/cc3.jpg"
import cc4 from "../assets/images/cc4.jpg"
import cc5 from "../assets/images/cc5.jpg"
import cc6 from "../assets/images/cc6.jpg"
import cc7 from "../assets/images/cc7.jpg"
import cc8 from "../assets/images/cc8.jpg"




function Popular(){

    return(
        <div>
             <div className="popular">
        <h1>Most popular</h1>
        <p>pick the best fit</p>
        <div className="popular__container">
            <div className="course__card">
                <img src={cc1} alt="Recomended image"/>
                <h3>Ethical hacking</h3>
                <p>Michal</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={cc2} alt="Recomended image"/>
                <h3>IT Infrastracture</h3>
                <p>james</p>
                <p>3.9⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={cc3} alt="Recomended image"/>
                <h3>Networking & CCNA</h3>
                <p>tim bernes lee</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={cc4} alt="Recomended image"/>
                <h3>Web Development course</h3>
                <p>james gosling</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={cc5} alt="Recomended image"/>
                <h3>Amazon web service</h3>
                <p>sundar</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={cc6} alt="Recomended image"/>
                <h3>Mern stack Development</h3>
                <p>John</p>
                <p>3.9⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={cc7} alt="Recomended image"/>
                <h3>MEAN stack Development</h3>
                <p>david john</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={cc8} alt="Recomended image"/>
                <h3>APP Development</h3>
                <p>col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>


        </div>
    </div>

        </div>
    )
}

export default Popular