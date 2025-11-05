import About from "@/components/About/About";
import Certification from "@/components/Certification/Certification";
import ContainerMain from "@/components/ContainerMain";
import Hero from "@/components/Hero/Hero";
import LogoSkill from "@/components/LogoSkill";
import SmallJobLists from "@/components/SmallJobLists/SmallJobLists";
import { Separator } from "@/components/ui/separator";
import VideoMain from "@/components/VideoMain";

export default async function Home() {
  return (
    <>
      <ContainerMain>
        <Hero />
        <VideoMain />
        <LogoSkill />
        <Separator className="my-4" />
        <About />
        <Separator className="my-4" />
        <Certification />
        <SmallJobLists />
      </ContainerMain>
    </>
  );
}
