// components/ui/frame/TopPageHeadline.tsx
import classNames from "classnames"
import MoreLinkButton from "../button/MoreButton"

interface TopPageHeadlineProps {
  mainTitle: React.ReactNode
  subtitleTop?: React.ReactNode
  subtitleBottom?: React.ReactNode
  discription?: React.ReactNode
  parentDirectoryName?: string
  parentDirectoryLink?: string
  className?: string // 親要素のclassName
  titleClassName?: string // h1用のclassName
  subtitleClassName?: string // h2用のclassName
  discriptionClassName?: string // p用のclassName
}

const TopPageHeadline: React.FC<TopPageHeadlineProps> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  discription,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  discriptionClassName = "",
}) => {
  return (
    <section
      className={classNames(
        "md:max-w-[640px] w-full px-4 md:px-5 text-baseColor",
        className
      )}
    >
      {/* <Breadcrumb
        mainTitle={mainTitle}
        parentDirectoryName={parentDirectoryName}
        parentDirectoryLink={parentDirectoryLink}
      /> */}
      <h2
        className={classNames(
          "text-lg md:text-2xl font-bold mb-4 font-poppins leading-normal",
          subtitleClassName
        )}
      >
        {subtitleTop}
      </h2>
      <h1
        className={classNames(
          "text-3xl leading-normal md:text-[64px] md:leading-[160%] font-en tracking-[0.03em]",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      <h3
        className={classNames(
          "text-sm md:text-xl mt-4 tracking-[0.05em] font-semibold md:leading-[160%]",
          subtitleClassName
        )}
      >
        {subtitleBottom}
      </h3>
      <p className={classNames("mt-4 md:text-lg tracking-[0.05em] leading-[160%]", discriptionClassName)}>
        {discription}
      </p>
      <div className="mt-14">
        <MoreLinkButton href="/coming-soon">当院のご紹介</MoreLinkButton>
      </div>
    </section>
  )
}

export default TopPageHeadline
