import Image from "next/image";
import consultationImage from "../../assets/img/consultation.png"

export default function ConsultationSection() {
  return (
    <section className="py-7 lg:py-14">
      <div className="container ">
        <div className="max-w-265 mx-auto text-center">
            <h2>Book a free consultation</h2>
            <div className="mt-8 sm:mt-12">
                <Image 
                    src={consultationImage}
                    alt="Consultation"
                    width={1060}
                    height={490}
                />
            </div>
        </div>
      </div>
    </section>
  );
}



