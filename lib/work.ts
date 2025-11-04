export interface worksProps {
  label: string;
  category: string;
  detail: string;
  picture: string;
  github: string;
  live: string;
}

export const works: worksProps[] = [
  {
    label: "เว็บ E-commerce | LNWCOM",
    category: "WEB APP",
    detail:
      "เว็บสำหรับขายอุปกรณ์ไอที ที่ทันสมัยใช้ไม่ยากเพราะไม่ได้มีฟีจเจอร์เยอแยะจนทำให้รก ทำให้ผู้ใช้เมื่อเข้ามาครั้งแรกสามารถใช้งานได้ทันที",
    picture: "/workpic/workpic01.png",
    github: "https://github.com/ChattakhupK/LNWCOM-ECOM-FE",
    live: "https://lnwcom-web-by-chattakhupk.vercel.app/",
  },
  {
    label: "เว็บ หาจ้าง | FINDWORK",
    category: "WEB APP",
    detail:
      "เว็บแอพสำหรับให้นายจ้างที่ต้องการจ้างงานรายครั้ง และ ลูกจ้างที่ต้องการหางานเสริม หรือ งานหลัก ได้มาเจอกันด้วยเว็บแอพนี้",
    picture: "/workpic/workpic02.png",
    github: "https://github.com/ChattakhupK/Findwork-nextjs-ts",
    live: "https://findwork-pi.vercel.app/",
  },
];
