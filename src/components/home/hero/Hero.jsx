import Heading from "../../common/heading/Heading"
import "./Hero.css"
import {useNavigate} from "react-router-dom"



const Hero = () => {
  // const navigate = useNavigate()
  // const [click, useNavigate] = useState(false)
  const handleClick = (e)=>{
    e.preventDefault()  ;
    console.log("clicked alredy");
  }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='BIENVENUE DANS LA FAMILLE ASEGUIN' title='' />
            <div className='button'>
              <button className='primary-btn' >
                Commencons L'Aventure maintenant <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Avec les Ressources Scolaire à vos Convenances <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
