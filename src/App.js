import "./App.css"
import Header from "./components/common/header/Header"
import { Route, Routes  , useLocation} from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import AbouPricingt from "./components/pricing/Pricing"
// import { DarkModeContext } from "./context/darkModeContext";


function App() {


  // const { darkMode } = useContext(DarkModeContext);


  const location = useLocation();
  console.log(location.pathname);

    return (
      <>
        <div>
          <Header />
          <Routes>
            <Route  path='/' element={<Home/> } />
            <Route  path='/about' element={ <About/>} />
            <Route  path='/courses' element={<CourseHome/>} />
            <Route  path='/team' element={<Team/>} />
            <Route  path='/pricing' element={<AbouPricingt/>} />
            <Route  path='/journal' element={<Blog/>} />
            <Route  path='/contact' element={<Contact/>} />
          </Routes>
          <Footer />
          
        </div>
      </>
    );
}


export default App