import Logo from "@/components/logo";
import { SignUpAuthForm } from "./components/auth-form";

const SignUp = () => {
  return (
    <div className="bg-primary min-h-screen grid grid-rows-10">
      <header className="bg-background row-span-1 sticky inset-x-0 top-0 w-full flex items-center p-4 px-8 md:px-16">
        <Logo />
      </header>
      <SignUpAuthForm />
    </div>
  );
};

export default SignUp;
