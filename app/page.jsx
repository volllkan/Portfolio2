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
            Merhaba, ben Volkan Eray. Full Stack Web Developer olarak hem front-end hem de back-end projelerde tecrübe kazanmayaa ve yeni teknolojilerle kendimi sürekli geliştirmeye çalışıyorum. Ankara’da yaşıyorum ve Kırşehir Ahi Evran Üniversitesi Web Tasarım ve Kodlama bölümünden mezunum. 
            Her proje, bana yeni şeyler öğretirken, ben de projelere yaratıcı ve pratik çözümler sunmayı seviyorum. 
            Şu anda yeni iş fırsatlarına açığım ve katkı sağlayabileceğim projelerde yer almak istiyorum. {" "}
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
