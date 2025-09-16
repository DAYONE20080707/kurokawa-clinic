import FreeButtonBlue from "@/components/ui/button/FreeButtonBlue"
import { Clock } from "lucide-react"

const ComingSoon = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-10 py-16 md:pb-[157px] md:pt-[137px] px-5">
          <Clock
            className=" w-20 md:w-[120px] h-auto text-accentColor"
            strokeWidth={1}
          />

          <h2 className=" text-2xl md:text-[40px] font-medium tracking-wider text-accentColor leading-[160%]">
            Coming Soon
            <br className="md:hidden" />
          </h2>
          <p className="text-base md:text-lg md:text-center leading-[160%]">
            現在、このページは準備中です。
            <br />
            もうしばらくお待ちください。
          </p>
          <div className=" mt-10 md:mt-0">
            <FreeButtonBlue href="/" text="トップページへ戻る" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoon
