import image from "../../assets/image.jpg";

const Body = () => {
  return (
    <div className="main-section">
      <div className="upper-section">
        <div className="image">
          <img className="main-image" src={image} alt="loading"></img>
        </div>
        <div className="contact">
          <div className="content">
            <h1>Think Health. Think Massage.</h1>
            <p>
              We are open 9am to 6pm; Monday through Sunday.if you would like to
              schedule an appointment with us, please call us at 987-654-3120
              today!
            </p>
          </div>
          <div className="buttons">
            <button>LEARN MORE ABOUT US</button>
            <button>CONTACT US TODAY</button>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="description">
          <p className="head">
            Are you looking for a professional, registered massage therapist?
            Sample Massage Therapy has 4 registered massage therapists who can
            provide clinical massage.
          </p>

          <p>
            We are committed to your long term health and well-being. Our
            multi-disciplinary clinic provides a balanced approach to a healthy
            lifestyle. Enhance your health and improve your performance with our
            treatments.
          </p>

          <p>
            We welcome you to come explore all the benefits youll enjoy as one
            of our valued guests. Our professional staff is committed to
            offering the best massage therapy in Mainland.
          </p>

          <hr />
        </div>

        <div className="address">
          <h1>Family Wellness Massage Therapy</h1>
          <p>888 Griffiths Way, Mainland ML 12345</p>
          <p>Tel: 987.654.3210</p>
          <p>Email: info@yoursite.com</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
