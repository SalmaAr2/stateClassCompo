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
      timeInterval: 0
    };
    // Liaison de la méthode toggle à l'instance actuelle du composant
    this.toggle= this.toggle.bind(this);
 }
    componentDidMount(){
      this.interval = setInterval(() => {
        this.setState({ timeInterval: this.state.timeInterval + 1 });
      }, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.timeInterval);
    }

    toggle() {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    }
 
  

  render() {
    const {fullName ,bio ,imgSrc, profession } = this.state.Person
    const {show, timeInterval} = this.state
    return(
      <>
      <Container className="my-5 ">
        <Button variant="primary"  onClick={this.toggle}>Toggle Profile</Button>
      {show &&
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
