import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Softwate Developer</span>
            <h1 className="h1 mb-6">
              Merhaba Ben <br />{" "}
              <span className="text-accent">Volkan Eray </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Ben Volkan  Kırşehir ahi evran Üniversitesinde Web Tasarım ve Kodlama bölümünden mezuyum. Her gün kendimi geliştirmeye çalışıyorum  {" "}
            </p>
            {/* Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span> CV Indir</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats /> 
    </section>
  );
};
export default Home;
