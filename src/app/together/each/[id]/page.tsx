import Card from "@/components/Card/layout";

interface Props {
  params: { id: string };
}

const fetchData = async (id: string) => {
  const data: string = await new Promise((res, rej) => {
    res(`${id} >> HI`);
  });

  return data;
};

const detailasd = async ({ params }: Props) => {
  const data = await fetchData(params.id);
  return (
    <div className="m-[30px]">
      <Card>
        <div>개인 목표별 달성</div>
      </Card>
    </div>
  );
};

export default detailasd;
