"use client";
import { memo, useEffect, useState } from "react";
import Card from "@/components/Card/layout";
import Button from "@/components/Button";
import Room from "./room";
import RoomPopup from "@/components/Popup/room";

const Together = () => {
  const [popup, onPopup] = useState(false);
  const tableHeader = {
    index: "index",
    content: "내용",
    users: "입장 유저",
  };
  // DB화
  const list = [
    {
      index: 1,
      content: "1",
      users: "1/4",
    },
    {
      index: 2,
      content: "2",
      users: "1/4",
    },
  ];

  const onClick = (): void => {};

  return (
    <>
      <div className="m-[30px]">
        <Card>
          <div className="flex justify-between items-center">
            <div>친구와 함께 공유해보세요.</div>
            <Button onClick={() => onClick()} text="생성하기" />
          </div>
        </Card>
        <div className="mt-[30px] grid grid-cols-auto gap-[30px]">
          <Card>
            <div>목록</div>
            <div className="mt-[30px] min-h-[500px] max-h-[500px] overflow-y-scroll scroll_list">
              <div className="flex flex-col divide-y mr-[30px]">
                <Room {...tableHeader} />
                {list.map((room, idx) => (
                  <Room {...room} key={`room_${idx}`} />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
      {popup && <RoomPopup />}
    </>
  );
};

export default memo(Together);
