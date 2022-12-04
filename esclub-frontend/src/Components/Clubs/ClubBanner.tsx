import Lottie from "react-lottie";
import { useParams } from "react-router-dom";
import club from "../../LottieFiles/club.json";
function ClubBanner() {
    const { clubName } = useParams();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: club,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

  return (
<>
    <div>
    <div style={{ marginTop: "150px", marginLeft: "100px" }}>
      <h1
        style={{
          color: "#A62732",
          fontFamily: "sans-serif",
          fontWeight: "900",
        }}
      >
        {clubName?.toUpperCase()}'i Yakından Tanı
      </h1>
      <h5 style={{ fontFamily: "sans-serif" }}>
        {" "}
        Electrical Engineering STudents' European assoCiation
      </h5>
    </div>
  </div>
  <Lottie
    options={defaultOptions}
    height={400}
    width={600}
    style={{ marginLeft: "800px", marginTop: "-200px" }}
  /></>
  );
}

export default ClubBanner;