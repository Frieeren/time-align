import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OverlayProvider } from "@toss/use-overlay";
import { useOverlay } from "@toss/use-overlay";
import { BottomSheet } from "./BottomSheet";

/**
 * **vaul docs**
 * https://vaul.emilkowal.ski/api
 */
const meta: Meta<typeof BottomSheet> = {
  title: "V2/Components/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    locked: {
      control: "boolean",
      description: "외부 요소와의 상호작용을 설정합니다.",
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large"],
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
  },
  decorators: [
    Story => (
      <OverlayProvider>
        <Story />
      </OverlayProvider>
    ),
  ],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const BottomSheetNoScroll = () => {
  return (
    <div style={{ height: 240, padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
      BottomSheet
    </div>
  );
};

const BottomSheetScroll = () => {
  return (
    <div style={{ height: 2000, padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
      BottomSheet
    </div>
  );
};

export const BottomSheets: Story = {
  args: {
    showHandle: true,
    radius: "medium",
  },
  render: args => {
    // eslint-disable-next-line
    const overlay = useOverlay();

    const openNoScrollBottomSheet = () => {
      overlay.open(({ isOpen, close }) => (
        <BottomSheet
          {...args}
          open={isOpen}
          onClose={() => {
            close();
          }}
          content={<BottomSheetNoScroll />}
        />
      ));
    };

    const openScrollBottomSheet = () => {
      overlay.open(({ isOpen, close }) => (
        <BottomSheet
          {...args}
          open={isOpen}
          onClose={() => {
            close();
          }}
          content={<BottomSheetScroll />}
        />
      ));
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
        }}
      >
        <button type="button" onClick={openNoScrollBottomSheet}>
          Open(No Scroll)
        </button>
        <button type="button" onClick={openScrollBottomSheet}>
          Open(Scroll)
        </button>
      </div>
    );
  },
};
