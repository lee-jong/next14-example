"use client";

import Card from "@/components/Card/layout";
import Personal from "./personal";
import Public from "./public";
import { useQuery } from "@tanstack/react-query";
import { getfetch } from "@/helper/fetch/todo";

interface Props {
  params: { id: string };
}

const detailasd = ({ params }: Props) => {
  const { data } = useQuery({
    queryKey: ["todo-test"],
    queryFn: () => getfetch(`/todo/together/list?roomId=${params.id}`),
  });

  return (
    <div className="m-[30px]">
      <Card>
        <div>공통 목표 : 다이어트</div>
      </Card>
      <div className="mt-[30px] grid grid-cols-auto gap-[30px]">
        <Personal {...data} />
        <Public {...data} />
      </div>
    </div>
  );
};

export default detailasd;
