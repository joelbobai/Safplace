import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", padding: 20 }}>
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">READ OUR TERMS</h3>
        <p className="text-sm text-center">
          Welcome to Lilly Beauty Fashion! These Terms and Conditions ("Terms")
          govern your use of our website and the purchase of products from our
          online store. By accessing or using our website, you agree to be bound
          by these Terms.
        </p>
        <br />
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        <article>
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            1. Introduction:
          </h4>
          <p className="text-sm">
            Lilly Beauty Fashion ("we," "us," "our") operates the website
            [www.lillybeautyfashion.com] (the "Site"). These Terms apply to all
            visitors, users, and others who access or use the Site.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            2. Eligibility:
          </h4>
          <p className="text-sm">
            You must be at least 18 years old to use our Site or purchase
            products. By using the Site, you represent and warrant that you meet
            these eligibility requirements.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            3. Product Information:
          </h4>
          <p className="text-sm">
            We strive to provide accurate product descriptions and pricing.
            However, we do not guarantee that the descriptions, prices, or other
            content available on the Site are error-free. We reserve the right
            to correct any errors or omissions, and to change or update
            information at any time without prior notice.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            4. Orders and Payment:
          </h4>
          <p className="text-sm">
            By placing an order through our Site, you agree to pay the total
            purchase price for the products, including any applicable taxes and
            shipping fees. We accept various forms of payment, including
            [Stripe, PayPal]. We reserve the right to refuse or cancel any order
            for any reason, including if we suspect fraud or if the product is
            out of stock.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            5. Shipping and Delivery:
          </h4>
          <p className="text-sm">
            We ship products to addresses within [United States, Canada, etc.].
            Shipping times may vary based on your location and the shipping
            method chosen at checkout. We are not responsible for delays caused
            by shipping carriers or customs.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            6. Returns and Refunds:
          </h4>
          <p className="text-sm">
            We accept returns within 14 days of the delivery date, provided the
            product is unused, in its original packaging, and with all tags
            attached. To initiate a return, please contact our customer service
            team at [+358 46 5832034, customer@lillybeautyfashion.com]. Refunds
            will be processed to the original payment method within 7 days of
            receiving the returned item.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            7. Intellectual Property:
          </h4>
          <p className="text-sm">
            All content on the Site, including text, graphics, logos, images,
            and software, is the property of Lilly Beauty Fashion or its content
            suppliers and is protected by intellectual property laws. You may
            not use, reproduce, or distribute any content from the Site without
            our prior written permission.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            8. Limitation of Liability:
          </h4>
          <p className="text-sm">
            Lilly Beauty Fashion is not liable for any direct, indirect,
            incidental, special, or consequential damages arising from your use
            of the Site or purchase of products, even if we have been advised of
            the possibility of such damages. Our liability is limited to the
            amount you paid for the products.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            9. Indemnification:
          </h4>
          <p className="text-sm">
            You agree to indemnify, defend, and hold harmless Lilly Beauty
            Fashion and its affiliates, officers, directors, employees, and
            agents from any claims, liabilities, damages, losses, or expenses
            arising from your use of the Site or violation of these Terms.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            10. Governing Law:
          </h4>
          <p className="text-sm">
            These Terms are governed by and construed in accordance with the
            laws of [Your Country/State], without regard to its conflict of law
            principles. Any disputes arising from these Terms or your use of the
            Site will be resolved in the courts of [Your Country/State].
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            11. Changes to Terms:
          </h4>
          <p className="text-sm">
            We reserve the right to modify or update these Terms at any time.
            Any changes will be effective immediately upon posting to the Site.
            Your continued use of the Site after any changes signifies your
            acceptance of the revised Terms.
          </p>
          <br />
          <h4
            style={{
              color: "#232d39",
              fontSize: "23px",
              fontWeight: "700",
              letterSpacing: 0.5,
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            12. Contact Us:
          </h4>
          <p className="text-sm">
            If you have any questions or concerns about these Terms, please
            contact us at [info@lillybeautyfashion.com, +358 46 5832034].
          </p>
        </article>
      </div>
    </div>
  );
};

export default Terms;
