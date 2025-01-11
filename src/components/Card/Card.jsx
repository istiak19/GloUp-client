import hair from '../../assets/assets/icons/Group 1372.png'
const Card = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={hair}
                    alt="Hair" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center">Hair Color & Styling</h2>
                <p>$99</p>
                <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
            </div>
        </div>
    );
};

export default Card;