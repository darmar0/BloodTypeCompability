import { BloodContainerBox, Liquid } from "./blood-container.style";
import IvBag from "../../utilities/iv-bag_.png";

const BloodContainer = () => {
  return (
    <>
      <BloodContainerBox>
        <Liquid></Liquid>
        <img src={IvBag}></img>
      </BloodContainerBox>
    </>
  );
};

export default BloodContainer;
