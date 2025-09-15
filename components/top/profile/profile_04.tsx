// components/profile/Profile_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ProfileCard from "@/components/ui/ItemCard/ProfileCard_01"

const Profile_04 = () => {
  return (
    <>
      <PageContent className="!pt-0">
        <div className="mb-10 md:mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5201488915804!2d139.71568836148265!3d35.664192380795214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4530b99601%3A0x86b1876ad2ed28c3!2z44Kw44Op44Oz4oCL44Kr44O844K14oCL5Y2X6Z2S5bGx!5e0!3m2!1sja!2sfr!4v1732195905422!5m2!1sja!2sfr"
            width="100%"
            height="400"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[250px] md:h-[400px]"
          />
        </div>
        <section className="md:max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <ContentHeadline
                enTitle="Profile"
                mainTitle="事務所概要"
                enTitleClassName=""
                titleClassName=""
              />
            </div>
            <div className="md:max-w-[720px] ">
              <div className="">
                {/* <ProfileCard label="社名" value="企業名" />
              <ProfileCard label="設立" value="0000年00月00日" />
              <ProfileCard label="資本金" value="000円" /> */}
                <ProfileCard
                  label="所在地"
                  value={`〒107-0062\n東京都港区南青山4-17-33\nグランカーサ南青山2F`}
                />
                <ProfileCard label="電話番号" value="03-6455-5380" />
                <ProfileCard label="FAX" value="03-6455-5381" />
                {/* <ProfileCard label="代表者" value="氏名　氏名" />
              <ProfileCard label="URL" value="example@aa.aaaa" />
              <ProfileCard label="役員" value={`役職　○○○○○○\n役職　○○○○○○\n役職　○○○○○○`} />
              <ProfileCard label="従業員" value="0000名" />
              <ProfileCard label="事業内容" value={`○○○○○○○○○○\n○○○○○○○○○`} />
              <ProfileCard label="主要取引先" value={`○○○○○○○○○○\n○○○○○○○○○`} />
              <ProfileCard label="主要取引銀行" value={`○○○○○○○○○○\n○○○○○○○○○`} /> */}
              </div>
            </div>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Profile_04
