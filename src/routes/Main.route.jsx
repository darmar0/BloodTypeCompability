import { Link } from "react-router-dom";
import Person from ".././utilities/person-outline.png";
import { MainRouteContainer, BloodGroupDiv } from "./mainRoute.style";

const MainRoute = () => {
  return (
    <MainRouteContainer>
      <Link to="blood-type/donate">
        <BloodGroupDiv>
          <img src={Person} alt="donor" />
          <h1>Donate</h1>
        </BloodGroupDiv>
      </Link>
      <Link to="blood-type/resive">
        <BloodGroupDiv>
          <img src={Person} alt="recipient" />
          <h1>Resive</h1>
        </BloodGroupDiv>
      </Link>
    </MainRouteContainer>
  );
};

export default MainRoute;
