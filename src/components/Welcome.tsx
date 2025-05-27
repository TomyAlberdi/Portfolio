interface WelcomeProps {
  loading: boolean;
}

const Welcome = ({ loading }: WelcomeProps) => {
  if (loading)
    return (
      <div className="welcomePage flex flex-col justify-center items-center gap-2 w-full h-full absolute top-0 left-0 z-50 bg-black/60 backdrop-blur-xl">
        <span className="text-5xl font-bold alternate-font">Tomás Alberdi</span>
        <span className="text-2xl font-semibold text-rose-900 alternate-font">
          Portfolio
        </span>
      </div>
    );
};
export default Welcome;
