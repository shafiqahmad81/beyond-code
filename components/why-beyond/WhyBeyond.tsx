import Image from "next/image";
import Image1 from "../../assets/img/real-problem.png";
import Image2 from "../../assets/img/common-problem.png";
import Image3 from "../../assets/img/solution.png";
export default function WhyBeyond() {
  return (
    <section className="pb-7 md:pb-14">
        <div className="container">
            <div className="bg-[linear-gradient(180deg,rgba(53,37,74,0)_14.27%,#100C29_100%)] rounded-[20px] py-8 lg:py-18.75 px-5 sm:px-10 lg:px-26.5">
                <h2 className="text-center">Why Beyond Code</h2>
                <div className="grid sm:grid-cols-3 gap-6 xl:gap-31 mt-10 lg:mt-21.75">
                    <div >
                        <div className="relative bg-white rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center">
                            <div className="absolute left-0 -top-6 h-20 md:h-28.5 w-20 md:w-28.5 rounded-[100px] bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#FF09F4_89.43%,#2D7FFF_368.58%)] opacity-50 blur-[48px]"></div>
                            <div className="max-w-7 md:max-w-8.75">
                                <Image
                                    src={Image1}
                                    alt="real-problem"
                                    width={35}
                                    height={36}
                                />
                            </div>
                        </div>
                        <h5 className="mt-3 sm:mt-6 mb-2 sm:mb-5">The Real Problem</h5>
                        <p>The issue in modern institutions is not technology - it is lack of operational intelligence.</p>
                    </div>
                    <div >
                        <div className="relative bg-white rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center">
                            <div className="absolute left-0 sm:-left-6 -top-6 h-20 md:h-28.5 w-20 md:w-28.5 rounded-[100px] bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#2D7FFF_89.43%,#2D7FFF_368.58%)] opacity-50 blur-[48px]"></div>
                            <div className="max-w-7 md:max-w-8.75">
                                <Image
                                    src={Image2}
                                    alt="real-problem"
                                    width={35}
                                    height={36}
                                />
                            </div>
                            
                        </div>
                        <h5 className="mt-3 sm:mt-6 mb-2 sm:mb-5">The Real Problem</h5>
                        <p>The issue in modern institutions is not technology - it is lack of operational intelligence.</p>
                    </div>
                    <div >
                        <div className="relative bg-white rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center">
                            <div className="absolute left-0 sm:-left-6 -top-6 h-20 md:h-28.5 w-20 md:w-28.5 rounded-[100px] bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#05E388_89.43%,#2D7FFF_368.58%)] opacity-50 blur-[48px]"></div>
                            <div className="max-w-7 md:max-w-8.75">
                                <Image
                                    src={Image3}
                                    alt="real-problem"
                                    width={35}
                                    height={36}
                                />
                            </div>
                            
                        </div>
                        <h5 className="mt-3 sm:mt-6 mb-2 sm:mb-5">The Real Problem</h5>
                        <p>The issue in modern institutions is not technology - it is lack of operational intelligence.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}




/* Ellipse 2973 */



