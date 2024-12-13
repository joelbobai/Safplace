import React, { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", padding: 20 }}>
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Frequently Asked Questions (FAQ)</h3>
        {/* <p className="text-sm text-center">
          Welcome to Lilly Beauty Fashion! These Terms and Conditions ("Terms")
          govern your use of our website and the purchase of products from our
          online store. By accessing or using our website, you agree to be bound
          by these Terms.
        </p> */}
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
            1. What products do you offer?
          </h4>
          <p className="text-sm">
            ● <b>Lilly Beauty Fashion</b> offers a wide range of products
            including hair products, handbags, wigs, and clothing for men,
            women, and kids.
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
            2. How do I place an order?
          </h4>
          <p className="text-sm">
            ● You can place an order directly through our website by selecting
            the products you want, adding them to your cart, and proceeding to
            checkout. Follow the prompts to complete your purchase.
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
            3. What payment methods do you accept?
          </h4>
          <p className="text-sm">
            ● We accept a variety of payment methods, including [list accepted
            payment methods, e.g., credit/debit cards, PayPal, etc.].
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
            4. Do you ship internationally?
          </h4>
          <p className="text-sm">
            ● Yes, we offer international shipping. Shipping fees and delivery
            times may vary depending on your location.
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
            5. How can I track my order?
          </h4>
          <p className="text-sm">
            ● Once your order has been shipped, you will receive a tracking
            number via email. You can use this number to track your order on the
            shipping carrier’s website.
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
            6. What is your return policy?
          </h4>
          <p className="text-sm">
            ● We accept returns within 7 days of delivery, provided the product
            is unused, in its original packaging, and with all tags attached. To
            initiate a return, please contact our customer service team at
            [info@lillybeautyfashion.com, +358 46 5832034].
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
            7. How do I contact customer support?
          </h4>
          <p className="text-sm">
            ● You can reach our customer support team by emailing us at
            [customer@lillybeautyfashion.com, +358 46 5832034] or by calling us
            at [+358 40 6613157]. We are available [7am to 7pm].
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
            8. Can I cancel or modify my order?
          </h4>
          <p className="text-sm">
            ● If you need to cancel or modify your order, please contact us as
            soon as possible at [customer@lillybeautyfashion.com, +358 46
            5832034]. We will do our best to accommodate your request, but
            please note that if the order has already been processed or shipped,
            it may not be possible to cancel or modify it.
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
            9. Do you offer discounts or promotions?
          </h4>
          <p className="text-sm">
            ● Yes, we frequently offer discounts and promotions. You can stay
            updated by subscribing to our newsletter or following us on social
            media.
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
            10. Are the products on your site authentic?
          </h4>
          <p className="text-sm">
            ● Yes, all the products we sell are 100% authentic and sourced
            directly from reputable manufacturers and suppliers.
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
            11. How do I know what size to order?
          </h4>
          <p className="text-sm">
            ● We provide size charts on our product pages to help you choose the
            correct size. If you have any questions about sizing, feel free to
            contact our customer support team for assistance.
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
            12. What should I do if I receive a damaged or incorrect item?
          </h4>
          <p className="text-sm">
            ● If you receive a damaged or incorrect item, please contact us
            immediately at [contact@lillybeautyfashion.com, +358 46 5832034]. We
            will arrange for a replacement or a refund as soon as possible.
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
            13. Can I purchase a gift card?
          </h4>
          <p className="text-sm">
            ● Yes, we offer gift cards in various denominations. Gift cards can
            be purchased through our website and are delivered via email.
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
            14. How can I stay updated on new products and promotions?
          </h4>
          <p className="text-sm">
            ● You can subscribe to our newsletter and follow us on [list social
            media platforms] to stay updated on the latest products and
            promotions.
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
            15. What if I have a question that's not listed here?
          </h4>
          <p className="text-sm">
            ● If you have a question that isn’t covered in this FAQ, feel free
            to reach out to us at [talktous@lillybeautyfashion.com, +358 46
            5832034], and we’ll be happy to assist you.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Faq;
