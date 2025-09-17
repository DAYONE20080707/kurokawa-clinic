// components/blog/Blog_06.tsx

"use client"

import { useState, useEffect } from "react"
// import { microcms } from "@/lib/microcms";
import { Cms } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"
import { blogsFetch } from "@/lib/api/blogsFetch"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import SectionContent from "@/components/ui/frame/SectionContent"

interface BlogProps {
  limit?: number
}

const Blog_06 = ({ limit = 5 }: BlogProps) => {
  const [contents, setContents] = useState<Cms[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // --- 旧 microcms 実装 ---
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "blogs",
          queries: { limit },
        });
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
      setLoading(false);
    };

    getWorks();
    */

    // --- 新 blogsFetch 実装 ---
    let mounted = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await blogsFetch.list(Math.min(limit ?? 100, 100))
        if (mounted) setContents(data)
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
        if (mounted) setContents([])
      } finally {
        if (mounted) setLoading(false)
      }
    })()

    return () => {
      mounted = false
    }
  }, [limit])

  if (loading) return <h1 className="h-[657px]">Loading...</h1>
  if (!contents || contents.length === 0) return <h1>No contents</h1>

  return (
    <SectionContent className="md:!py-20" variant="yellow">
      <section className="md:max-w-[1200px] mx-auto ">
        <div className="bg-white md:flex justify-between gap-x-20 py-8 px-4 md:p-16 rounded-[20px]">
          <div className="md:w-[170px]">
            <ContentHeadline enTitle="News" mainTitle="病院からのお知らせ" />
            {/* <div className="mt-0 md:mt-16">
              <MoreButton className="text-accentColor border-accentColor" />
            </div> */}
          </div>
          <div className="mt-6 md:mt-0 md:w-[820px]">
            {contents.map((post) => (
              <div
                key={post.id}
                className="w-full md:flex border-b border-[#eeeeee] py-4 md:p-6 gap-4"
              >
                <p className=" font-en font-bold italic">
                  {post.date
                    ? format(new Date(post.date), "yyyy/MM/dd", { locale: ja })
                    : ""}
                </p>
                <div className="md:flex gap-2">
                  <p className="mt-1 md:mt-0 h-[25px] px-2 bg-accentColor rounded-[5px] text-white flex justify-center items-center text-xs min-w-[145px] flex-shrink-0 w-fit">
                    {Array.isArray(post.category) && post.category.length > 0
                      ? post.category.join(", ")
                      : "カテゴリーなし"}
                  </p>
                  <p className="mt-1 md:mt-0 text-lg font-bold line-clamp-1">{post.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionContent>
  )
}

export default Blog_06
