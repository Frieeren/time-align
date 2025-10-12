import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { RegisterPage } from ".";
import { TextField } from "../login/components/TextField";

const meta = {
  title: "v2/Views/Register",
  component: RegisterPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RegisterPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// 이메일 주소 입력
export const 이메일_주소_입력: Story = {
  args: {},
  render: () => {
    const [email, setEmail] = React.useState("");

    return (
      <div style={{ width: "360px" }}>
        <TextField
          type="text"
          label="이메일 주소"
          placeholder="abcdef@naver.com"
          value={email}
          onChange={setEmail}
          error="잘못된 이메일 형식입니다."
          validate={value => {
            // 빈 값이거나 유효한 이메일 형식인지 확인
            if (value.length === 0) return true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
          }}
        />
      </div>
    );
  },
};

// 비밀번호 입력
export const 비밀번호_입력: Story = {
  args: {},
  render: () => {
    const [password, setPassword] = React.useState("");

    return (
      <div style={{ width: "360px", display: "flex", flexDirection: "column", gap: "36px" }}>
        <TextField
          type="password"
          label="비밀번호"
          placeholder="8~16자리 영대•소문자, 숫자, 특수문자 조합"
          value={password}
          onChange={setPassword}
          error="잘못된 비밀번호 형식입니다."
          validate={value => {
            // 8~16자리 영대•소문자, 숫자, 특수문자 조합
            if (value.length === 0) return true;
            return value.length >= 8 && value.length <= 16;
          }}
        />
        <TextField
          type="password"
          placeholder="8~16자리 영대•소문자, 숫자, 특수문자 조합"
          label="비밀번호 확인"
          value={password}
          onChange={setPassword}
          error="비밀번호가 일치하지 않습니다."
          validate={value => {
            // 빈 값이거나 비밀번호와 일치하는지 확인
            if (value.length === 0) return true;
            if (value !== password) return false;
            return true;
          }}
        />
      </div>
    );
  },
};

// 닉네임 입력
export const 닉네임: Story = {
  args: {},
  render: () => {
    const [nickname, setNickname] = React.useState("");

    return (
      <div style={{ width: "360px" }}>
        <TextField
          type="text"
          placeholder="6~10자리 한글,숫자 조합"
          label="닉네임"
          value={nickname}
          onChange={setNickname}
          error="닉네임이 중복되요."
          validate={value => {
            // 빈 값이거나 3자 이상인지 확인
            if (value.length === 0) return true;
            return value.length >= 6;
          }}
        />
      </div>
    );
  },
};
