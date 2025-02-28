import { Navbar } from "@/app/components/Navbar";
import { WeatherLinks } from "@/app/components/WeatherLinks";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="px-5 lg:container lg:mx-auto">
        <WeatherLinks/>
        {/* flex justify-center - also worked instead of text-center */}
        <h1 className="py-4 text-center font-medium md:text-[32px]">This Is A House Of Learned Doctors</h1>
        <div className="flex w-full items-center justify-center">
          <iframe className="w-[80%] aspect-video"
            src="https://www.youtube.com/embed/hh1oaumUoyc?si=IIgXe8UeLYX-PPQv"
            title="YouTube video player"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </>
  );
}
