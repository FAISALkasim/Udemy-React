import sale from "../assets/images/sale-image.jpg"

function SaleImage(){

    return(
        <>
        <div className="sale-image">

        <img src={sale} alt="sale-image"></img>
        <div className="sale-image__popup">

            <h1>Udemy Flash Sale! 24 Hours to Save</h1>
            <p>Get the top courses for just 999 one day to save but a lifetime to learn</p>

        </div>

    </div>

        </>
    )
}

export default SaleImage


