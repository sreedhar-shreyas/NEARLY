import React from "react";
import Image from "next/image";
function IssueSection() { 
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="overflow-hidden w-[1440px] h-[768px]">
        <div className="relative w-[1672px] h-[1733px] top-[-334px] left-[-116px]">
          <div className="absolute w-[1440px] h-[768px] top-[334px] left-[108px] bg-[#1d1f21] rotate-[-180.00deg]" />
          <div className="h-[1733px] absolute w-[1672px] top-0 left-0">
            <div className="relative h-[1733px]">
              <div className="h-[1399px] absolute w-[1672px] top-0 left-0">
                <div className="top-[690px] left-0 absolute w-[400px] h-[668px] bg-[#d9d9d9] rounded-[20px] overflow-hidden">
                  <Image
                    className="absolute w-[284px] h-[412px] top-0 left-[116px] object-cover"
                    alt="Img"
                    src="/images/nearly1.png"
                    height={412} 
                    width={284}
                  />
                </div>
                <div className="top-[731px] left-[848px] absolute w-[400px] h-[668px] bg-[#d9d9d9] rounded-[20px] overflow-hidden">
                  <Image
                    className="absolute w-[400px] h-[371px] top-0 left-0 object-cover"
                    alt="Img"
                    src="/images/nearly2.png"
                    height={412} 
                    width={284}
                  />
                </div>
                <div className="top-[375px] left-[424px] shadow-[0px_4px_9.2px_#ffffff63] absolute w-[400px] h-[668px] bg-[#d9d9d9] rounded-[20px] overflow-hidden">
                  <Image
                    className="absolute w-[400px] h-[618px] top-[50px] left-0 object-cover"
                    alt="Img"
                    src="/images/nearly3.png"
                    height={412} 
                    width={284}
                  />
                </div>
                <div className="top-0 left-0 shadow-[0px_4px_9.2px_#ffffff63] absolute w-[400px] h-[668px] bg-[#d9d9d9] rounded-[20px] overflow-hidden">
                  <Image
                    className="h-[334px] top-[334px] left-[116px] absolute w-[284px] object-cover"
                    alt="Img"
                    src="/images/nearly4.png"
                    height={412} 
                    width={284}
                  />
                </div>
                <div className="top-[41px] left-[849px] absolute w-[400px] h-[668px] bg-[#d9d9d9] rounded-[20px] overflow-hidden">
                  <Image
                    className="absolute w-[400px] h-[375px] top-[293px] left-0 object-cover"
                    alt="Img"
                    src="/images/nearly4.png"
                    height={412} 
                    width={284}
                  />
                </div>
                <div className="top-[334px] left-[1272px] absolute w-[400px] h-[668px] bg-[#d9d9d9] rounded-[20px] overflow-hidden">
                  <Image
                    className="h-[668px] top-0 left-0 absolute w-[284px] object-cover"
                    alt="Img"
                    src="/images/nearly1.png"
                    height={412} 
                    width={284}
                  />
                </div>
              </div>
              <div className="absolute w-[400px] h-[668px] top-[1024px] left-[1272px] bg-[#d9d9d9] rounded-[20px]" />
              <div className="absolute w-[400px] h-[668px] top-[1065px] left-[424px] bg-[#d9d9d9] rounded-[20px]" />
            </div>
          </div>
          <div className="absolute w-[1448px] h-[782px] top-[334px] left-[108px]">
            <div className="relative w-[1441px] h-[782px] left-[7px]">
              <div className="absolute w-[1440px] h-[512px] top-0 left-px [background:linear-gradient(180deg,rgb(29,31,33)_0%,rgba(29,31,33,0.92)_28.65%,rgba(29,31,33,0)_100%)]" />
              <div className="absolute w-[1440px] h-[512px] top-[270px] left-0 rotate-[-180.00deg] [background:linear-gradient(180deg,rgb(29,31,33)_0%,rgba(29,31,33,0.92)_28.65%,rgba(29,31,33,0)_100%)]" />
            </div>
          </div>
          <p className="absolute w-[1102px] top-[414px] left-[285px] [font-family:'Neurial_Grotesk-Regular',Helvetica] font-normal text-[#ffffff] text-[43.2px] text-center tracking-[0] leading-[normal]">
            <span className="[font-family:'Neurial_Grotesk-Regular',Helvetica] font-normal text-[#ffffff] text-[43.2px] tracking-[0]">
              Stuck in the endless
            </span>
            <span className="[font-family:'Swear_Display-LightItalic',Helvetica] font-light italic text-[48px]">
              &nbsp;
            </span>
            <span className="[font-family:'Swear_Display-BlackItalic',Helvetica] font-black italic text-[48px]">
              group-chat loop
            </span>
            <span className="[font-family:'Swear_Display-LightItalic',Helvetica] font-light italic text-[48px]">
              {" "}
              <br />
            </span>
            <span className="[font-family:'Neurial_Grotesk-Regular',Helvetica] font-normal text-[#ffffff] text-[43.2px] tracking-[0]">
              looking for a roommate?{" "}
            </span>
          </p>
          <p className="absolute w-[575px] top-[750px] left-[561px] [font-family:'Swear_Display-BlackItalic',Helvetica] font-black italic text-[#ffffff] text-[64px] text-center tracking-[0] leading-[normal]">
            we’ve been there, <br />
            we feel you.
          </p>
          <div className="absolute w-[200px] h-[68px] top-[1147px] left-[724px] bg-[#d9d9d9]" />
          <div className="absolute top-[1154px] left-[746px] [font-family:'Neurial_Grotesk-Regular',Helvetica] font-normal text-[#ff6600] text-[43.2px] text-center tracking-[0] leading-[normal]">
            Sign-up
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueSection;