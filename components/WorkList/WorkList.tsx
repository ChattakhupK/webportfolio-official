import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { worksProps } from "@/lib/work";

const WorkList = ({
  label,
  detail,
  category,
  picture,
  live,
  github,
}: worksProps) => {
  return (
    <section className="w-full bg-muted/60 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 scale-95">
      {/* Left Section */}
      <div className="flex-1 text-left space-y-4">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          {category}
        </p>
        <h2 className="text-3xl font-bold">{label}</h2>
        <p className="text-muted-foreground max-w-md">{detail}</p>
        <div className="space-x-2">
          {github === "/" ? null : (
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 cursor-pointer"
            >
              <Link target="_blank" href={github}>
                โค้ด
              </Link>
            </Button>
          )}
          {live === "/" ? null : (
            <Button
              asChild
              variant="default"
              className="rounded-full px-6 cursor-pointer"
            >
              <Link target="_blank" href={live}>
                ตัวอย่าง
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center gap-6 bg-muted rounded-3xl overflow-hidden w-full md:w-[180px] h-[370px] border">
        <Image
          priority={true}
          src={picture}
          alt={label}
          width={1200}
          height={1200}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default WorkList;
