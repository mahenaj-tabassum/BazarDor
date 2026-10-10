import AuthForms from "@/components/Forms/AuthForms";
import AuthRedirectToast from "@/components/Forms/AuthRedirectToast";
import { Suspense } from "react";

const SignInPage = () => {
  <Suspense fallback={null}>
    <AuthRedirectToast />
  </Suspense>;
  return <AuthForms mode="in" />;
};

export default SignInPage;
