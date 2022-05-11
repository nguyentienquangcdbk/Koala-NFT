import { useRef } from "react";
import im from "./img/image.png";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";
const data = [
  {
    text: "HOME",
  },
  { text: "GALLERY" },
  { text: "BLOG" },
  { text: "KNET" },
];

function App() {
  const btnRef = useRef();

  return (
    <div className="App">
      <header className="py-8 flex items-center justify-between px-[9%] text-white">
        <div className="text-xl font-bold">Koala</div>
        <div className="menu ">
          {data.map((item, index) => (
            <a href="" key={index} className="px-5">
              {item.text}
            </a>
          ))}
        </div>
      </header>
      <section className="flex items-center xl:flex-row md:flex-col-reverse justify-between px-[9%] gap-20 mt-5">
        <div className="text-white">
          <h1 className="text-[60px] font-bold">KOALA</h1>
          <h1 className="text-[60px] text-[#02C173] font-bold">INTELLIGENCE</h1>
          <h1 className="text-[60px] font-bold">AGENCY</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            placeat consequatur eos officiis saepe dolor exercitationem volu
          </p>

          <button ref={btnRef}>lroem ipsum dolor sit</button>
        </div>
        <div className=" flex items-center gap-5 justify-center">
          <img src={im} className="" alt="" />
          <div className="lien_ket">
            <a
              href=""
              className="bg-white  rounded-full p-5 flex items-center justify-center opacity-25 mb-5 "
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="bg-white border rounded-full p-5 flex items-center justify-center opacity-25 mb-5 "
            >
              <FaTiktok></FaTiktok>
            </a>
            <a
              href=""
              className="bg-white border rounded-full p-5 flex items-center justify-center opacity-25 mb-5 "
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              href=""
              className="bg-white border rounded-full p-5 text-base flex items-center justify-center opacity-25 mb-5 "
            >
              <FaDiscord></FaDiscord>
            </a>
            <a
              href=""
              className="bg-white border rounded-full p-5 flex items-center justify-center opacity-25 mb-5 "
            >
              <FaTwitter size="20"></FaTwitter>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
