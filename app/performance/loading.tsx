import ContainerMain from "@/components/ContainerMain";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <ContainerMain>
      <div className="flex justify-center">
        <Skeleton className="h-[40px] w-[230px] rounded-2xl mb-10" />
      </div>
      <div className="mb-10 mx-5">
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
      <div className="mb-10 mx-5">
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
    </ContainerMain>
  );
};

export default loading;
