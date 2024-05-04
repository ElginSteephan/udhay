import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./team.css";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function team() {
  const team = [
    {
      name: " Thomas Varghese ",
      
      img:"../../asset/DUM.png"
    },
    {
      name: "  Byju Govindan Kutty",
      
      img:"../../asset/DUM.png"
    },
    {
      name: " Anas Mattackad Kochumuhammed",
     
      img:"../../asset/DUM.png"
    },
    {
      name: " Mahesh Rajabhai Jaru",
     
      img:"../../asset/DUM.png"
    },
  ];
  return (
    <div className="mainteam" id="team">
      <div className="team">
        <h1>Founders</h1>
      </div>
      <div className="head">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="teambox"
        >
          {team.map((team, index) => (
            <SwiperSlide className="member" key={index}>
              <img src={team.img} alt="" />
              <b>{team.name}</b>
              <p>{team.position}</p>
              <div className="social">
                <a href="">
                  <FaLinkedin />
                </a>
                <a href="">
                  <FaXTwitter />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
