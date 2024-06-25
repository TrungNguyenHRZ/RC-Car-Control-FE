import React, { useEffect, useState } from "react";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { BsBagHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Text } from "recharts";
import { BorderBottom, BorderColor } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import "./Dashboardview.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Cookies from "js-cookie";

const Dashboardview = ({}) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const showDropDown = () => {
    setOpen(!open);
  };

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  const handleLogout = async () => {
    setCookie("username", "", 0);
    navigate("/login");
  };

  const handleLogIn = async () => {
    navigate("/login");
  };

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    setUsername(getCookie("username"));
    var user = getCookie("username");
  }, []);

  let renderData = () => {
    if (getCookie("username") !== "") {
      return (
        <div className="flex items-center justify-between h-[150px] shadow-lg px px-[25px]">
          <div>
            <img src={Logo} alt="" width={150} height={150} />
          </div>
          <div className="flex items-center rounded-[5px]"></div>
          <div className="flex items-center gap-[15px] relative">
            <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
              <FaEnvelope />
            </div>
            <div
              className="flex items-center gap-[10px] relative"
              onClick={showDropDown}
            >
              <p>{username}</p>
              <div className="w-[40px] h-[40px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative">
                <img src="" alt="" />
              </div>
              {open && (
                <div className="bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]">
                  <p className="cursor-pointer hover:text-[blue] font-semibold">
                    Profile
                  </p>
                  <p
                    className="cursor-pointer hover:text-[blue] font-semibold"
                    onClick={handleLogout}
                  >
                    Log out
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    {
      return (
        <div className="flex items-center justify-between h-[150px] w-[70%] shadow-lg px px-[25px]">
          <div>
            <img src={Logo} alt="" width={150} height={150} />
          </div>
          <div className="flex items-center rounded-[5px]"></div>
          <div className="flex items-center gap-[15px] relative">
            <div
              className="cursor-pointer flex items-center gap-[25px] border-r-[1px] pr-[25px] "
              onClick={toggleCart}
            >
              <BsBagHeart height={150} width={150} />
            </div>
            <div
              className="flex items-center gap-[10px] relative"
              onClick={showDropDown}
            >
              <p>{username}</p>
              <div
                onClick={handleLogIn}
                className="cursor-pointer flex items-center justify-center relative "
              >
                {" "}
                Đăng nhập/Đăng ký
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const promotions = [
    {
      title: "Quán Cơm 2 Lúa",
      rating: 4.1,
      time: "15 phút",
      distance: "1 km",
      discount: "Ưu đãi đến 22K",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Cơm Chiên Gà Xối Mỡ Hương Ký",
      rating: 4.6,
      time: "15 phút",
      distance: "1.2 km",
      discount: "Ưu đãi đến 52K",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Cơm Rang - Bánh Mì Mahai Quận 09",
      rating: 4.8,
      time: "15 phút",
      distance: "1.1 km",
      discount: "Ưu đãi đến 46K",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Cơm Tấm Minh Mập - Lò Lu",
      rating: 3.8,
      time: "20 phút",
      distance: "3.8 km",
      discount: "Ưu đãi đến 46K",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const categories = [
    { title: "Gà rán", imageUrl: "https://via.placeholder.com/150" },
    { title: "Weekend Treats", imageUrl: "https://via.placeholder.com/150" },
    { title: "Pizza", imageUrl: "https://via.placeholder.com/150" },
    { title: "Hủ tiếu", imageUrl: "https://via.placeholder.com/150" },
    { title: "Hiso Party", imageUrl: "https://via.placeholder.com/150" },
    { title: "Cơm tấm", imageUrl: "https://via.placeholder.com/150" },
    { title: "Cơm", imageUrl: "https://via.placeholder.com/150" },
    { title: "Gà Rán - Burger", imageUrl: "https://via.placeholder.com/150" },
    { title: "Cháo", imageUrl: "https://via.placeholder.com/150" },
    { title: "Rau trộn", imageUrl: "https://via.placeholder.com/150" },
    { title: "Mì Ý", imageUrl: "https://via.placeholder.com/150" },
    { title: "Ăn Vặt", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <div className="flex items-center justify-center">{renderData()}</div>

      {isOpen && (
        <div className="flex justify-end ">
          <div className=" h-[100%] w-[30%] shadow-lg px px-[25px]">
            <div className="border-b-[2px] border-[black]">
              <h1 className="flex justify-center">Giỏ hàng</h1>
              <h5 className="flex justify-center">
                Thời gian giao: 15 phút (Cách bạn 1.5km)
              </h5>
            </div>

            <div className="">
              <h1>Tên quán ăn</h1>
              <br />
              <div className="flex items-center justify-center border-b-[2px] border-[black] h-[70px]">
                <div className="w-[5%] text-[blue] text-[40px] cursor-pointer">
                  -
                </div>
                <div className="w-[5%] text-[30px]">1</div>
                <div className="w-[5%] text-[blue] text-[40px] cursor-pointer">
                  +
                </div>
                <div className="w-[40%]">Combo gà rán kfc</div>
                <div className="w-[20%]">50.000</div>
                <div className=" border-[2px] border-[black] text-[red]">
                  <button>Remove</button>
                </div>
              </div>
              <br />
              <div className="flex items-center justify-center border-b-[2px] border-[black] h-[70px]">
                <div className="w-[5%] text-[blue] text-[40px] cursor-pointer">
                  -
                </div>
                <div className="w-[5%] text-[30px]">2</div>
                <div className="w-[5%] text-[blue] text-[40px] cursor-pointer">
                  +
                </div>
                <div className="w-[40%]">Combo gà rán kfc</div>
                <div className="w-[20%]">50.000</div>
                <div className=" border-[2px] border-[black] text-[red]">
                  <button>Remove</button>
                </div>
              </div>
              <br />
              <div className="flex items-center justify-center border-b-[2px] border-[black] h-[70px]">
                <div className="w-[5%] text-[blue] text-[40px] cursor-pointer">
                  -
                </div>
                <div className="w-[5%] text-[30px]">3</div>
                <div className="w-[5%] text-[blue] text-[40px] cursor-pointer">
                  +
                </div>
                <div className="w-[40%]">Combo gà rán kfc</div>
                <div className="w-[20%]">50.000</div>
                <div className=" border-[2px] border-[black] text-[red]">
                  <button>Remove</button>
                </div>
              </div>
              <br />

              <div className="flex  border-b-[2px] border-[black] h-[70px]">
                <div>
                  <h1>Tổng</h1>
                  <h1>
                    Phí giao hàng sẽ được thêm vào khi bạn xem lại đơn hàng
                  </h1>
                </div>
                <h1>150.00</h1>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-5">
        <form className="my-4">
          <div className="form-group">
            <label htmlFor="address">Địa chỉ giao hàng:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="182 Lã Xuân Oai - 182 Lã Xuân Oai, P. Tăng Nhơn Phú A, Tp. Thủ Đức"
              required
            />
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Tìm kiếm
          </button>
        </form>

        <h2>
          Ưu đãi GrabFood tại 182 Lã Xuân Oai, P.Tăng Nhơn Phú A, Tp. Thủ Đức
        </h2>
        <div className="row">
          {promotions.map((promo, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-4">
                <span className="promo-badge">Promo</span>
                <img
                  className="card-img-top"
                  src={promo.imageUrl}
                  alt={promo.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{promo.title}</h5>
                  <p className="card-text">
                    <span>⭐ {promo.rating}</span> • {promo.time} •{" "}
                    {promo.distance}
                    <br />
                    {promo.discount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-outline-secondary btn-block">
          See all promotions
        </button>
      </div>

      <div className="container mt-5">
        <h2>There's something for everyone!</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={category.imageUrl}
                  alt={category.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{category.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5">
        <h2>Vì sao bạn nên Order trên Homee?</h2>
        <ul>
          <li>
            <strong>Nhanh nhất</strong> - Homee cung cấp dịch vụ giao đồ ăn
            nhanh nhất thị trường.
          </li>
          <li>
            <strong>Dễ dàng nhất</strong> - Giờ đây, bạn chỉ cần thực hiện vài
            cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn
            trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có
            trải nghiệm nhanh hơn và thú vị hơn.
          </li>
          <li>
            <strong>Đáp ứng mọi nhu cầu</strong> - Từ món ăn đặc sản địa phương
            đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ
            luôn làm hài lòng khẩu vị của bạn.
          </li>
          <li>
            <strong>Thanh toán dễ dàng</strong> - Giao và nhận đồ ăn thật dễ
            dàng. Thanh toán bằng ZaloPay thậm chí còn dễ dàng hơn nữa.
          </li>
          <li>
            <strong>Nhiều quà tặng hơn</strong> - Tích điểm HomeeRewards cho mỗi
            đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.
          </li>
        </ul>
      </div>
      <div className="container mt-5">
        <h2>Những câu hỏi thường gặp</h2>
        <h5>Homee là gì?</h5>
        <p>
          Lunch, Bún Cá Chấm Góc Đa - Vũ Thạnh for Dinner! We are here to
          satisfy your hunger with a wide selection of merchant partners in
          Vietnam. Homee là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng
          tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của
          bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng
          nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ
          ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho
          bữa sáng, đến Maazi Indian - Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá
          Chấm Góc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói
          của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam.
        </p>
        <button className="btn btn-outline-secondary btn-block">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Dashboardview;
