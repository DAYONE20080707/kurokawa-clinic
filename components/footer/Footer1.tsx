"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import FooterLinks from "@/components/ui/navigation/FooterLinks"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import ContactButton from "@/components/ui/button/ContactButton"
import ContactButtonTel from "../ui/button/ContactButtonTel"

// フッター
const Footer1 = () => {
  const { companyName, companyPostalCode, companyAddress } = CompanyInfo[0]
  return (
    <footer className=" border-t border-baseColor py-10 md:py-[120px] px-4 md:px-0">
      <div className="md:max-w-[1240px] mx-auto md:px-5">
        <div className="md:flex justify-between items-center">
          <div className="space-y-3">
            <h4 className="w-[300px] md:w-[400px]">
              {CompanyInfo[0].companyName("primary")}
            </h4>
            <p>医療法人 愛基会　黒川医院</p>
            <p>〒{companyPostalCode}{'　'}{companyAddress}</p>
          </div>
          <div className="flex flex-col md:items-end mt-5 md:mt-0">
            <ul className="md:flex items-center md:space-x-10 font-light space-y-5 md:space-y-0">
              {/* <li>
                <Link href="/">
                  <div>トップページ</div>
                </Link>
              </li> */}
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <div>{item.nameJa}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col md:flex-row gap-2">
              <ContactButton className="md:w-[250px]">メールでお問い合わせ</ContactButton>
              <ContactButtonTel className="md:w-[250px]">072-687-0373</ContactButtonTel>
            </div>
          </div>
        </div>
        <div className=" !border-t border-baseColor mt-4 pt-4 ">
          <ul className="flex items-center justify-center font-semibold  space-x-5 md:space-x-0">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-5 h-5 md:w-[60px] md:h-[60px] flex items-center justify-center"
              >
                <Link href={item.href} className="">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            ))}
          </ul>
          {/* <ul className="md:flex items-center md:space-x-10 font-light mt-5 md:mt-0 space-y-5 md:space-y-0">
            {FooterLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
        <small className="mt-4 flex justify-center items-center md:text-base">
          ©Kurokawa clinic. ALL Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer1
