import Lottie from "react-lottie";
import home from "../../LottieFiles/home.json";
function Banner() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: home,
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
        Kulübünün Sana Haberi Var
      </h1>
      <h5 style={{ fontFamily: "sans-serif" }}>
        {" "}
        En güncel haberleri kaçırma
      </h5>
    </div>
  </div>
  <Lottie
    options={defaultOptions}
    height={400}
    width={600}
    style={{ marginLeft: "800px", marginTop: "-200px" }}
  />
  </>
  );
}

export default Banner;
