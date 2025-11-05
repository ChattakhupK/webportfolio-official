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
    label: "เว็บ PORTFOLIO | CK",
    category: "WEB APP",
    detail:
      "เว็บที่ผมใช้รวบรวมผลงานการทำงานออกแบบต่างๆ รูปแบบข้อมูลก่อนจะเป็นเว็บล่าสุดที่ผมใช้งานตอนนี้",
    picture: "/workpic/workpic06.png",
    github: "https://github.com/ChattakhupK/nextjs-portfolio-2025",
    live: "https://modern-portfolio-sand-gamma.vercel.app/",
  },
  {
    label: "เว็บ E-COMMERCE | LNWCOM",
    category: "WEB APP",
    detail:
      "เว็บสำหรับขายอุปกรณ์ไอที ที่ทันสมัยใช้ไม่ยากเพราะไม่ได้มีฟีจเจอร์เยอแยะจนทำให้รก ทำให้ผู้ใช้เมื่อเข้ามาครั้งแรกสามารถใช้งานได้ทันที",
    picture: "/workpic/workpic01.png",
    github: "https://github.com/ChattakhupK/LNWCOM-ECOM-FE",
    live: "https://lnwcom-web-by-chattakhupk.vercel.app/",
  },
  {
    label: "เว็บ SOCIAL | ANIMALCOMMU",
    category: "WEB APP",
    detail:
      "เว็บไซต์พูดคุยเพื่อสัตว์น่ารักทั้งหลายในโลกและเป็นการฝึกใช้ LIBRARY MUI จัดการ UI ต่างๆและ THEME DARK/LIGHT",
    picture: "/workpic/workpic05.png",
    github: "https://github.com/ChattakhupK/Thaisoical-js",
    live: "/",
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
  {
    label: "ออกแบบ UI | FIGMA LINEMAN",
    category: "DESIGN",
    detail:
      "ออกแบบ UI LINEMAN ด้วยโปรแกรม FIGMA เพื่อฝึกการใช้โปรแกรมหรือให้เช้าใจกระบวนการออกแบบ",
    picture: "/workpic/workpic03.png",
    github: "/",
    live: "https://www.figma.com/proto/ucgxJ2WNQtmOaykdQA9NVU/LINE-MAN-by-Vat?node-id=25-1754&starting-point-node-id=25%3A914",
  },
  {
    label: "ออกแบบ UI | FIGMA PRIMUS",
    category: "DESIGN",
    detail:
      "ออกแบบ WEB UI ให้บริษัทด้วยโปรแกรม FIGMA เพื่อให้ผู้ใช้เข้าถึงได้ง่ายทำการซื้อสินค้าต่างๆได้สะดวกขึ้น",
    picture: "/workpic/workpic04.png",
    github: "/",
    live: "https://www.figma.com/proto/GCkUVVkyGJbLA6y0RGekCY/Web-Primus-Test?node-id=1-2&node-type=canvas&t=3qRC90leUBoqD0uO-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];
