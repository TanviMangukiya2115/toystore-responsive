import { FaPlay } from 'react-icons/fa';
import './App.css';




function Aboutwatch(){
     return(
       <>
          <div className='section-video-section'>
               <div className='wrapper text-center '>
                    <p>About The Shop</p>
                    <h1 className='varela'>Watch Our Story</h1>
                    <p className='w-50'>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>
                    <a className='play-icon'><FaPlay></FaPlay></a>
               </div>
          </div>
       </>
     )
}

export default Aboutwatch;