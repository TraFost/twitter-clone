import Button from "@/components/Common/Button";

const CallToAction = () => {
  return (
    <div className="bg-white sm:bg-twitter-color h-[3.8rem] md:h-full grid md:block z-5">
      <div className="flex justify-center md:items-center md:justify-between lg:justify-around text-white tracking-wide">
        <div className="hidden md:block lg:pl-28" />
        <div className="hidden md:block lg:hidden" />
        <div className="hidden md:block pb-3 pt-2.5">
          <h3 className="text-[22px] lg:text-xl font-bold">
            Don't miss what's happening
          </h3>
          <p className="text-sm lg:text-xs font-medium tracking-wide">
            People on Twitter are the first to know.
          </p>
        </div>
        <div className="hidden md:block lg:block" />
        <div className="hidden lg:block lg:pl-16 " />
        <div className="flex-grow md:flex-grow-0 flex gap-2.5 md:gap-3.5 items-center justify-center px-4 md:px-0">
          <Button className="btn--callToAction--login">Log in</Button>
          <Button className="btn--callToAction--signUp">Sign up</Button>
        </div>
        <div className="hidden md:block lg:hidden" />
        <div className="hidden md:block lg:hidden" />
      </div>
    </div>
  );
};

export default CallToAction;
