import ContainerMain from "@/components/ContainerMain";
import { TypographyH2 } from "@/components/Typography";
import ShowWorkList from "@/components/WorkList/ShowWorkList";

const PerformancePage = () => {
  return (
    <ContainerMain>
      <div className="text-center">
        <TypographyH2>ผลงาน</TypographyH2>
      </div>

      <ShowWorkList />
    </ContainerMain>
  );
};

export default PerformancePage;
