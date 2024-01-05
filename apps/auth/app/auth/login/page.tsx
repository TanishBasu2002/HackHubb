import { LoginForm } from "@repo/ui/login-form";

const LoginPage = () => {
  return (
    <LoginForm
      title="Auth"
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
    />
  );
};

export default LoginPage;
