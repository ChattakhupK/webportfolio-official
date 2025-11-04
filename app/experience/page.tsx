import ContainerMain from "@/components/ContainerMain";
import JobCardSection from "@/components/JobList/JobCardSection";
import { TypographyH2, TypographyMuted } from "@/components/Typography";
import { joblists } from "@/lib/joblists";

const ExperiencePage = () => {
  return (
    <ContainerMain>
      <div className="text-center">
        <TypographyH2>ประสบการณ์</TypographyH2>
        <div className="space-y-10 my-10">
          {joblists.map((job, index) => (
            <JobCardSection
              key={index}
              label={job.label}
              position={job.position}
              detail={job.detail}
              exp={job.exp}
              picture={job.picture}
            />
          ))}
        </div>
      </div>
    </ContainerMain>
  );
};

export default ExperiencePage;
