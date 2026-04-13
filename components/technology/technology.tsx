import technologyBg from "../../assets/img/technology-bg.png"
export default function Technology() {
  return (
    <section className="py-7 md:py-14 bg-[linear-gradient(180deg,#050505_0%,#252525_100%)]">
      <div className="container">
          <div className="text-center max-w-135.75 mx-auto">
            <h2 className="mb-5">Technology Stack</h2>
            <p>Beyond Code systems are built using modern AI and cloud infrastructure.</p>
          </div>
          <div className="grid grid-cols-3 gap-5 relative mt-12 px-10 lg:px-62.5">
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 right-0 w-172.5 h-170.5 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${technologyBg.src})` }}>
              </div>
            <div className="px-10.5 pt-8 pb-12 backdrop-blur-[20px] rounded-[10px]" style={{
                  boxShadow: `
                    3px 3px 0px -3px #00000080 inset,
                    -2px -2px 1px -2px #B3B3B3 inset,
                    2px 2px 1px -2px #B3B3B3 inset,
                    0px 0px 0px 1px #999999 inset,
                    0px 0px 22px 0px #F2F2F280 inset
                  `,
                }}>
              <h5>AI & Backend</h5>
              <ul>
                <li>Python</li>
                <li>PyTorch</li>
                <li>Django</li>
                <li>Flask</li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
}

  



