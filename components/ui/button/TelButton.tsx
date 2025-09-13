//components/ui/button/TelButton.tsx
import Link from "next/link"
import { PhoneIcon } from "@heroicons/react/24/outline"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"

const TelButton = ({ className = "" }: { className?: string }) => {
  const { companyTel, companyTelHref } = CompanyInfo[0]
  return (
    <Link
      href={companyTelHref}
      className={`bg-baseColor text-white cursor-pointer flex items-center justify-center w-[300px] font-semibold text-2xl ${className}`}
    >
      <PhoneIcon className="w-6 h-6 mr-2" />
      {companyTel}
    </Link>
  )
}

export default TelButton
