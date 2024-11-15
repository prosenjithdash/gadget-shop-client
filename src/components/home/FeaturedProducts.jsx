// FeaturedProducts

import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="lg:flex items-center justify-between gap-4 md:gap-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default FeaturedProducts;