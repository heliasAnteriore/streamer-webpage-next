import Header from '../container/Header';
import ImageList from '../container/ImageList';
import Text from '../components/Text';
import { imageList } from '../helpers/images.helper';

const Home = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="container mx-auto mt-10">
        <div className="bio-area flex">
          <div className="paragraph-area max-w-2xl">
            <Text className="tracking-tight" size={6}>
              Hey! I'm Helias! Let's go mald together!
            </Text>
            <Text className="tracking-wider" size={2}>
              I love to play games ever since I was a child. 
              I usually play games like Monster Hunter and other competitive games like Valorant, LoL, and Apex Legends.
            </Text>
            <Text className='tracking-wider' size={2}>
              Playing online games with my community gives me more motivation to stream and pursue my passion for
              gaming. There are times I mald with my teamates but at the end of the day we enjoy our match. <br/>
              Support pleb local streamers!
            </Text>
          </div>
          <div className="ml-auto w-2/5" >
            <img className="max-w-full  bg-cover" src="/keyboard.jpg"/>
          </div>
        </div>
        <ImageList direction="row" list={imageList} />
      </div>
    </div>
  )
}

export default Home;
