

function Navbar(){

    return(
        <>
            <div className="navbar">

        <div className="navbar__s1">

            <h1 className="navbar__s1__tittle">Udemy</h1>

        </div>

        <div className="navbar__s2">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search anything for Business, Tech, Art..."/>




        </div>

        <div className="navbar__s3">

            <p>Trending courses</p>
            <div className="mylearnings">
            <p>My Learning</p>
            <div className="mylearnings__popup">
                <p>you did not purchase anything yet</p>
            </div>
            </div>
            <i className="fa-solid fa-cart-shopping" style={{color: "rgb(3, 12, 29)"}}></i>
            <i className="fa-solid fa-bell" style={{color: "rgb(0, 3, 8)"}}></i>
            <i className="fa-solid fa-circle-user" style={{color: "rgb(0, 3, 8)"}}></i>
            
        </div>

        <div className="menubar">
                <i className="fa-solid fa-bars" style={{color: "rgb(0, 3, 8)"}}></i>
            </div>
    </div>

        </>

    )
}

export default Navbar