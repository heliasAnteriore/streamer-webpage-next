import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { imageList } from '../helpers/images.helper';
import Header from '../container/Header';
import ImageList from '../container/ImageList';

const Home = () => {
  return (
    <Container>
      <Header/>
      <Row className="main-row">
        <Col xs={12} lg={6}>
          <h1>
            Hey! I'm Helias! Let's go mald together!
          </h1>
          <p className="info-text">
            I love to play games ever since I was a child. 
            I usually play games like Monster Hunter and other competitive games like Valorant, LoL, and Apex Legends.
          </p>
          <p className="info-text">
            Playing online games with my community gives me more motivation to stream and pursue my passion for
            gaming. There are times I mald with my teamates but at the end of the day we enjoy our match. <br/>
            Support pleb local streamers!
          </p>
        </Col>
        <Col className="info-image-container" xs={12} lg={6}>
          <img className="info-image" src="/keyboard.jpg"/>
        </Col>
        <Col>
          <ImageList list={imageList} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
