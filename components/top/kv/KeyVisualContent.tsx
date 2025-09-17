// components/ui/frame/KeyVisualContent.tsx
"use client"

import classNames from "classnames"
import Image from "next/image"
import { useState, useEffect } from "react"

interface KeyVisualContentProps {
  className?: string
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({ className }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      pc: "/top/kv/kv_img1.jpg",
      sp: "/top/kv/kv_img1_sp.jpg",
      alt: "KV Image 1",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // 4秒ごとに切り替え

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className={classNames("relative w-full", className)}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* PC表示（md以上） */}
          <Image
            src={slide.pc}
            alt={slide.alt}
            priority={index === 0}
            fill
            sizes="(min-width: 768px) 100vw"
            className="hidden md:block object-cover"
          />
          {/* SP表示（md未満） */}
          <Image
            src={slide.sp}
            alt={slide.alt}
            priority={index === 0}
            fill
            sizes="100vw"
            className="block md:hidden object-cover"
          />
          {/* 黒20%のグラデーションオーバーレイ */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20"></div> */}
        </div>
      ))}
    </div>
  )
}

export default KeyVisualContent
