import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import PageContent from "@/components/ui/frame/PageContent"
import Breadcrumb from "@/components/ui/module/Breadcrumb"
import ComingSoon from "@/components/coming-soon/ComingSoon"

// お問い合わせ完了
const ComingSoonPage = () => {
  return (
    <PageContent>
      {/* <div className="max-w-[1400px] mx-auto">
        <Breadcrumb
          mainTitle="Coming Soon"
          parentDirectoryName=""
          parentDirectoryLink=""
        />
      </div> */}

      {/* <Lowerkv_01 enTitle="CONTACT" mainTitle="お問い合わせ" /> */}
      <ComingSoon />
    </PageContent>
  )
}

export default ComingSoonPage
