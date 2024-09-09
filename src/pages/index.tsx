
import { VideoGrid } from "@/components/VideoGrid"
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return ( 

    <div>
      <AppBar></AppBar>
      <div className="grid grid-cols-12">
        <div className="hidden lg:block col-span-1 pt-5">
          <SideBar ></SideBar>
        </div>
        <div className="col-span-12 lg:col-span-11">
          <VideoGrid></VideoGrid>
        </div>
      </div>
    </div>

  );
}
