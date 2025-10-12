import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { LoginPage } from ".";
import { SNSLoginButton } from "./components/SNSLoginButton";
import { TextField } from "./components/TextField";

const meta = {
  title: "v2/Views/Login",
  component: LoginPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// 구글 로그인
export const 구글_로그인: Story = {
  args: {},
  render: () => (
    <div style={{ width: "360px" }}>
      <SNSLoginButton provider="google" />
    </div>
  ),
};

// 카카오 로그인
export const 카카오_로그인: Story = {
  args: {},
  render: () => (
    <div style={{ width: "360px" }}>
      <SNSLoginButton provider="kakao" />
    </div>
  ),
};

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
          error="올바른 이메일 형식이 아닙니다."
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
      <div style={{ width: "360px" }}>
        <TextField
          type="password"
          label="비밀번호"
          value={password}
          onChange={setPassword}
          error="잘못된 비밀번호입니다."
          validate={value => {
            // 빈 값이거나 8자 이상인지 확인
            if (value.length === 0) return true;
            return value.length >= 8;
          }}
        />
      </div>
    );
  },
};
