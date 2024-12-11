import { SidebarProvider} from "@/components/ui/sidebar"
import AppMenubar from "../AppMenubar"
import AppSidebar from "@/components/AppSidebar"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {


  return (
    <>
    <AppMenubar/>
        <SidebarProvider  className="bg-white/10 backdrop-blur-lg border border-white/20  shadow-md ">
        <AppSidebar/>
        <main>
          <Outlet/>
      </main>
    </SidebarProvider>
    </>

  )
}

export default DefaultLayout