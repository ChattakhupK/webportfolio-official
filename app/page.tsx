import About from "@/components/About/About";
import Certification from "@/components/Certification/Certification";
import Hero from "@/components/Hero/Hero";
import LogoSkill from "@/components/LogoSkill";
import { Separator } from "@/components/ui/separator";
import VideoMain from "@/components/VideoMain";

export default function Home() {
  return (
    <main className="py-40">
      <Hero />
      <VideoMain />
      <LogoSkill />
      <Separator className="my-4" />
      <About />
      <Certification />
    </main>
  );
}
