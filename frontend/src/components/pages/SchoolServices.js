import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { homeCarousel } from '../../styles/assets/homeCarousel/homeCarousel-data'
import Blank from '../../styles/assets/logos/blank.png'
import {Link} from 'react-router-dom'

const SchoolServices = () => {
  return (
    <div className="school-services">
      <section className="school-services-background hero has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              SCHOOL SERVICES
            </h1>
            <p className="ruler"></p>
            <p className="ss-text">
              We provide multisport sessions for children aged 4-11, our aim is for young people to be given high quality opportunities to access sport in a safe, fun and challenging environment. Our services include breakfast, lunch and after school clubs as well as PPA, maternity, paternity and illness cover.
            </p>
          </div>
        </div>
      </section>
      <section className="info-and-testimonial">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="school-services-info">
              <div className="content">
                <h3>Breakfast Club</h3>
                <p>
                  Starting the day with physical activity helps to improve focus, mood and confidence for the day
                  ahead. We can be flexible to the needs of the school and pupils through offering alternatives to
                  sports such as board games, puzzles and a place to read and write in our ‘relaxation areas’.
                </p>
                <h3>Lunchtime Club</h3>
                <p>
                  We understand that lunch time can be a challenging time of the day for pupils and school staff. To
                  help ease the pressure, we offer lunchtime supervision, school team training and organised games to
                  encourage pupils to engage in positive activities during their lunch break.
                </p>
                <h3>After School Club</h3>
                <p>
                  As well as providing childcare in a safe environment, our after-school clubs give pupils the chance to
                  further develop their skills in a particular sport or multi-sport sessions. With certificates and prizes to
                  be won, our after-school clubs are a hit with pupils and working families alike.
                </p>
                <h3>PE Lessons / PPA Cover</h3>
                <p>
                  We know how vital PPA time is and how expensive and time-consuming managing external cover
                  can be. This is considered when tailoring our PPA packages so we can offer affordable cover and
                  make valuable use of your Primary PE and Sport Premium funding budgets.<br/><br/>
                  By choosing Sporting Kids for your PPA cover and PE lessons, you can rest assured that we will
                  provide your school with the following benefits:
                  <ul>
                    <li>A cost-effective service</li>
                    <li>Quality lessons in line with PE curriculum objectives</li>
                    <li>Effective differentiation to enable progression for all abilities</li>
                    <li>Staff continuity</li>
                    <li>Termly or half-termly assessments and feedback</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="column is-one-third">
            <div className="school-services-testimonial">
              <article className="message is-success">
                <div className="message-header">
                  <p>Derek Junior, Beekeeper</p>
                </div>
                <div className="message-body">
                  <em>Why is she gonna get angry with you? Oh honey, he's teasing you, nobody has two television sets. Great good, good, Lorraine, I had a feeling about you two. Marty, will we ever see you again? Hey boy, are you alright?

                  Marty, you didn't fall asleep, did you? C'mon. Yeah. Silence Earthling. my name is Darth Vader. I'm am an extra-terrestrial from the planet Vulcan. I have to tell you about the future.</em>
                </div>
              </article>
              <article className="message is-success">
                <div className="message-header">
                  <p>Derek Junior, Beekeeper</p>
                </div>
                <div className="message-body">
                  <em>Why is she gonna get angry with you? Oh honey, he's teasing you, nobody has two television sets. Great good, good, Lorraine, I had a feeling about you two. Marty, will we ever see you again? Hey boy, are you alright?

                  Marty, you didn't fall asleep, did you? C'mon. Yeah. Silence Earthling. my name is Darth Vader. I'm am an extra-terrestrial from the planet Vulcan. I have to tell you about the future.</em>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="school-services-carousel">
        <div className="school-carousel">
          <Carousel
            infiniteLoop
            centerMode
            autoPlay
            dynamicHeight={true}
            showThumbs={false}
            showArrows={false}
            interval={3500}
            showStatus={false}
            transitionTime={750}
            centerSlidePercentage={100}
          >
            {homeCarousel.map(image => <div key={image.name} id={image.name} className="carousel-school-services" >
              <img src={Blank} className="school-carousel-image" alt={image.name} />
            </div>)}
          </Carousel>
        </div>
        <div className="content">
          <h3>Wellbeing Workshops</h3>
          <p>
            Sporting Kids have experience of working in a range of settings including SEN provisions, youth clubs
            and Pupil Referral Units. Through working with children and young people with social, emotional and
            mental health needs we have developed our Wellbeing Workshops.<br/><br />
            These workshops incorporate mentoring sessions, discussion-based activities and mental health
            awareness alongside promoting the importance of keeping active through sports.
          </p>
          <p className="enquire">Enquire <Link to="/contact"><strong>here</strong></Link> for more information about our school services</p>
        </div>
      </section>
    </div>

  )
}

export default SchoolServices