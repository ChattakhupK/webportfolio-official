export interface joblistsProps {
  label: string;
  position: string;
  exp: string;
  detail: string[];
  picture: string[];
}

export const joblists: joblistsProps[] = [
  {
    label: "นักพัฒนาเว็บไซต์",
    position: "Developer",
    exp: "ธันวาคม 2567 - พฤษภาคม 2568",
    detail: [
      "เขียนเว็บไซต์ด้วย Nextjs , React ตามทีได้รับมอบหมายจากที UX/UI Design",
      "ทํา Backend ด้วย Nodejs และออกแบบฐานข้อมูลด้วย sequelize (ORM) เพือ ออกแบบ Database",
    ],
    picture: [
      "/jobpic/dev1.jpg",
      "/jobpic/dev2.jpg",
      "/jobpic/dev3.jpg",
      "/jobpic/dev4.jpg",
      "/jobpic/dev5.jpg",
      "/jobpic/dev6.jpg",
    ],
  },
  {
    label: "พนักงานซ่อมบำรุง",
    position: "IT Support",
    exp: "กรกฎาคม 2566 - พฤศจิกายน 2566",
    detail: [
      "ซ่อมแซมอุปกรณ์คอมพิวเตอร์ เครื่องปริ้น อินเตอร์เน็ต",
      "ดูแลกล้องวงจรปิด ติดตั้งซอฟต์แวร์กล้องวงจรปิด",
      "ลงโปรแกรมต่างๆให้สํานักงาน",
    ],
    picture: [
      "/jobpic/itsup1.jpg",
      "/jobpic/itsup2.jpg",
      "/jobpic/itsup3.jpg",
      "/jobpic/itsup4.jpg",
      "/jobpic/itsup5.jpg",
      "/jobpic/itsup6.jpg",
      "/jobpic/itsup7.jpg",
    ],
  },
];
