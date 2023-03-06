import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page1 = ({ price }) => {
  const notify = (msg, type) => {
    if (type === "warn") {
      toast.warn(msg);
    } else if (type === "success") {
      toast.success(msg);
    } else if (type === "error") {
      toast.error(msg);
    }
  };

  var state = true;

  const fun = (e) => {
    
      const p = price;
      if (state == true) {
        window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description:"Test",
                  amount: {
                    currency_code:'USD' ,
                    value: p,
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            console.log("done");
            return actions.order.capture().then((details) => {
              notify("تمت عمليه الدفع بنجاح", "success");
              if (price > 1000) {
                notify("جعله اللة في ميزان حسناتك", "success");
              }
              if (price < 1000) {
                notify("  تقبل اللة", "success");
              }
            });
          },
          
        })
        .render("#paypal-button-container");
        }

        if (price > 0) {
        state = false;
      } else {
        state = true;
      }
             state = false;

    if (price < 0) {
      notify("لا يمكن التبرع بهذا الرقم .. من فضلك ادخل الرقم صحيح ", "warn");
    }
  
    if (price == "") {
      notify("   من فضلك حدد المبلغ ", "warn");
      }
  };


  return (
    <div
      style={{ width: "50%" }}
      id="paypal-button-container"
      className="container pt-3 "
    >
      <div className="pb-5 div-bt" style={{ textAlign: "center" }}>
        <button className="pay" onClick={fun}>
          اضغط هنا لاختيار طريقه الدفع
        </button>
      </div>
    </div>
  );
};

export default Page1;
