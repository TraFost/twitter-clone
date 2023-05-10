import { icon } from "../../assets/icon";
import Button from "../Common/Button";

const Login = () => {
  return (
    <div className="card--whoToFollow">
      <div className="pl-2 pt-2.5 pb-3">
        <h2 className="font-black text-lg pl-3">New to Twitter?</h2>
        <p className="text-[0.763rem] pt-1.5 pl-2 text-[#536471]">
          Sign up now to get your own personalized timeline!
        </p>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <Button className="btn--signUp">
          <icon.google className="mt-0.5 text-xl" /> Sign up with Google
        </Button>
        <Button className="btn--signUp">
          <icon.apple className="text-xl" /> Sign up with Apple
        </Button>
        <Button className="btn--signUp">Create Account</Button>
      </div>
      <section className="text-[13px] max-w-xs pl-3 py-3 text-[#536471]">
        <p>
          By signing up, you agree to the{" "}
          <span className="text-twitter-color">Terms of Service</span> and {""}
          <span className="text-twitter-color">Privacy Policy</span>, including{" "}
          <span className="text-twitter-color">Cookie Use.</span>
        </p>
      </section>
    </div>
  );
};

export default Login;
