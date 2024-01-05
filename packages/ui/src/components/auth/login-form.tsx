import React from "react";
import { CardWrapper } from "./card-wrapper";

interface CardWrapperProps {
  title: string;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const LoginForm = ({
  title,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <CardWrapper
      title={title}
      headerLabel={headerLabel}
      backButtonLabel={backButtonLabel}
      backButtonHref={backButtonHref}
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};
