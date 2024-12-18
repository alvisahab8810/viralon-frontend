import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscriber = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    setLoading(true); // Show loader

    try {
      const formData = new URLSearchParams();
      formData.append("email-address", email);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwUXVeFlbfBxKTYTjoSS_hRZ8qmNi75NlMsSw1KeyKrZniy66FlsH3bv_KmXdkSgV3g/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      // Delay showing the final toast notification
      setTimeout(() => {
        if (result.result === "success") {
          toast.success("Thank you for subscribing!", {
            position: "top-right",
            autoClose: 1000, // Auto close in 1 second
          });
        } else {
          toast.error("Something went wrong, please try again.", {
            position: "top-right",
            autoClose: 1000, // Auto close in 1 second
          });
        }
        setLoading(false); // Hide loader after response
      }, 1000); // 1 second delay

      setEmail(""); // Clear the form input
    } catch (error) {
      toast.error("Something went wrong, please try again.", {
        position: "top-right",
        autoClose: 1000, // Auto close in 1 second
      });
      setLoading(false); // Hide loader on error
    }
  };

  return (
    <>
      <div className="subscribe-container" id="subscribe">
        <div className="container1">
          <div className="sub-bx2">
            <div>
              <h1 className="sub-heading">Subscribe Now</h1>
              <p className="sub-para">
                We won't overburden you with annoying emails.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="subbx">
                  <div className="emailbox">
                    <i className="ri-mail-line"></i>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <div className="mdtop studies-btn book-btn">
                      <button
                        type="submit"
                        className={`btn btn-primary trans animated pulse abt-butn-bot ${
                          loading ? "button-loader" : ""
                        }`}
                        disabled={loading} // Disable button while loading
                      >
                        {loading && <div className="loader"></div>}{" "}
                        {/* Show loader */}
                        Subscribe
                        <img
                          src="/themes/viralon/images/icons/next.png"
                          className="arrow next-arow arrow1 animate-right-to-left"
                          alt="Next Arrow"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <ToastContainer /> {/* Add this to render toast notifications */}
            </div>

            <div className="subs-img ">
              <img
                src="./images/subscribe1.webp"
                alt="Subscribe Image"
                className="gif"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscriber;
