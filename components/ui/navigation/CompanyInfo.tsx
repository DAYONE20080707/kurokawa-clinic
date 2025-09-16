//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo.png" // 1つ目のロゴパス（白色ロゴ）
            : type === "secondary"
            ? "/common/logo_bk.svg" // 2つ目のロゴパス（黒色ロゴ）
            : "/common/logo.svg" // 3つ目のロゴパス（テキストなし）
        }
        alt="logo"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyPostalCode: "569-1022",
    companyAddress: "大阪府高槻市日吉台一番町16-1",
    companyTel: "072-687-0373",
    companyTelHref: "tel:0726870373",
    companyEmail: "info@company.co.jp",
  },
]

export default CompanyInfo
