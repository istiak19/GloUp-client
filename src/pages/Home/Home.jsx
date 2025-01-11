import Banner1 from "../../components/Banner1/Banner1";
import Banner2 from "../../components/Banner2/Banner2";
import MessageForm from "../../components/MessageForm/MessageForm";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <Services></Services>
            <Banner2></Banner2>
            <Testimonials></Testimonials>
            <MessageForm></MessageForm>
        </div>
    );
};

export default Home;