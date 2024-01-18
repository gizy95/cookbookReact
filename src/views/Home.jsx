import backgroundImage from "../assets/images/background.jpg";
import { useSpring, animated } from "react-spring";

const Home = () => {

    const springProps = useSpring({
        opacity: 1,
        transform: "translateY(0px)",
        from: { opacity: 0, transform: "translateY(-50px)" },
        config: { duration: 1200 }
    });

    return (
        <>
            <animated.div
                className="hero"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    ...springProps,
                }}
            >
                <div className="flex-container">
                    <h1>Cookbook</h1>
                    <h2>
                        Welcome to Cookbook, your go-to destination for delicious and
                        easy-to-follow recipes!
                    </h2>
                    <p>
                        Whether you're a seasoned chef or just starting out in the kitchen,
                        we've got something for everyone. From quick weeknight dinners to
                        impressive desserts, our collection of recipes has been carefully
                        curated to inspire and delight. So grab your apron and get ready to
                        explore a world of culinary possibilities with Cookbook!
                    </p>
                </div>
            </animated.div>
        </>
    );
};

export default Home;