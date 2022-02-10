
import "./Homepage.css";
import logo from "../component/anmol-seth-hDbCjHNdF48-unsplash.jpg";
import picture from "../component/img/photo-1564078516393-cf04bd966897.jpg";
import room from "../component/img/photo-1513694203232-719a280e022f.jpg";
import room1 from "../component/img/istockphoto-1222751444-170667a.jpg";
import { Link } from "react-router-dom";

export default function homepage() {
  return (
    <>
      <div className="home">
        <h1 className="h1">START YOUR SEARCH</h1>
        <div className="innerpart">
          <input
            className="enter"
            type="text"
            placeholder="What are you looking for?"
          />
          <input className="enter" type="date" placeholder="Arrival date" />
          <input className="enter" type="date" placeholder="Departure date" />
          <input className="enter" type="text" placeholder="Number of guests" />
          <button className="btn btn-primary">Search</button>
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src={logo} alt="" height={260} width={450} />
        </div>
        <div className="content">
          <h2>Try Hosting</h2>
          <p>
            Option like self check-in or booking an entire home allow you to interect with your host mainly through in-app messaging-you can message them anytime if something comes up.
          </p>
          <hr />
          <p>
            Almost anyone can be a host of a stay or an experience. It's free to sighn up and share either your space or your skills with the world. To get started , visited our Host Centre.
          </p>
          <Link className="btn btn-outline-primary" to="/Requirement">
            POST YOUR REQUIREMENT HERE
          </Link>
        </div>
      </div>
      <div className="container">
        <div className=" con first">
          <img src={room1} alt="room1" height={150} width={150} />
          <h3>Effortless arrivals</h3>
          <p>
            Private airport pick-up, an in-person welcome, and a stocked home are some of our featured add-ons.
          </p>
          <button className="btn btn-primary">Details</button>
        </div>
        <div className=" con second">
          <img src={room} alt="room1" height={150} width={150} />
          <h3>Luxury amenities</h3>
          <p>
            Fully equipped to meet your needs, with ample space and privacy
          </p>
          <button className="btn btn-primary">Details</button>
        </div>
        <div className=" con third">
          <img src={picture} alt="room1" height={150} width={150} />
          <h3>Custom itineraries</h3>
          <p>
            Your trip designer can plan every last detail and make sure everything is just right.
          </p>
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
      <div className="footer">
        <div className="subscribe">
          <label htmlFor="subscribe">
            <h5>Signup for our newsletter </h5>{" "}
          </label>
          <input
            type="text"
            placeholder="Email address"
            id="subscribe"
            size={40}
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
        <p>
          Whether you're going on a business trip or relocating to new city,
          find homes and boutique hotels with 5-star reviews from other business
          travellers.
        </p>
        <div className="details">
          <div className="detailinfo">
            <h4>ABOUT</h4>
            <ul>
              <li>How Airbnb works</li>
              <li>Newsroom</li>
              <li>Investments</li>
              <li>HotelTonight</li>
            </ul>
          </div>
          <div className="detailinfo">
            <h4>COMMUNITY</h4>
            <ul>
              <li>Diversity & Belonging</li>
              <li>Accessibility</li>
              <li>Guest Referrals</li>
              <li>Host Afgan refugees</li>
            </ul>
          </div>
          <div className="detailinfo">
            <h4>HOST</h4>
            <ul>
              <li>Host your home</li>
              <li>Host an online Experience</li>
              <li>Resource Centre</li>
              <li>Community Centre</li>
            </ul>
          </div>
          <div className="detailinfo">
            <h4>SUPPORT</h4>
            <ul>
              <li>Our COVID-19 Response</li>
              <li>Help Centre</li>
              <li>Cancellation Option</li>
              <li>Trust & Safety</li>
            </ul>
          </div>
        </div>
        <div className=" copyright">
            &copy; 2021 Copyright: Innomatics
        </div>
      </div>
    </>
  );
}
