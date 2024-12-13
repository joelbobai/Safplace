import {
  // useContext,
  useEffect,
  useState,
} from "react";
// import product_rt_1 from "../assets/product_rt_1.png";
// import product_rt_2 from "../assets/product_rt_2.png";
// import product_rt_3 from "../assets/product_rt_3.png";
// import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
// import { ShopContext } from "../Context/ShopContext";
import { useAuthStore } from "../store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";

const ProductDisplay = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState();
  const { privateData, isLoggedIn, user, addToMyCart } = useAuthStore();
  // const { addToCart } = useContext(ShopContext);
  const [activeKey, setActiveKey] = useState(null);
  const [inches, setInches] = useState("30 inches");
  const [Price, setPrice] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const calculatePercentage = (total, percent) => {
    return (total * percent) / 100;
  };
  const priceArray = product?.differentOfPriceStretchedLengthInches
    ? Object.entries(product?.differentOfPriceStretchedLengthInches)
    : [];
  const priceArrayC = product?.differentOfPriceHairColor
    ? Object.entries(product?.differentOfPriceHairColor)
    : [];
  const priceArrayD = product?.differentOfPriceHairDensity
    ? Object.entries(product?.differentOfPriceHairDensity)
    : [];

  useEffect(() => {
    setPrice(product?.productPrice);
    setProductImage(product?.productImage);
    setActiveKey("one");
  }, [product]);

  const handleItemClick = (key) => {
    setActiveKey(key);
  };
  const handleQuantityChange = async (newQuantity) => {
    console.log("Selected Quantity:", newQuantity);
    setPrice(product?.productPrice * newQuantity);
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    privateData();
    if (isLoggedIn) {
      if (user?._id) {
        addToMyCart({
          user: user?._id,
          products: [
            {
              product: product?._id, // Example product ID
              productImage: product?.productImage,
              productName: product?.productName,
              productPrice: product?.isOff
                ? Price - calculatePercentage(Price, product?.offPercentage)
                : Price,
              stretchedLength: inches,
              isOff: product?.isOff,
              quantity: quantity ? quantity : 1,
            },
          ],
        });
      }
    } else {
      errorHandle("Please login to add to cart");
      navigate("/login");
    }
  };
  const buyNow = () => {
    privateData();
    if (isLoggedIn) {
    } else {
      errorHandle("Please login to buy it now");
      navigate("/login");
    }
  };

  const errorHandle = (err) => {
    toast.error(err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <section>
      <div className="flex flex-col gap-14 xl:flex-row">
        {/* left side */}
        <div className="flex gap-x-2 xl:flex-1">
          <div className="flex flex-col gap-[7px] flex-wrap">
            {product?.productImageList?.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Product Img ${index + 1}`}
                className="max-h-[99px]"
                onClick={() => {
                  setProductImage(imageUrl);
                }}
              />
            ))}
          </div>
          <div>
            <img src={productImage} alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flex-col flex xl:flex-[1.7]">
          {/* <h3 className="h3 ">{product.name}</h3> */}
          <div className="flex gap-x-2 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>(111)</p>
          </div>
          <div className="flex gap-x-6 medium-20 my-4 ">
            <div className="line-through "> €{Price}</div>
            <div className="text-secondary">
              €{Price - calculatePercentage(Price, product?.offPercentage)}
            </div>
          </div>
          <div className="mb-4">
            {/* <h4 className="bold-16">Select Size:</h4>
            <div className="flex gap-3 my-3">
              <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">
                S
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                M
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                L
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">
                XL
              </div>
            </div> */}
            {/* Hair Color */}
            {product?.hairColor && (
              <>
                <h4
                  className="bold-16"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  Color:
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 100px)",
                  }}
                >
                  {priceArrayC.map(([key, { color, price, active }], index) => (
                    <div
                      key={key}
                      className={`ring-2 ${
                        key === activeKey
                          ? "ring-slate-900"
                          : "ring-slate-900/10"
                      }  h-10 w-25 flexCenter cursor-pointer`}
                      style={{ borderWidth: 5, margin: 5, fontSize: "80%" }}
                      onClick={() => {
                        handleItemClick(key);
                        setPrice(price * quantity);
                        setInches(inches);
                      }}
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* Stretched Length */}
            {product?.stretchedLengthInches && (
              <>
                <h4
                  className="bold-16"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  Stretched Length:
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 100px)",
                  }}
                >
                  {priceArray.map(([key, { inches, price, active }], index) => (
                    <div
                      key={key}
                      className={`ring-2 ${
                        key === activeKey
                          ? "ring-slate-900"
                          : "ring-slate-900/10"
                      }  h-10 w-25 flexCenter cursor-pointer`}
                      style={{ borderWidth: 5, margin: 5, fontSize: "80%" }}
                      onClick={() => {
                        handleItemClick(key);
                        setPrice(price * quantity);
                        setInches(inches);
                      }}
                    >
                      {inches}
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* Hair Density */}
            {product?.hairDensity && (
              <>
                <h4
                  className="bold-16"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  Density:
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 100px)",
                  }}
                >
                  {priceArrayD.map(
                    ([key, { density, price, active }], index) => (
                      <div
                        key={key}
                        className={`ring-2 ${
                          key === activeKey
                            ? "ring-slate-900"
                            : "ring-slate-900/10"
                        }  h-10 w-25 flexCenter cursor-pointer`}
                        style={{ borderWidth: 5, margin: 5, fontSize: "80%" }}
                        onClick={() => {
                          handleItemClick(key);
                          setPrice(price * quantity);
                          setInches(inches);
                        }}
                      >
                        {density}
                      </div>
                    )
                  )}
                </div>
              </>
            )}
            <h4 className="bold-16">Quantity:</h4>
            <div className="flex gap-3 my-3">
              <QuantitySelector
                initialQuantity={1}
                min={1}
                max={20}
                onQuantityChange={handleQuantityChange}
              />
            </div>
            <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
              <button
                onClick={addToCart}
                className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest"
              >
                Add to cart
              </button>
              <button
                onClick={buyNow}
                className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest"
              >
                Buy it now
              </button>
            </div>
            <p>
              <span className="medium-16 text-tertiary">Category :</span> Women
              | Body Wave | Human Hair
            </p>
            <p>
              <span className="medium-16 text-tertiary">Tags :</span> Modern |
              Latest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
