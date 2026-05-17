import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
import c1 from "../assets/images/c1.jpg"

function Recomended(){

    return(
        <div>
              <div className="Recomended">
        <h1>Recomended for you</h1>
        <p>pick the best fit</p>
        <div class="Recomended__container">

            <div class="course__card">
                <img src={c2} alt="Recomended image"/>
                <h3>Ethical hacking</h3>
                <p>Michal</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={c3} alt="Recomended image"/>
                <h3>IT Infrastracture</h3>
                <p>james</p>
                <p>3.9⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={c4} alt="Recomended image"/>
                <h3>Networking & CCNA</h3>
                <p>tim bernes lee</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={c1} alt="Recomended image"/>
                <h3>Web Development course</h3>
                <p>james gosling</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999 <del>1499</del></p>
            </div>




        </div>

    </div>

        </div>
    )
}


export default Recomended