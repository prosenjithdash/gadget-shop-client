// Home Page

import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Review from "../components/home/Review";
import UserReview from "../components/home/UserReview";


const Home = () => {
    return (
        <div>
            {/* Banner Component */}
            <Banner />

            {/* Width difare */}
            <div className="container mx-auto">
                {/* Featured Products Component */}
                <div className="my-24">
                    <h1 className="mb-16 text-[36px] font-bold text-center">Featured Products</h1>
                    <FeaturedProducts />
                </div>

                {/* Review Section */}
                <div className="my-24">
                    <h1 className="mb-16 text-[36px] font-bold text-center">User Review </h1>
                    <UserReview />
                </div>

                {/* Accordion Section */}
                <div className="my-24">
                    <h1 className="mb-16 text-[36px] font-bold text-center">Frequently Asked Questions </h1>
                    <Accordion />
                </div>
            </div>

       </div>
    );
};

export default Home;