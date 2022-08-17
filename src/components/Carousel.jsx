import Carousel from 'react-bootstrap/Carousel';
import photo from '../assets/PokeApiPhoto.png'
import photo2 from '../assets/TodoListjunto.png'
import photo3 from '../assets/topo.png'
import './carousel.scss'
import 'bootstrap/dist/css/bootstrap.min.css'



function UncontrolledExample() {
  return (
    <div className='carousel'>
    <Carousel  >
      <Carousel.Item   >
        <img 
          className=" photo"
          src={photo}
          alt="First slide"
        />
        <Carousel.Caption >
          <p><a  href={photo} alt='Pokiapi' rel='noreferrer' target='_blank'>PokiApi</a></p>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
              className="photo2"
          src={photo2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <p><a  href={photo2} alt='TodoList' rel='noreferrer' target='_blank'>TodoList</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo3"
          src={photo3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <p><a  href={photo3} alt='TodoList' rel='noreferrer' target='_blank'>Whack-A-Mole</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;