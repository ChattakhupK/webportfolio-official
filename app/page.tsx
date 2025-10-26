import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import LogoSkill from "@/components/LogoSkill";
import { ModeToggle } from "@/components/ModeToggle";
import Navbar from "@/components/nav/Navbar";
import { Button } from "@/components/ui/button";
import VideoMain from "@/components/VideoMain";

export default function Home() {
  return (
    <main className="py-40">
      <Hero />
      <VideoMain />
      <LogoSkill />
      <About />
    </main>
  );
}
