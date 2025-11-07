import ContainerMain from "@/components/ContainerMain";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <ContainerMain>
      <div className="flex justify-center">
        <Skeleton className="h-[40px] w-[230px] rounded-2xl mb-10" />
      </div>
      <div className="mb-10">
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-[30px] w-[180px] rounded-2xl mb-5" />
        <div className="flex flex-col items-end space-y-2">
          <Skeleton className="h-[20px] w-[120px] rounded-2xl" />
          <Skeleton className="h-[20px] w-[180px] rounded-2xl" />
        </div>
      </div>
      <div className="space-y-1">
        <Skeleton className="h-[20px] w-[300px] rounded-2xl" />
        <Skeleton className="h-[20px] w-[380px] rounded-2xl" />
        <Skeleton className="h-[20px] w-[380px] rounded-2xl" />
      </div>
      <div className="mt-10 mb-10">
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-[30px] w-[180px] rounded-2xl mb-5" />
        <div className="flex flex-col items-end space-y-2">
          <Skeleton className="h-[20px] w-[120px] rounded-2xl" />
          <Skeleton className="h-[20px] w-[180px] rounded-2xl" />
        </div>
      </div>
      <div className="space-y-1">
        <Skeleton className="h-[20px] w-[300px] rounded-2xl" />
        <Skeleton className="h-[20px] w-[380px] rounded-2xl" />
        <Skeleton className="h-[20px] w-[380px] rounded-2xl" />
      </div>
    </ContainerMain>
  );
};

export default loading;
