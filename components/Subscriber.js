import React, { useState } from 'react';

const Subscriber = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch('http://localhost:3020/subscriber/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Subscription successful!');
        // Clear the email field after successful subscription
        setEmail('');
        // Optionally, you can perform additional actions after successful subscription
      } else {
        console.error('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <div className="subscribe-container" id="subscribe">
        <div className="container1">
          <div className="sub-bx2">
            <div>
              <h1 className="sub-heading">Subscribe Now</h1>
              <p className="sub-para">We won't overburden you with annoying emails.</p>
              <div className="subbx">
                <div className="emailbox">
                  <i className="ri-mail-line"></i>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <div className="mdtop studies-btn book-btn">
                    <button
                      onClick={handleSubscribe}
                      className="btn btn-primary trans animated pulse abt-butn-bot"
                    >
                      Subscribe
                      <img
                        src="/themes/viralon/images/icons/next.png"
                        className="arrow  next-arow arrow1  animate-right-to-left"
                        alt="Next Arrow"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="subs-img ">
              <img
                src="/themes/viralon/images/subscribe1.png"
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
