import KeyVisual_01 from "@/components/top/kv/KeyVisual_01"
import About_04 from "@/components/top/about/About_04"
import Service_01 from "@/components/top/service/Service_01"
import Blog_06 from "@/components/top/blog/Blog_06"
import Profile_05 from "@/components/top/profile/Profile_05"

// メインページ
const HomePage = () => {
  return (
    <div>
      <KeyVisual_01 />
      <Blog_06 />
      <div id="treatment">
        <Service_01 />
      </div>
      <div id="clinic">
        <About_04 />
      </div>
      <Profile_05 />
    </div>
  )
}

export default HomePage
