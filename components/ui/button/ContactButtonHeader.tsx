import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactButtonHeader = ({
  className = "",
  children = "Contact us", // デフォルトのテキスト
}: {
  className?: string
  children?: React.ReactNode
}) => {
  // テキストが英語の場合はfont-en、日本語の場合はfont-enを使わない
  const isEnglish = children === "Contact us"

  return (
    <Link
      href="mailto:info@ku-ro.com"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-[300px] py-4 ${
        isEnglish
          ? "font-en text-lg tracking-[0.03em]"
          : " text-xl tracking-[0.05em]"
      } ${className}`}
    >
      <EnvelopeIcon className="w-6 h-5 mr-2" />
      {children}
    </Link>
  )
}

export default ContactButtonHeader
