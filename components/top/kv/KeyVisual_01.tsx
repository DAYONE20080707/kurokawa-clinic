// components/kv/KeyVisual_01.tsx

"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"

// キービジュアル
const KeyVisual_01 = () => {
  return (
    <>
      <FirstViewContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className="relative h-screen md:h-[100vh]">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-full" />
          <div className="absolute inset-0 md:max-w-[1465px] mx-auto h-full md:mt-[60px]">
            <TopPageHeadline
              subtitleTop={
                <>
                  高槻市の内科・小児科 黒川医院
                </>
              }
              mainTitle={
                <>
                  <span>
                  地域に密着した <br />
｢まちのお医者さん～<br className="md:hidden" />かかりつけ医｣を <br />
目指しています

                  </span>
                </>
              }
              // subtitleBottom={
              //   <>
              //     日本語見出し文日本語見出し文はいります日本語見出し文日本語見出し文はいります日本語見出し文日本語見出し文はいります
              //   </>
              // }
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </section>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_01
