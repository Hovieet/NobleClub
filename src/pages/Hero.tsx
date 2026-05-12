import LineWaves from "../components/LineWaves";
import { svg } from "../assets/assets";
import Button from "../components/ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <LineWaves
          speed={0.1}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={0.9}
          rotation={-50}
          edgeFadeWidth={0}
          colorCycleSpeed={0.7}
          brightness={0.12}
          color1="#e74304"
          color2="#e74304"
          color3="#e74304"
          enableMouseInteraction={true}
          mouseInfluence={1.1}
        />
      </div>

      <div className="pointer-events-none relative z-10 flex min-h-screen items-center justify-center px-4 text-white">
        <div className="flex w-full max-w-5xl flex-col items-center">
          <svg.Headerlogo className="w-[280px] sm:w-[420px] md:w-[560px]" />

          <h1 className="text-center text-xl uppercase tracking-[0.18em] text-zinc-300 sm:text-2xl sm:tracking-[0.25em] md:text-4xl md:tracking-[0.3em]">
            prémiový barber experience
          </h1>

          <h2 className="-mt-1 font-script text-4xl text-primary sm:text-5xl md:-mt-2 md:text-6xl">
            v Litoměřicích
          </h2>

          <p className="mt-4 max-w-2xl text-center text-sm opacity-80 sm:text-base md:text-lg">
            Moderní střihy, precizní vousy a prvotřídní péče v luxusním
            prostředí
          </p>

          <div className="pointer-events-auto mt-6 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-6 md:gap-8">
            <Button
              text="Rezervovat"
              icon={svg.Calendar}
              href="https://noona.app/cs/noble"
              target="_blank"
              rel="noopener noreferrer"
              bgColor="bg-primary"
              borderColor="border-primary"
              iconColor="text-white"
            />

            <Button
              text="Naše služby"
              icon={svg.Scissors}
              href="#services"
              bgColor="bg-transparent"
              borderColor="border-primary"
              iconColor="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
