// components/ui/frame/ContentHeadline.tsx
import React from "react"
import classNames from "classnames"
import { ContentHeadlineProps } from "@/types"
import Image from "next/image"

const ContentHeadline: React.FC<ContentHeadlineProps> = ({
  mainTitle,
  subTitle,
  enTitle,
  className = "",
  titleClassName = "",
  enTitleClassName = "",
  ImageSrc,
  ImageWidth,
  ImageHeight,
  id,
}) => {
  return (
    <section
      id={id}
      className={classNames(
        "w-full md:max-w-[1200px] mb-16 tracking-wide",
        className
      )}
    >
      {ImageSrc && (
        <Image
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
          alt={String(mainTitle)}
          className="mb-4"
        />
      )}
      <h1
        className={classNames(
          "text-sm md:text-lg font-semibold font-en text-accentColor italic tracking-[0.03em]",
          titleClassName
        )}
      >
        {enTitle}
      </h1>
      <h3
        className={classNames(
          "text-[32px] leading-[150%] mt-2",
          enTitleClassName
        )}
      >
        {mainTitle}
      </h3>

      {subTitle && <h2>{subTitle}</h2>}
    </section>
  )
}

export default ContentHeadline
