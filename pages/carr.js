import React, { useState } from "react";

export default function Career() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleFormSubmission}
      >
        <div className="career-form-wrap">
          <div className="career-form d-flex flex-wrap">
            <input
              type="hidden"
              name="appliedPosition"
              value="Graphics Designer (1-3 Years)"
            />
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                className="form-control"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                className="form-control"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
                className="form-control"
                maxLength="10"
                minLength="10"
              />
            </div>
            <div>
              <p>Upload CV*</p>
              <input
                type="file"
                name="resume"
                required
                className="form-control"
                accept=".pdf,.doc,.docx"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit Now
              </button>
            </div>
          </div>
        </div>
        {loading && <p>Loading...</p>}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}



