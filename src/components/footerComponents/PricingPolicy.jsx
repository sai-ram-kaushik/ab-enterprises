import React from "react";

const PricingPolicy = () => {
  return (
    <div className="flex flex-col items-start gap-2 text-background">
      <p>
        At A B Enterprises, we aim to provide transparent and competitive
        pricing for all your needs. Below are the key guidelines for our pricing
        structure:
      </p>

      <h3>1. Product Pricing</h3>
      <ul role="list" className="marker:text-background list-disc">
        <li className="ml-10">
          All products prices listed on our website are in Indian Rupees and
          inclusive of GST unless stated otherwise.
        </li>
        <li className="ml-10">
          Prices are subject to change based on market conditions, availabilty,
          and promotional offers.
        </li>
      </ul>

      <h3>2. Volume-Based Discounts</h3>
      <p>We offer discounts for bulk purchases:</p>
      <ul role="list" className="marker:text-background list-disc">
        <li className="ml-10">10-50 units: Standard pricing.</li>
        <li className="ml-10">51-200 units: 5-10% discount</li>
        <li className="ml-10">
          200+ units: Custom bulk pricing (contact us for personalized quote)
        </li>
      </ul>

      <h3>3. Customization Charges</h3>
      <p>
        Personalized items are subject to additional charges based on the level
        of customization:
      </p>
      <ul role="list" className="marker:text-background list-disc">
        <li className="ml-10">Logo Printing/Engraving: 7150 per unit.</li>
        <li className="ml-10">
          Special Packaging: Starting at 8150 per order.
        </li>
        <li className="ml-10">
          Unique Custom Requests: Pricing available upon consultation.
        </li>
      </ul>

      <h3>4. Shipping and Delivery</h3>
      <ul role="list" className="marker:text-background list-disc">
        <li className="ml-10">
          Standard Shipping: Free for orders above &#8377;100,000.
        </li>
        <li className="ml-10">
          Express Shipping: Additional charges apply based on urgency and
          destination.
        </li>
        <li className="ml-10">
          International Shipping: Charges calculated based on location and
          weight
        </li>
        <li className="ml-10">
          Exact shipping costs will be displayed at checkout.
        </li>
      </ul>

      <h3>5. Payment Terms</h3>
      <ul role="list" className="marker:text-background list-disc">
        <li className="ml-10">
          Advance Payment: 50% required for customized orders.
        </li>
        <li className="ml-10">
          Full Payment: Required before dispatch for all orders.
        </li>
        <li className="ml-10">
          Payment options include credit/debit cards, UPI, and bank transfers.
        </li>
      </ul>

      <h3>6. Promotional Pricing</h3>
      <p>
        Occasionally, we offer special promotions or discounts during festive
        seasons and corporate gifting campaigns. These will be clearly
        communicated on our website and social media platforms.
      </p>

      <h3>7. Refunds and Adjustments</h3>
      <ul role="list" className="marker:text-background list-disc">
        <li className="ml-10">
          Price adjustments or refunds will not be provided for price changes on
          i eus afterder are non-refundable unless there is a manufacturing
          defect.
        </li>
      </ul>

      <h3>8. Contact for Bulk Pricing</h3>
      <p>
        For large orders or unique requirements, please reach out to us directly
        for a customized quotation. Use the "Contact Us" feature or contact us
        at <a href="mailto:abenterprises680@gmail.com">abenterprises680@gmail.com</a>
      </p>
    </div>
  );
};

export default PricingPolicy;
