function AboutDP() {
  return (
    <div className="avatar">
      <div className="w-52 rounded-full">
        <img
          alt="Tailwind-CSS-Avatar-component"
          src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
        />
      </div>
    </div>
  );
}

export function Aboutme() {
  return <div className="flex justify-start">
    <AboutDP />
    <div className=" flex justify-center text-center items-center pl-8">Hi I am a software engineer</div>
  </div>;
}
