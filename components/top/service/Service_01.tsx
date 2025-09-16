// components/service/Service_01.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_01"
import { serviceData } from "@/components/data/top/ServiceData"
import MoreLinkButton from "@/components/ui/button/MoreButton"

const Service_01 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <PageContent>
        <section className="md:max-w-[1200px] mx-auto space-y-10 md:space-y-14">
          <ContentHeadline
            enTitle="Treatment"
            mainTitle="診療のご案内"
            enTitleClassName=""
            titleClassName=""
          />

          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 ">
            {servicesToDisplay.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                subTitle={service.subTitle}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                href={service.href} // リンク先を渡す
                className=""
              />
            ))}
          </div>
          <div className="mx-auto w-fit">
            <MoreLinkButton href="/coming-soon">詳しく見る</MoreLinkButton>
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Service_01
