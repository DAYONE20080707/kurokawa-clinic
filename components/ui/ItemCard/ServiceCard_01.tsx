// components/ui/itemCard/ServiceCard.tsx
import Image from "next/image"
import classNames from "classnames"
import ArrowRightLinkButton from "@/components/ui/button/ArroeRightLinkButton"

interface ServiceCardProps {
  id: number
  subTitle: string
  title: string
  description: string
  image: string // 画像パスを受け取る
  href: string // リンク先のURLを受け取る
  className?: string // 任意のクラス名を受け取る
  imageContainerClass?: string // 画像コンテナのクラスを受け取る
  showButton?: boolean // ボタンの表示を制御するプロパティを追加
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subTitle,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "",
  showButton = true, // デフォルトでボタンを表示する設定
}) => {
  return (
    <div
      className={classNames(
        "md:w-[18.8%] relative overflow-hidden rounded-[20px] bg-white shadow-[0_0_25px_0_#E5E3DA] p-4 md:p-6 space-y-2",
        className
      )}
    >
      <div
        className={classNames(
          "font-medium text-lg text-center  leading-[160%] tracking-[0.03em]",
          {
            "text-white": className.includes("overlay"),
            "text-baseColor": !className.includes("overlay"),
          }
        )}
      >
        {title}
      </div>
      <div
        className={classNames(
          {
            "h-[240px] md:h-[120px] ": !className.includes("overlay"),
            "h-[240px] md:h-[120px]": className.includes("overlay"),
          },
          "w-full aspect-[1/1] relative rounded-[10px] bg-lightgray bg-cover bg-no-repeat bg-center",
          imageContainerClass
        )}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      <div
        className={classNames("space-y-3 ", {
          "w-full md:h-[600px]  rounded-[30px] absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white":
            className.includes("overlay"),
          "relative text-black ": !className.includes("overlay"),
        })}
      >
        {/* <div
          className={classNames(
            "font-bold text-[16px] font-poppins text-left text-accentColor ",
            {
              "text-white": className.includes("overlay"),
              "text-accentColor": !className.includes("overlay"),
            }
          )}
        >
          {subTitle}
        </div> */}

        <div
          className={classNames(
            "font-medium text-base text-center whitespace-pre-line ",
            {
              "text-white  px-10 md:px-20": className.includes("overlay"),
              "text-baseColor": !className.includes("overlay"),
            }
          )}
        >
          {description}
        </div>
        {/* {showButton && ( // showButtonがtrueの場合のみ表示
          <div
            className={classNames({
              hidden: className.includes("overlay"),
              "text-black": !className.includes("overlay"),
            })}
          >
            <ArrowRightLinkButton href={href} label="" />
          </div>
        )} */}
      </div>
    </div>
  )
}

export default ServiceCard
