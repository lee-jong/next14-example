"use client";

import { useState, memo } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/Card/layout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { signInUser } from "@/helper/fetch/user";

const Login = () => {
  const [user, setUser] = useState({ id: "", pw: "" });
  const router = useRouter();
  const onChange = (val: string, name: string) => {
    setUser({ ...user, [name]: val });
  };

  return (
    <div className="relative h-screen flex center">
      <div className="w-1/2 h-1/2">
        <Card>
          <div className="flex flex-col mt-[4%] center gap-[30px]">
            <div className="text-5xl font-bold">로그인</div>
            <div className="flex w-full center">
              <div className="text-2xl w-[40px] font-bold">ID</div>
              <div className="ml-[40px] w-1/2">
                <Input onChange={(val) => onChange(val, "id")} />
              </div>
            </div>
            <div className="flex w-full center">
              <div className="text-2xl w-[40px] font-bold">PW</div>
              <div className="ml-[40px] w-1/2">
                <Input
                  onChange={(val) => onChange(val, "pw")}
                  type="password"
                />
              </div>
            </div>
            <div className="w-1/4 flex center">
              <Button onClick={() => signInUser(user)} text="로그인" />
            </div>
            <div
              className="absolute bottom-[50px] right-[50px] cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              <div>회원가입</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default memo(Login);
