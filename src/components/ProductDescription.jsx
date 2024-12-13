import React, { useState } from "react";

const ProductDescription = ({ description }) => {
  const [div, setDiv] = useState("Contact Details");

  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setDiv("Contact Details")}
          className={`${
            div === "Contact Details" ? "btn_dark_rounded" : "btn_dark_outline"
          } !rounded-none !text-xs !py-[6px] w-36`}
        >
          Contact Details
        </button>
        <button
          onClick={() => setDiv("description")}
          className={`${
            div === "description" ? "btn_dark_rounded" : "btn_dark_outline"
          } !rounded-none !text-xs !py-[6px] w-36`}
        >
          Description
        </button>

        {/* <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button> */}
      </div>
      {div === "Contact Details" && (
        <div className="flex flex-col pb-16">
          <h4
            style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
            className="bold-16"
          >
            Contact Details
          </h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "70%",
            }}
          >
            <div>
              {" "}
              <h4 style={{ marginBottom: 5 }}>Name</h4>
              <p className="text-sm">Lilly Beauty Fashion</p>
            </div>
            <div>
              {" "}
              <h4 style={{ marginBottom: 5 }}>Phone</h4>
              <p className="text-sm">
                {" "}
                <a href="tel:+358406613157">+358 40 6613157</a>
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              width: "78%",
              marginTop: 20,
            }}
          >
            <div>
              {" "}
              <h4 style={{ marginBottom: 5 }}>Mobile phone</h4>
              <p className="text-sm">
                <a href="tel:+358406613157">+358 40 6613157</a>
              </p>
            </div>
            <div>
              {" "}
              <h4 style={{ marginBottom: 5 }}>Email</h4>
              <p className="text-sm">
                <a href="mailto:talktous@lillybeautyfashion.com">
                  talktous@lillybeautyfashion.com
                </a>
              </p>
            </div>
          </div>
          {/* <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum optio iusto alias maiores obcaecati tempora, error beatae, aperiam, nisi recusandae illum. Eveniet, magnam ab dolorem possimus tenetur vel!</p> */}
        </div>
      )}
      {div === "description" && (
        <div className="flex flex-col pb-16">
          <p className="text-sm">{description}</p>
          {/* <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum optio iusto alias maiores obcaecati tempora, error beatae, aperiam, nisi recusandae illum. Eveniet, magnam ab dolorem possimus tenetur vel!</p> */}
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
