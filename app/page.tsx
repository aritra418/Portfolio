import { Aboutme } from "@/components/aboutme";
import { Topbar } from "@/components/topbar";

export default function MainPage() {
  return <div className="bg-background h-screen v-screen font-nerd">
    <Topbar />

    <div>
      <div><Aboutme /></div>
    </div>
  </div>
}
