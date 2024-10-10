import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <Rings
      visible={true}
      height="50"
      width="50"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      color="#FFB273"
    />
  );
};

export default Loader;
