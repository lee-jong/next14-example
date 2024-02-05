import Card from "@/components/Card/layout";

const cardList = [
  {
    title: "오늘의 계획",
    description: "나만의 계획을 세워 보세요!",
    path: "/todo",
  },
  {
    title: "친구와 계획",
    description: "친구와 함께 진행 사항을 체크 해봐요!",
    path: "/",
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between my-[10%] mx-[5%]">
      <div>
        <div className="text-white h-[100px]">Logo 추가예정</div>
        {/* <Image src="/logo.webp" width="500" height="550" alt="I CAN DO LOGO" /> */}
      </div>
      <div className="grid grid-cols-auto gap-[30px] text-white w-full">
        {cardList.map(({ title, description, path }) => (
          <Card path={path} hover>
            <div className="text-lg font-semibold text-white">{title}</div>
            <div className="text-base text-white">{description}</div>
          </Card>
        ))}
      </div>
    </main>
  );
}
