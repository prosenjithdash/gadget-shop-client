// Product Card
const ProductCard = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.freepik.com/free-psd/modern-tv-screen-isolated_23-2151430360.jpg?t=st=1731581008~exp=1731584608~hmac=55e31a5b0ce896d5be8e8daca1804276268deeeec7dc9081af04ec1749ae0d88&w=1800"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Monitor
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>This monitor is gaming based.If you like game then you must buy that.</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Mac</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;