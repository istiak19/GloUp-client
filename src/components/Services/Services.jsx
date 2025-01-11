import Card from "../Card/Card";

const Services = () => {
    return (
        <div className="my-16 w-11/12 mx-auto">
            <h2 className="font-bold text-3xl text-center mb-16">Our Awesome <span className="text-pink-500">Services</span></h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           </div>
        </div>
    );
};

export default Services;