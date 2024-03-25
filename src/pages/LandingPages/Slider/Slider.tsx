import Testimonial1 from "../../../assets/money1.png";
import Testimonial2 from "../../../assets/woman.png";
import RealSok from "../../../assets/pos.jpg";
import Adebambo from "../../../assets/world_map.jpg";

import { Img } from "react-image";

const Slider = () => {
  const testimonials = [
    {
      icon: Testimonial1,
      text: (
        <span>
          Well done to the guys at <span className="text-bold">@kudabank</span>{" "}
          had a dispensing error on Friday night and reached out to them on
          Sunday... 48 working hours after and my money is back in my account...
          Special shout out to Maxwell and Norah
        </span>
      ),
      name: "Mu'azu Muhammad Kudu",
    },
    {
      icon: "",
      text: (
        <span className="flex flex-column">
          <span>Just joined the best Digital Bank in Nigeria</span>
          <br />
          <span className="mb-4 flex">
            I have no complaints whatsoever since i started using Kuda
          </span>
        </span>
      ),
      name: "Tomisinv",
    },
    {
      icon: Testimonial2,
      text: (
        <span>
          Never thought an app would stylish become my everyday way to bank and
          have access to physical cash.
          <br />
          <span className="text-bold">@kudabank</span> is sleek
        </span>
      ),
      name: "Babajide Duroshola",
    },
    {
      icon: RealSok,
      text: "This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made kuda my main bank account and I’m gonna refer all my friends!",
      name: "@RealSOK_",
    },
    {
      icon: Adebambo,
      text: (
        <span>
          I like the fact that kuda Microfinance Bank doesn’t only run a no fee
          policy and 25 free transfers in a month but you can only create a
          budget plan to control your spending pattern. Really really nice!!
        </span>
      ),
      name: "Adebambo Oyekan",
    },
    {
      icon: "",
      text: (
        <span>
          I highly recommend this app, it does what it says "The bank of the
          free". I have received my kuda card.
        </span>
      ),
      name: "Ifeanyichukwu Obaji",
    },
  ];

  return (
    <div className="kuda-section kuda-ignore--container">
      <div className="kuda-section--inner">
        <div className="kuda-section--100">
          <div className="kuda-testimonial--wrap">
            <h1 className="kuda-section--heading text-center text-xlbold color-primary title-bottom--spacing">
              Don’t just take our word for it
            </h1>
            <div className="kuda-testimonials--section">
              <div className="kuda-testimonial--cards">
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="card card-item flex flex-column justify-between"
                  >
                    <p className="testimonial-text color-black text-sm">
                      {item.text}
                    </p>
                    <div className="testimonial-extras flex align-center">
                      {item.icon !== "" ? (
                        <Img
                          src={item.icon}
                          alt="kuda Microfinance Bank Testimonials"
                          width={"auto"}
                          height={"auto"}
                        />
                      ) : (
                        <div className="kuda-no--image">
                          {item.name.charAt(0)}
                        </div>
                      )}

                      <p className="text-sm text-xlbold color-black">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="card card-item flex flex-column justify-between"
                  >
                    <p className="testimonial-text color-black text-sm">
                      {item.text}
                    </p>
                    <div className="testimonial-extras flex align-center">
                      {item.icon !== "" ? (
                        <Img
                          src={item.icon}
                          alt="kuda Microfinance Bank Testimonials"
                          width={"auto"}
                          height={"auto"}
                        />
                      ) : (
                        <div className="kuda-no--image">
                          {item.name.charAt(0)}
                        </div>
                      )}
                      <p className="text-sm text-xlbold color-black">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Slider;
