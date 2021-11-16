

import LogoImage from "./../../images/jalapeno.svg";

export default function Logo(props) {
  return (
    <div {...props}>
      <img src={LogoImage} alt="El Jefe" style={{ width: 30 }} />
    </div>
  );
}
