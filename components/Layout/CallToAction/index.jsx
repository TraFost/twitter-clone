import Button from "@/components/Common/Button";

const CallToAction = () => {
  return (
    <div className="col-span-5 bg-twitter-color">
      <div className="flex items-center justify-around text-white tracking-wide">
        <div className="pl-28" />
        <div className="pb-3 pt-2.5">
          <h3 className="text-xl font-bold">Don't miss what's happening</h3>
          <p className="text-xs font-medium">
            People on Twitter are the first to know.
          </p>
        </div>
        <div />
        <div className="pl-16" />
        <div className="flex gap-3.5 items-center justify-center">
          <Button className="btn--callToAction--login">Log in</Button>
          <Button className="btn--callToAction--signUp">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
