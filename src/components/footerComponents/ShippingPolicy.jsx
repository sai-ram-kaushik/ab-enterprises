import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      <p>
        All orders are processed within 12 to 15 business days (excluding
        weekends and holidays) after receiving your order confirmation email.
        You will receive another notification when your order has shipped
      </p>

      <h3>Domestic Shipping Rates and Estimates</h3>
      <p>
        <span className="font-semibold">For calculated shipping rates:</span>{" "}
        Shipping charges for your order will be calculated and displayed at
        checkout
      </p>
      <p>
        <span className="font-semibold">For simple flat rate shipping:</span> We
        offer INR 2500 flat rate shipping to Gurugram location only.
      </p>

      <h3>Local delivery</h3>
      <p>
        Free local delivery is available for orders over INR 75,000 within
        Gurugram. For orders under INR 75,000, we charge INR 2500 for local
        delivery.
      </p>
      <p>
        Deliveries are made from 10 am to 5 pm on Monday to Saturday. We will
        contact you via text message with the phone number you provided at
        checkout to notify you on the day of our
      </p>

      <h3>In-store pickup</h3>
      <p>
        You can skip the shipping fees with free local pickup at Gurugram
        office. After placing your order and selecting local pickup at checkout,
        your order will be prepared and ready for pick up within 12 to 15
        business days. We will send you an email when your order is ready along
        with instructions
      </p>
    </div>
  );
};

export default ShippingPolicy;
