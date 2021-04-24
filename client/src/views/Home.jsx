import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className=' Home'>
        <section className='side-by-side'>
          <div className='Left'>
            <h1>
              Dare your friends <br />
              for charity
            </h1>
            <p>
              The donation will only be submitted <br /> once they have fullfill
              your dare.
            </p>
            <button>
              <Link to='/dare/all'> Brows Dares</Link>
            </button>
          </div>
          <div className='Right'></div>
        </section>
        <section className='HowTo'>
          <h2>Here is how it works</h2>
          <table>
            <tr>
              <td>
                <h5>1. Register</h5>
                <p>
                  Please register first, so we know how to update you about your
                  dare status.
                </p>
              </td>

              <td>
                <h5>2. Send a dare to a friend</h5>
                <p>
                  Choose a dare from our selectiona charity you want to donate
                  the dare to and send it to a friend.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h5>3. Send your dare to a friend</h5>
                <p>
                  Your friend will receive the dare via email. They will
                  including the instructions as well as the info how much will
                  be donated, once they have fullfilled the dare.{" "}
                </p>
              </td>

              <td>
                <h5>4. Watch your friend fullfill your dare</h5>
                <p>
                  Watch your friend do the dare. Confirm his sumission and the
                  donation will be sent to the selcted charity.
                </p>
              </td>
            </tr>
          </table>
        </section>
      </div>
    );
  }
}

export default Home;
