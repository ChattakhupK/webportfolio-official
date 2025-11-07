import ContainerMain from "@/components/ContainerMain";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <ContainerMain>
      <div className="flex flex-col justify-start">
        <Skeleton className="h-[40px] w-[200px] rounded-2xl mb-5" />
        <div className="space-y-2">
          <Skeleton className="h-[25px] w-full rounded-2xl" />
          <Skeleton className="h-[25px] w-1/2 rounded-2xl" />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Skeleton className="h-[450px] w-[500px] rounded-2xl mb-5" />
      </div>
    </ContainerMain>
  );
};

export default loading;
