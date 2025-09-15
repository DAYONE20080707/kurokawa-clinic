import MoreButton from "@/components/ui/button/MoreButton"
import Image from "next/image"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"

interface AboutSection_04Props {
  title?: string // 見出しテキスト
  description: string // 本文
  buttonHref?: string // ボタンリンク先（任意）
  imageUrl?: string // 画像URL（任意）
  position?: string // 役職（任意）
  name?: string // 氏名（任意）
}

const AboutSection_04 = ({
  title,
  description,
  buttonHref,
  imageUrl,
  position,
  name,
}: AboutSection_04Props) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </span>
    ))
  }

  return (
    <div className=" flex flex-col md:flex-row justify-between gap-10 md:gap-[120px]">
      <div className="md:max-w-[500px] ">
        <ContentHeadline enTitle="Who we are" mainTitle="院内の様子" />
        {/* <h3 className="text-3xl md:text-5xl  font-light leading-relaxed md:leading-[64px] mt-10 md:mt-0">
          {convertNewLines(title)}
        </h3> */}
        <p className="mt-10 md:text-base whitespace-pre-line tracking-[0.03em] ![line-height:250%]">
          {description}
        </p>
        {(position || name) && (
          <p className="mt-10 text-lg leading-[250%]">
            {position}
            <br />
            {name}
          </p>
        )}
        {buttonHref && (
          <MoreButton
            href={buttonHref}
            className="mt-10 text-accentColor border-accentColor"
            shape="square"
          >院内の様子</MoreButton>
        )}
      </div>
      <div className="md:max-w-[452px] h-[300px] md:h-[525px] w-full">
        <Image
          src={imageUrl || "/top/message/message_img.png"}
          alt={name || "message"}
          className="object-cover h-full w-full"
          width={452}
          height={525}
        />
      </div>
    </div>
  )
}

export default AboutSection_04
