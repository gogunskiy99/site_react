import Carousel from "react-bootstrap/Carousel";

function Home(){
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img src="https://images2.alphacoders.com/109/thumb-1920-1094328.jpg" alt="img_1" className="d-block w-100"/>
                <Carousel.Caption>
                    <h1>First img</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://wallpapercave.com/wp/wp3991660.jpg" alt="img_2" className="d-block w-100"/>
                <Carousel.Caption>
                    <h1>Second img</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://images4.alphacoders.com/146/146014.jpg" alt="img_3" className="d-block w-100"/>
                <Carousel.Caption>
                    <h1>Third img</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
)
};

export default Home;