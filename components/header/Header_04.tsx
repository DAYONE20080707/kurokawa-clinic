"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import TelButton from "@/components/ui/button/TelButton"
import TelButtonHeader from "@/components/ui/button/TelButtonHeader"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import ContactButtonHeader from "../ui/button/ContactButtonHeader"

// ヘッダー
const Header_04 = () => {
  // ハンバーガーメニューの開閉状態を管理するstate
  const [MenuOpen, setMenuOpen] = useState(false)

  // メニュー開閉のトグル関数
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  const { companyName } = CompanyInfo[0]
  return (
    <header className="w-full h-[75px] md:h-[100px] tracking-wide px-6 md:px-0 fixed top-0 left-0 z-10 bg-white">
      <div className="h-full mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-10 md:px-20">
          <Link href="/" className="w-[212px] md:w-[295px]">
            {CompanyInfo[0].companyName("primary")}
          </Link>
        </div>
        <div className="hidden md:flex justify-between items-center h-full">
          <ul className="hidden md:flex items-center space-x-10 font-semibold whitespace-nowrap px-10">
            {Menu.map((item, index) => (
              <li
                key={index}
                className="py-4 whitespace-nowrap text-base tracking-[0.03em]"
              >
                <Link href={item.href}>
                  <div>{item.nameJa}</div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center w-full h-full">
            <ContactButtonHeader className="h-full whitespace-nowrap">
              メールでお問い合わせ
            </ContactButtonHeader>
            <TelButtonHeader className="h-full whitespace-nowrap" />
          </div>
        </div>
        {/* ハンバーガーメニューボタン */}
        <div
          className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-10 h-10 bg-baseColor flex flex-col justify-center items-center space-y-[6px]">
            <div className="w-[21px] h-0.5 bg-white"></div>
            <div className="w-[21px] h-0.5 bg-white"></div>
            <div className="w-[21px] h-0.5 bg-white"></div>
          </div>
        </div>
      </div>

      {/* ハンバーガーメニュー */}
      <div
        className={`fixed z-10 top-0 right-0 h-screen w-full md:w-[500px] bg-bgYellow shadow-lg transform transition-transform duration-300 ${
          MenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 閉じるボタン */}
        <div className="flex justify-end p-4">
          <button
            aria-label="メニューを閉じる"
            onClick={toggleMenu}
            className="w-10 h-10"
          >
            <div className="w-[38px] h-[38px] relative">
              <div className="w-[53.74px] bg-white h-[1px] left-0 top-0 absolute origin-top-left rotate-45 border border-baseColor"></div>
              <div className="w-[53.74px] bg-white h-[1px] left-[38px] top-0 absolute origin-top-left rotate-[135deg] border border-baseColor"></div>
            </div>
          </button>
        </div>

        {/* メニューアイテム */}
        <ul className="flex flex-col items-center space-y-6 mb-16">
          {Menu.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-lg font-semibold">
                {item.nameJa}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center w-[260px] mx-auto ">
          <TelButton className="h-[72px]" />
        </div>
        <div className="flex justify-center items-center w-[260px] mx-auto mt-2">
          <ContactButton className="h-[72px]" />
        </div>
      </div>
    </header>
  )
}

export default Header_04
