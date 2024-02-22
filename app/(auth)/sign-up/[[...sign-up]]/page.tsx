/* eslint-disable react/react-in-jsx-scope */
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary: "card-btn text-sm normal-case",
        },
      }}
    />
  );
}
