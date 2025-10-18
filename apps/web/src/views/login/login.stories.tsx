import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "next/link";
import React from "react";
import { LoginPage } from ".";
import { Button } from "./components/Button";
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
          error="잘못된 이메일 주소입니다."
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
          placeholder="8~16자리 영대•소문자, 숫자, 특수문자 조합"
          value={password}
          onChange={setPassword}
          error="잘못된 비밀번호입니다."
          validate={value => {
            // 8~16자리 영대•소문자, 숫자, 특수문자 조합
            if (value.length === 0) return true;
            return value.length >= 8 && value.length <= 16;
          }}
        />
      </div>
    );
  },
};

// 로그인 버튼
export const 로그인_버튼: Story = {
  args: {},
  render: () => (
    <div style={{ width: "360px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <Button label="로그인" />
      <Button label="로그인" disabled />
    </div>
  ),
};

export const 아이디_찾기_비밀번호_찾기_회원가입: Story = {
  args: {},
  render: () => {
    return (
      <div style={{ width: "360px", display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
        <Link
          style={{
            color: "#111",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "140%",
            letterSpacing: "-0.24px",
          }}
          href="https://google.com"
        >
          아이디 찾기
        </Link>
        <div style={{ width: "1px", height: "11px", backgroundColor: "#D9D9D9" }} />
        <Link
          style={{
            color: "#111",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "140%",
            letterSpacing: "-0.24px",
          }}
          href="https://google.com"
        >
          비밀번호 찾기
        </Link>
        <div style={{ width: "1px", height: "11px", backgroundColor: "#D9D9D9" }} />
        <Link
          style={{
            color: "#111",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "140%",
            letterSpacing: "-0.24px",
          }}
          href="https://google.com"
        >
          회원가입
        </Link>
      </div>
    );
  },
};

export const SNS_계정으로_로그인: Story = {
  args: {},
  render: () => {
    return (
      <div style={{ width: "360px", display: "flex", flexDirection: "row", gap: "12px", alignItems: "center" }}>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#D9D9D9",
          }}
        />
        <div
          style={{
            color: "#A7A7A7",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "140%",
            letterSpacing: "-0.24px",
            textAlign: "center",
            minWidth: "fit-content",
          }}
        >
          SNS 계정으로 로그인
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#D9D9D9",
          }}
        />
      </div>
    );
  },
};

export const 통합_에러_메세지: Story = {
  args: {},
  render: () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const getErrorMessage = () => {
      if (!email || !password) return null;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) return "잘못된 이메일 주소입니다.";

      if (password.length < 8 || password.length > 16) return "잘못된 비밀번호 입니다.";

      return null;
    };

    return (
      <div style={{ width: "360px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextField
          type="text"
          label="이메일 주소"
          placeholder="abcdef@naver.com"
          value={email}
          onChange={setEmail}
          validate={value => {
            // 빈 값이거나 유효한 이메일 형식인지 확인
            if (value.length === 0) return true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
          }}
        />
        <TextField
          type="password"
          label="비밀번호"
          placeholder="8~16자리 영대•소문자, 숫자, 특수문자 조합"
          value={password}
          onChange={setPassword}
          validate={value => {
            // 8~16자리 영대•소문자, 숫자, 특수문자 조합
            if (value.length === 0) return true;
            return value.length >= 8 && value.length <= 16;
          }}
        />
        <div
          style={{
            color: "#E52929",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "140%",
            letterSpacing: "-0.24px",
          }}
        >
          {getErrorMessage()}
        </div>
        <Button label="로그인" />
      </div>
    );
  },
};
