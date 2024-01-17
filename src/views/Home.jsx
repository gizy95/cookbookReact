import Navbar from "../elements/Navbar";
import backgroundImage from "../assets/images/background.jpg";

const Home = () => {
    return (
        <>
            <div
                className="hero"
                style={{ backgroundImage: `url(${backgroundImage})` }}
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
            </div>
        </>
    );
};

export default Home;
