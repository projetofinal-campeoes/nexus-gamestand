import Image from "next/image";
import React from "react";
import BackgroundDashboard from "../../components/BackgroundDashboard";
import GeralContainer from "../../components/GeralContainer";
import LeftAside from "../../components/LeftAside";
import RightSide from "../../components/RightSide";
import SEO from "../../components/SEO";

const Dashboard = () => {
  return (
    <BackgroundDashboard config="flex flex-col">
      <SEO
        title="Dashboard"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <GeralContainer>
        <LeftAside />

        <RightSide>
          <div className="flex flex-col items-center w-[100%] h-[700px] overflow-y-auto p-4">
            <div>
              <Image
                src="/horizon.jpg"
                width="2000"
                height="400px"
                objectFit="cover"
                quality={100}
                className="rounded-[30px]"
              />
            </div>
            <div className="w-[100%] flex flex-col justify-center items-center">
              <h1 className="text-defaulttextdark text-[40px] text-center font-bebas my-4">
                News from Nexus GameStand
              </h1>
              <hr className="w-[380px] text-[#E5901A] flex items-center justify-center" />
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h2 className="text-defaulttextdark font-bebas text-[20px]">
                What is Lorem Ipsum!
              </h2>
              <p className="text-defaulttextdark text-[12px] indent-4 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <a href="#" className="text-defaulttextdark text-[12px] font-bebas">Read more...</a>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h2 className="text-defaulttextdark font-bebas text-[20px]">
                Why do we use it!
              </h2>
              <p className="text-defaulttextdark text-[12px] indent-4 text-justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <a href="#" className="text-defaulttextdark text-[12px] font-bebas">Read more...</a>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h2 className="text-defaulttextdark font-bebas text-[20px]">
                Where does it come from!
              </h2>
              <p className="text-defaulttextdark text-[12px] indent-4 text-justify">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <a href="#" className="text-defaulttextdark text-[12px] font-bebas">Read more...</a>
            </div>
          </div>
        </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default Dashboard;
