import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page2 = ({ onchangeprice, price }) => {
 
  


  return (
    <div className="container text-center pt-5">
      <h1 className="tittle pt-5">
        إِنْ تُبْدُوا الصَّدَقَاتِ فَنِعِمَّا هِيَ وَإِنْ تُخْفُوهَا
        وَتُؤْتُوهَا الْفُقَرَاءَ فَهُوَ خَيْرٌ لَكُمْ وَيُكَفِّرُ عَنْكُمْ مِنْ
        سَيِّئَاتِكُمْ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ
      </h1>
      <form>
        <div className="pt-5 pb-5">
          <input
            onChange={onchangeprice}
            className="price"
            type="tel"
            placeholder="اضف المبلغ"
            value={price}
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Page2;
