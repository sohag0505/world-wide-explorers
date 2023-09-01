import Card from "../Card/Card";
import Gallery from "../Gallery/Gallery";
import ServiceTab from "../ServiceTab/ServiceTab";
import SliderPlace from "../SliderPlace/SliderPlace";
import TopSection from "../TopSection/TopSection";
import TravelExperience from "../TravelExperience/TravelExperience";

const Home = () => {
  return (
    <div className="mt-12">
      <TopSection></TopSection>
      <Card></Card>
      <ServiceTab></ServiceTab>
      <SliderPlace></SliderPlace>
      <TravelExperience></TravelExperience>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
