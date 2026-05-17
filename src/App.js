import Navbar from "./components/Navbar"
import Catagories from "./components/Catagories"
import SaleImage from "./components/SaleImage"
import Recomended from "./components/Recomended"
import Topics from "./components/Topics"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App(){

  return(<>
  <Navbar></Navbar>
  <Catagories></Catagories>
  <SaleImage></SaleImage>
  <Recomended></Recomended>
  <Topics></Topics>
  <Popular></Popular>
  <Footer></Footer>
  </>)
}

export default App