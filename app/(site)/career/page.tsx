import { email } from "@/components/Contact/data";
import LottieAnimation from "@/components/Hero/animation";

const UnderConstruction = async () =>{
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <LottieAnimation width="600px" animationUrl={"https://lottie.host/2c171dae-e83b-4362-8bfd-382534d42d2b/rWTMLBQyCH.json"}/>
        <h1 className="text-3xl font-bold mb-4">
          Please send us your resume at: <a className="block" href={`mailto:${email}`}>{email}</a>
        </h1>
        {/* <p className="text-lg text-gray-600">Feel free to: </p> */}
      </div>
    </div>
  );
}

export default UnderConstruction;