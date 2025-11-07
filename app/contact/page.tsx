import ContainerMain from "@/components/ContainerMain";
import ProfileForm from "@/components/form";
import { TypographyH2, TypographyP } from "@/components/Typography";

const ContactPage = async () => {
  return (
    <ContainerMain>
      <TypographyH2>การติดต่อ</TypographyH2>
      <TypographyP>
        ผมยินดีที่จะรับฟังความเห็นจากคุณ
        หรือการรับฟังความคิดเห็นเพื่อนำไปปรับปรุงผลงานของผมให้ดียิ่งขึ้น
        ถ้ามีความสนใจในตัวผมส่งข้อมูลมาทางฟอร์ม
        หรือติดต่อผ่านเบอร์โทรศัพท์ได้ครับ
      </TypographyP>
      <ProfileForm />
    </ContainerMain>
  );
};

export default ContactPage;
