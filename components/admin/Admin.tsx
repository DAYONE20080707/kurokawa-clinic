"use client"

import { useEffect, useState } from "react"
import { useStore } from "@/store/useStore"
import { componentsConfig } from "@/lib/componentsConfig"
import AdminLayout from "@/components/admin/AdminLayout"
import Sidebar from "@/components/admin/Sidebar"

interface AdminProps {
  pageName: keyof typeof componentsConfig
}

const Admin = ({ pageName }: AdminProps) => {
  const [isHydrated, setIsHydrated] = useState(false)
  const selectedSections = useStore((state) => state.selectedSections)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return null
  }

  const pageConfig = componentsConfig[pageName]

  return (
    <AdminLayout sidebarContent={Sidebar} pageName={pageName}>
      {pageConfig?.sections &&
        Object.entries(pageConfig.sections).map(([sectionKey, sectionData]) => (
          <section id={`${sectionKey}-section`} key={sectionKey}>
            {sectionData.components[selectedSections[sectionKey]]}
          </section>
        ))}
    </AdminLayout>
  )
}

export default Admin
