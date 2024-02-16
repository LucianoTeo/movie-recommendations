import { PropsWithChildren } from "react"
import Sidebar from "@/components/Sidebar"

function WithSidebarLayout({ children }: PropsWithChildren) {
  return (
    <section className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="w-full max-w-5xl mx-auto px-4 pt-8 sm:pt-14">
        {children}
      </main>
    </section>
  )
}

export default WithSidebarLayout