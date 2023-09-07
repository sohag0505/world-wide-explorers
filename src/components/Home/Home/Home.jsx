import Card from "../Card/Card";
import Gallery from "../Gallery/Gallery";
import OurServices from "../OurServices/OurServices";
import ServiceTab from "../ServiceTab/ServiceTab";
import SliderPlace from "../SliderPlace/SliderPlace";
import TopSection from "../TopSection/TopSection";
import TravelExperience from "../TravelExperience/TravelExperience";

const Home = () => {
  return (
    <div className="mt-12">
      <TopSection></TopSection>
      <Card></Card>
      <OurServices></OurServices>
      <SliderPlace></SliderPlace>
      <TravelExperience></TravelExperience>
      <Gallery></Gallery>
      <ServiceTab></ServiceTab>
    </div>
  );
};

export default Home;
