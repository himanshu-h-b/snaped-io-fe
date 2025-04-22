import Logo from "@/components/logo";
import { SignInAuthForm } from "./components/auth-form";

const SignIn = () => {
  return (
    <div className="bg-primary min-h-screen grid grid-rows-10">
      <header className="bg-background row-span-1 sticky inset-x-0 top-0 w-full flex items-center p-4 px-8 md:px-16">
        <Logo />
      </header>
      <SignInAuthForm />
    </div>
  );
};

export default SignIn;
