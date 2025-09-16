// components/message/About_04.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";

import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_04";

// メッセージ
const About_04 = () => {
  return (
    <>
      <SectionContent className="" variant="yellow">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto bg-white p-5 md:p-16 rounded-[20px]">
         
          <AboutSection
            // title="無数の選択肢の中から\nベストな選択を"
            description={`黒川医院は1967（昭和42）年に現在の高槻市日吉台に初代院長黒川正夫によって開設されました。
              当時はこの地には医療機関が一軒もなく、住宅もまだ少なかったです。
医院建物・設備の老朽化により、旧医院の向かいの土地に新しく医院建物を建築し、2020（令和2）年
6月から診療を開始して、現在に至っています。`}
            buttonHref="/coming-soon"
            // 以下は任意
            imageUrl="/top/about/hospital.jpg"
            // position="代表取締役"
            // name="山田太郎"
          />
        </section>
      </SectionContent>
    </>
  );
};

export default About_04;
