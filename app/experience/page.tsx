import ContainerMain from "@/components/ContainerMain";
import ShowJobCard from "@/components/JobList/ShowJobCard";
import { TypographyH2 } from "@/components/Typography";

const ExperiencePage = async () => {
  return (
    <ContainerMain>
      <div className="text-center">
        <TypographyH2>ประสบการณ์</TypographyH2>
        <ShowJobCard />
      </div>
    </ContainerMain>
  );
};

export default ExperiencePage;
