import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "../Button";
import { Toast } from "./Toast";
import { ToastProvider } from "./ToastProvider";
import { useToast } from "./useToast";

const meta: Meta<typeof Toast> = {
  title: "V2/Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-right", "top-center", "bottom-left", "bottom-right", "bottom-center"],
    },
    type: {
      control: "select",
      options: ["default", "success", "error", "warning"],
    },
  },
  decorators: [
    Story => (
      <ToastProvider
        options={{
          duration: 3000,
          offest: 24,
        }}
      >
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    position: "top-right",
  },
  render: args => {
    // eslint-disable-next-line
    const { add } = useToast();

    const handleAddTopLeftToast = () => {
      add({
        message: "토스트팝업 메시지",
        position: "top-left",
      });
    };

    const handleAddTopCenterToast = () => {
      add({
        type: "success",
        message: "토스트팝업 메시지",
        position: "top-center",
      });
    };

    const handleAddTopRightToast = () => {
      add({
        width: "240px",
        type: "warning",
        action: "icon-link",
        message: "토스트팝업 메시지",
        position: "top-right",
      });
    };

    const handleAddBottomLeftToast = () => {
      add({
        width: "326px",
        action: "icon-link",
        onAction: () => console.log("link click"),
        type: "warning",
        message: "토스트팝업 메시지 두줄유형 토스트팝업 메시지 두줄유형 최대글씨는 이만큼",
        position: "bottom-left",
      });
    };

    const handleAddBottomCenterToast = () => {
      add({
        width: "240px",
        type: "error",
        action: "icon-button",
        message: "토스트팝업 메시지",
        position: "bottom-center",
        buttonText: "버튼",
      });
    };

    const handleAddBottomRightToast = () => {
      add({
        width: "240px",
        type: "success",
        action: "icon-button",
        message: "토스트팝업 메시지",
        position: "bottom-right",
        buttonText: "버튼",
      });
    };

    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px" }}>
        <button type="button" onClick={handleAddTopLeftToast}>
          TOP LEFT
        </button>
        <button type="button" onClick={handleAddTopCenterToast}>
          TOP CENTER
        </button>
        <button type="button" onClick={handleAddTopRightToast}>
          TOP RIGHT
        </button>
        <button type="button" onClick={handleAddBottomLeftToast}>
          BOTTOM LEFT
        </button>
        <button type="button" onClick={handleAddBottomCenterToast}>
          BOTTOM CENTER
        </button>
        <button type="button" onClick={handleAddBottomRightToast}>
          BOTTOM RIGHT
        </button>
      </div>
    );
  },
};
