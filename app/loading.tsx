import ContainerMain from "@/components/ContainerMain";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <ContainerMain>
      <header className="flex flex-col md:flex-row justify-between md:items-center">
        {/* ข้อความหลักทางซ้าย */}
        <div className="text-start md:w-md">
          <Skeleton className="h-[30px] w-[230px] rounded-2xl mb-10" />
          <div className="space-y-2">
            <Skeleton className="h-[15px] w-[400px] rounded-2xl" />
            <Skeleton className="h-[15px] w-[300px] rounded-2xl" />
          </div>
        </div>

        {/* ข้อความรองทางขวา */}
        <div className="flex flex-col justify-between items-end h-full mt-10 md:mt-0">
          <div className="text-end space-y-2 mb-6 flex flex-col items-end">
            <Skeleton className="h-[15px] w-[200px] rounded-2xl" />
            <Skeleton className="h-[15px] w-[150px] rounded-2xl" />
            <Skeleton className="h-[15px] w-[120px] rounded-2xl" />
          </div>
          <Skeleton className="h-[30px] w-[135px] rounded-2xl" />
        </div>
      </header>
      <section className="mt-15">
        <Skeleton className="h-[600px] w-full rounded-md" />
      </section>
      <section className="mt-5">
        <Skeleton className="h-[100px] w-full rounded-md" />
      </section>
    </ContainerMain>
  );
};

export default loading;
