import React from 'react'
import { Link } from 'react-router-dom'
import { oneTwoOne } from '../../styles/assets/homeCarousel/homeCarousel-data'

const Multisports = () => {
  return (
    <div className="multisports">
      <section className="multi-sports-background hero is-danger has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              MULTI SPORTS COACHING
            </h1>
          </div>
        </div>
      </section>
      <section className="infos-and-testimonial">
        <div className="columns is-mobile">
          <div className="column is-three-quarters">
            <div className="columns">
              <div className="column is-three-fifths multisports-info">
                <h3>One to One and small groups coaching</h3>
                <p>
                  We offer private 1:1 coaching sessions for individuals who want to improve their skills, confidence
                  and overall performance in a chosen sport or just want to have fun and stay active through multi
                  sports. As well as 1:1 sessions, why not bring some friends along for a group session! <Link to="/contact"><strong>Get in touch  </strong></Link>
                  and ask us about our block booking discounts for our one to one and small group coaching.
                </p>
                <h3>Birthday Parties</h3>
                <p>
                  Our parties are tailored to suit your birthday wishes no matter how big or small, they are fun filled
                  with multi-sports and games. We have the bronze, silver and gold packages to choose from or you
                  can customise your party to make it a birthday to remember! Enquire here for prices
                </p>
                
                <img src={oneTwoOne} alt="Sporting Kids one to one coaching" />
                <p className="ms-click"><strong>Click <Link to="/whatson"><span>here</span></Link> for after school clubs and Sporting Kids events near you!</strong></p>
              </div>
              <div className="column multi-sport-image">
                <img src="https://static.wixstatic.com/media/1a0189_f288ece6945247a7a8d88fdce15c77ae~mv2_d_5184_3456_s_4_2.jpg/v1/crop/x_145,y_0,w_4894,h_3456/fill/w_1082,h_764,al_c,q_85,usm_0.66_1.00_0.01/IMG_1576_JPG.webp" alt="Sporting Kids Multisports Services" />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="column is-one-quarter">
            <div className="multisports-services-testimonial">
              <h4 className="has-text-centered">Testimonials</h4>
              <article className="message is-success">
                <div className="message-header">
                  <p>Tanasheh, Parent</p>
                </div>
                <div className="message-body">
                  <em>
                    <strong>"Fantastic training, games and activities for all kids and all abilities, they provide different sports for all interests and a space where children will grow in self-esteem and confidence."</strong></em>
                </div>
              </article>
              <article className="message is-success">
                <div className="message-header">
                  <p>Johanna, Parent</p>
                </div>
                <div className="message-body">
                  <em>
                    <strong>"What a fantastic team! The kids had so much fun and you made taylens day. You have the most patience to look after 25 eight year olds! I take my hat off to you! Thank you again for the best party!"</strong></em>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Multisports