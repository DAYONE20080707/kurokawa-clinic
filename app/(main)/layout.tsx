import Footer1 from "@/components/footer/Footer1"
import Footer2 from "@/components/footer/Footer2"
import Header1 from "@/components/header/Header_01"
import Header2 from "@/components/header/Header_02"
import Header_04 from "@/components/header/Header_04"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header_04 />
      <main className="flex-1">{children}</main>
      <Footer1 />
    </div>
  )
}

export default MainLayout
