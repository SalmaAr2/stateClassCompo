import { Component } from "react";
import image from "./Image/ArifSalma.jpg";
import {Button , Container , Card} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Salma Arif",
        bio: "---",
        imgSrc: image,
        profession: "Front end developer",
        
      },
      show: false,
      timeInterval: 0,
      
    };
    // Liaison de la méthode toggle à l'instance actuelle du composant
    this.toggle= this.toggle.bind(this);
 }
 //setInterval est une fonction en JavaScript qui permet d'exécuter une fonction ou une expression de manière répétée, à intervalles réguliers, définis par une durée spécifiée en millisecondes.
 //lifecycle : timer
 componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({ timeInterval: this.state.timeInterval + 1 });
  }, 1000);
}

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    toggle() {
      this.setState(()=> ({
        show: !this.state.show
      }));
    }
 
  

  render() {
    const {fullName ,bio ,imgSrc, profession } = this.state.Person
    const {show, timeInterval} = this.state
    return(
      <>
      <Container className="my-5 ">
        <Button variant="primary"  onClick={this.toggle}>Toggle Profile</Button> 
      {show && // si on click sur le button le profil s affiche
      <div>
      <Container className="mt-3 mb-4 flex " >
        <Card style={{ width: "20rem" }} >
          <Card.Img variant="top" src={imgSrc}  /> 
          <Card.Body >
            <Card.Title>{fullName}</Card.Title>
            <p>{bio}</p>
            <p>{profession}</p>
          </Card.Body>
        </Card>
      </Container>
      </div>
      }
      
      <p>Time since mount: {timeInterval}  seconds</p>
      </Container>
      
      </>
    )
  
  }
}


export default App;

// Créez un projet à l'aide de create-react-app.
// Transformez App.js en un composant basé sur une classe.
// Implémentez un état pour cette classe contenant un Person ={ fullName,bio, imgSrc, profession} et un booléen show.
// Ajoutez un bouton qui bascule l'état d'affichage. Lorsque l'état d'affichage est vrai, le profil de la personne apparaîtra.
// Créez un champ qui affiche l'intervalle de temps depuis le montage du dernier composant à l'aide du cycle de vie du composant.
// Astuce : utilisez la méthode setInterval.
