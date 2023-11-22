/* eslint-disable react/react-in-jsx-scope */
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: "card-btn text-sm normal-case",
        },
      }}
    />
  );
}
