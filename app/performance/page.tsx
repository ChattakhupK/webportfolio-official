import ContainerMain from "@/components/ContainerMain";
import { TypographyH2 } from "@/components/Typography";
import WorkList from "@/components/WorkList/WorkList";
import { works } from "@/lib/work";

const PerformancePage = async () => {
  return (
    <ContainerMain>
      <div className="text-center">
        <TypographyH2>ผลงาน</TypographyH2>
      </div>
      <div className="my-10 space-y-5">
        {works.map((work, index) => (
          <WorkList
            label={work.label}
            detail={work.detail}
            category={work.category}
            picture={work.picture}
            live={work.live}
            github={work.github}
            key={index}
          />
        ))}
      </div>
    </ContainerMain>
  );
};

export default PerformancePage;
