import { email } from "@/components/Contact/data";
import LottieAnimation from "@/components/Hero/animation";

const UnderConstruction = async () =>{
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="text-center w-full max-w-2xl">
        <div className="w-4/5 mx-auto">
          <LottieAnimation
            height="100%"
            width="100%"
            animationUrl={"https://lottie.host/2c171dae-e83b-4362-8bfd-382534d42d2b/rWTMLBQyCH.json"}/>
        </div>
        <h1 className="w-4/5 mx-auto text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Please send us your resume at:
          <a 
            className="block mt-2 text-lg sm:text-xl md:text-2xl break-words hover:text-blue-600" 
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </h1>
      </div>
    </div>
  );
}

export default UnderConstruction;