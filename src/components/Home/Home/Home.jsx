import Gallery from "../Gallery/Gallery";
import ServiceTab from "../ServiceTab/ServiceTab";
import TopSection from "../TopSection/TopSection";
import TravelExperience from "../TravelExperience/TravelExperience";

const Home = () => {
  return (
    <div className="mt-12">
      <TopSection></TopSection>
      <ServiceTab></ServiceTab>
      <TravelExperience></TravelExperience>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
