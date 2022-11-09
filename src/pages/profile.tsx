import { Avatar } from "@mui/material";
import BackgroundDashboard from "../components/BackgroundDashboard";
import GeralContainer from "../components/GeralContainer";
import LeftAside from "../components/LeftAside";
import RightSide from "../components/RightSide";
import SEO from "../components/SEO";
import HeaderDashboard from "../components/HeaderDashboard";

//#131A39

const Profile = () => {
  const style = {
    width: 171,
    height: 171,
    marginTop: "56px",
  };

  return (
    <BackgroundDashboard config="flex flex-col">
      <SEO
        title="Profile"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <GeralContainer>
        <LeftAside />
        <RightSide>
          <HeaderDashboard title="PROFILE" />

          <main className="flex items-center justify-between flex-col bg-[#131A39] w-[100%] h-[100%] rounded-[38px]">
            <section className="flex flex-col items-center relative w-[100%]">
              
              <img
                src="/smooth-background-blur.png"
                className="w-[100%] h-[180px] absolute top-0 object-cover hover:object-top object-center transition-[1s] rounded-t-[50px]"
              />
              <Avatar
                alt="mathsudre"
                src="https://avatars.githubusercontent.com/u/100591242?v=4"
                style={style}
              />
              <h2 className="font-inter text-title2 font-bold text-defaulttextdark">
                MathSudre
              </h2>
            </section>

            <section className="flex justify-between gap-5 w-[100%] h-[300px] p-[31px] rounded-b-[38px]">
              <div className="w-[25%] h-[230px]">
                <h3 className="text-defaulttextdark mb-2">
                  {" "}
                  <span className="font-bold"> Games </span> 43{" "}
                </h3>

                <ul className="overflow-auto flex flex-wrap items-center justify-center gap-2 w-[100%] h-[230px] rounded-b-[38px]">
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                </ul>
              </div>
              <div className="w-[25%] h-[230px]">
                <h3 className="text-defaulttextdark mb-2">
                  {" "}
                  <span className="font-bold"> Games </span> 43{" "}
                </h3>

                <ul className="overflow-auto flex flex-wrap items-center justify-center gap-2 w-[100%] h-[230px] rounded-b-[38px]">
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                </ul>
              </div>
              <div className="w-[25%] h-[230px]">
                <h3 className="text-defaulttextdark mb-2">
                  {" "}
                  <span className="font-bold"> Games </span> 43{" "}
                </h3>

                <ul className="overflow-auto flex flex-wrap items-center justify-center gap-2 w-[100%] h-[230px] rounded-b-[38px]">
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                  <li>
                    <img
                      src="/game-image.png"
                      alt="ori"
                      className="rounded-lg w-[115px] h-[110px]"
                    />
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default Profile;
