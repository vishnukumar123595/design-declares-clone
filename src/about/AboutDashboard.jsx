import AboutDesignDeclares from "./AboutDesignDeclares";
import Globalpartners from "./GlobalPatnerships";
import CountryDesign from "./CountryDesign";
import SteeringGroup from "./SterringGroup";


const AboutDashboard = () => {
  return (
    <div className="dashboard">
      <AboutDesignDeclares />
      <Globalpartners />
      <CountryDesign />
      <SteeringGroup />
    </div>
  );
};

export default AboutDashboard