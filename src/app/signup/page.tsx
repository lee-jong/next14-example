"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, memo } from "react";
import useDisplayStore from "@/store/useDisplayStore";
import Card from "@/components/Card/layout";
import Input from "@/components/Input";
import Button from "@/components/Button";
import valid from "@/helper/validation.ts";
import { insertUser, duplicatedId } from "@/helper/fetch/user";
import Crypto from "@/helper/crypto";

type Key = "id" | "nickname" | "pw" | "rePw" | "dateOfBirth";

const inputInfo: Array<{
  key: Key;
  name: string;
  placeholder: string;
  type?: "text" | "password" | undefined;
}> = [
  { key: "id", name: "아이디", placeholder: "영문, 숫자를 사용하여 4~20자리" },
  {
    key: "nickname",
    name: "닉네임",
    placeholder: "한글, 영문, 숫자를 사용하여 2~10자리",
  },
  {
    key: "pw",
    name: "비밀번호",
    placeholder: "영문, 숫자, 특수문자 중 2가지 이상 조합하여 8~16자리",
    type: "password",
  },
  {
    key: "rePw",
    name: "비밀번호 확인",
    placeholder: "비밀번호를 재입력 해주세요.",
    type: "password",
  },
  { key: "dateOfBirth", name: "생년월일", placeholder: "생년월일 8자리" },
];

const initData: { [key in Key]: string } = {
  id: "",
  nickname: "",
  pw: "",
  rePw: "",
  dateOfBirth: "",
};

const SignUp = () => {
  const router = useRouter();
  const { fetchPopup, fetchProgress } = useDisplayStore();
  const [userInfo, setUserInfo] = useState(initData);
  const [errorList, setErrorList] = useState(initData);
  const [dupCheck, setDupCheck] = useState(false);

  useEffect(() => {
    if (!dupCheck) return;
    setDupCheck(false);
  }, [userInfo.id]);

  const onChange = (val: string, key: Key) => {
    setUserInfo({
      ...userInfo,
      [key]: val,
    });
  };

  const onBlur = (val: string, key: Key) => {
    const { pw } = userInfo;
    if (key === "rePw") {
      return setErrorList({ ...errorList, [key]: valid[key](val, pw) });
    }

    setErrorList({ ...errorList, [key]: valid[key](val) });
  };

  const onClickSignUp = async () => {
    await new Promise((res, rej) => {
      if (!dupCheck) {
        return rej({ key: "id", msg: "아이디 중복 체크를 해주세요." });
      }

      const keys: Key[] = Object.keys(initData) as Key[];
      keys.map((key: Key) => {
        let msg;
        const data = userInfo[key];

        if (key === "rePw") msg = valid[key](data, userInfo.pw);
        else msg = valid[key](data);

        if (msg) return rej({ key, msg });
        res("");
      });
    })
      .then(sendSignUp)
      .catch((err) => {
        setErrorList({ ...errorList, [err.key]: err.msg });
      });
  };

  const sendSignUp = async () => {
    fetchProgress({ state: true });
    const data = { ...userInfo, pw: Crypto.encrypt(userInfo.pw), rePw: "" };
    await insertUser(data)
      .then(() => {
        fetchPopup({
          state: true,
          title: "확인",
          desc: "회원가입이 완료되었습니다!",
          callback: () => router.push("/login"),
        });
      })
      .catch(() => {
        fetchPopup({
          state: true,
          title: "확인",
          desc: "입력정보 또는 관리자에게 문의",
        });
      })
      .finally(() => {
        fetchProgress({ state: false });
      });
  };

  const sendDuplicatedId = async () => {
    fetchProgress({ state: true });

    const msg = valid["id"](userInfo.id);
    setErrorList({ ...errorList, id: msg });

    if (msg) return;
    await duplicatedId(userInfo)
      .then(() => {
        setDupCheck(true);
      })
      .catch(() => {
        setErrorList({ ...errorList, id: "중복된 아이디가 존재합니다." });
      })
      .finally(() => {
        fetchProgress({ state: false });
      });
  };

  return (
    <div className="flex justify-center">
      <div className="h-screen w-1/2 py-[60px]">
        <Card>
          <div className="relative flex flex-col text-center gap-[30px] w-full h-full">
            <div className="mt-[30px]">
              <div className="font-bold text-3xl">회원가입</div>
            </div>
            {inputInfo.map((item, idx) => (
              <div key={`sign_input_${idx}`}>
                <div className="relative flex w-full px-[110px]">
                  <div className="text-xl w-[100px] font-bold flex center">
                    {item.name}
                  </div>
                  <div className="ml-[20px] w-full">
                    <Input
                      onChange={(val) => onChange(val, item.key)}
                      onBlur={(val) => onBlur(val, item.key)}
                      placeholder={item.placeholder}
                      type={item.type}
                    />
                  </div>
                  {item.key == "id" && (
                    <div className="absolute right-3">
                      <Button
                        text={dupCheck ? "완료" : "중복확인"}
                        onClick={sendDuplicatedId}
                      />
                    </div>
                  )}
                </div>
                {errorList[item.key] && (
                  <div className="text-red-700 mt-[10px]">
                    {errorList[item.key]}
                  </div>
                )}
              </div>
            ))}
            <div className="absolute w-full px-[110px] h-[80px] bottom-[30px]">
              <Button text="가입하기" onClick={onClickSignUp} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default memo(SignUp);
