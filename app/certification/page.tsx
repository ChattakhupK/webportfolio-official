import CerSection from "@/components/Certification/CerSection";
import ContainerMain from "@/components/ContainerMain";
import { TypographyH2 } from "@/components/Typography";
import fs from "fs";
import path from "path";

const CertificationPage = async () => {
  const imagesDir = path.join(process.cwd(), "public/certification");
  const files = fs.readdirSync(imagesDir);

  const futureskill = files.filter(
    (file) => /\.(png|jpe?g|gif|webp)$/i.test(file) && /futureskill/i.test(file)
  );

  const borntodev = files.filter(
    (file) => /\.(png|jpe?g|gif|webp)$/i.test(file) && /borntodev/i.test(file)
  );
  const etc = files.filter(
    (file) => /\.(png|jpe?g|gif|webp)$/i.test(file) && /etc/i.test(file)
  );

  return (
    <ContainerMain>
      <div className="text-center">
        <TypographyH2>ประกาศนียบัตร</TypographyH2>
      </div>
      <CerSection futureskill={futureskill} borntodev={borntodev} etc={etc} />
    </ContainerMain>
  );
};

export default CertificationPage;
