import Bannar from "../Bannar/Bannar";
import Bannar1 from "../Bannar1/Bannar1";
import Brand from "../Brand/Brand";
import Engineers from "../Engineers/Engineers";
import Hero1 from "../Hero1/Hero1";
import Location from "../Location/Location";
import PricePlan from "../PricePlan/PricePlan";

const Home = () => {
    return (
        <div className="mx-auto">
            <h2>this is home </h2>
            <Bannar></Bannar>
            <Hero1></Hero1>
            <Bannar1></Bannar1>
            <Engineers></Engineers>
            <PricePlan></PricePlan>
            <Location></Location>
            <Brand></Brand>
        </div>
    );
};

export default Home;