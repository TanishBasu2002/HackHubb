import { Popover, Button } from "antd";
import CustomAvatar from "../custom-avatar";

const CurrentUser = () => {
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger={"click"}
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 999 }}
      >
        <CustomAvatar />
      </Popover>
    </>
  );
};

export { CurrentUser };
