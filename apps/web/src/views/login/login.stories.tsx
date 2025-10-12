import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoginPage } from ".";
import { SNSLoginButton } from "./components/SNSLoginButton";

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
