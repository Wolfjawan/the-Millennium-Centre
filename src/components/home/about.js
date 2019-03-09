import React, { Component } from "react";
import FullScreenImage from "../fullScreenImage";
import FullScreenText from "../fullScreenText";
import TheMillenniumCentre from "../../images/General/20.JPG";
import TheMillenniumCentreWildlifeImage from "../../images/General/29.jpg";
class About extends Component {
  TheMillenniumCentreWildlife = () => {
    return (
      <div>
        <h3>Birds</h3>
        <p>
          Skylarks are becoming rare, probably because of the chemicals used by
          farmers.Eastbrookend and The Chase are chemical free zones which means
          visitors have plenty of opportunity to listen out for the music of the
          skylarks. During the summer months the scrubland provides valuable
          feeding and nesting habitat for small birds such as the blackcap.
          Eastbrookend has also proved to be a good breeding ground for
          lapwings. The winter berries that adorn most bushes attract hungry
          birds such as fieldfares and redwings that fly all the way from the
          Arctic to feast at the Eastbrookend.Another bird on the lookout for
          food is the kestrel. Woodpeckers are regularly seen flying over the
          area and come to rest on trees of the woodlands.Mallards and tufted
          ducks can be seen swimming on the ponds and some of the largest flocks
          of water birds in east London have settled in the area. Herons are
          natural hunters and dive for frogs and other tasty morsels of food in
          the lakes and ponds in the area.
        </p>
        <h3>Butterflies and wild bees</h3>
        <p>
          The area has been planted with grasses and flowers so there is lots of
          nectar and pollen to attract wildlife.Butterflies and wild bees abound
          and the area is home to wild bees that live alone and not in crowds
          like honeybees.
        </p>
        <h3>Black poplars</h3>
        <p>
          There are 7 mature black poplar trees at Eastbrookend.There are only
          around 2, 000 black poplars in the whole of the country and somehow
          these 7 trees have managed to survive the gravel digging and dumping
          in the area. The trees are now able to grow safely inside the Chase,
          which is a London Wildlife Trust nature reserve.
        </p>
      </div>
    );
  };
  render() {
    return (
      <div className="home-about" id="home-about">
        <section>
          <FullScreenImage
            id="TheMillenniumCentre"
            image={TheMillenniumCentre}
            alt="TheMillenniumCentre"
          />
          <div className="about-section-one">
            <h3>The Millennium Centre</h3>
            <p>
              The Millennium Centre is a visitor centre which is open to the
              public throughout the year. The building is a permanent exhibition
              of ecological principles as well as housing educational displays
              in its public spaces.
            </p>
            It includes:
            <ul>
              <li>an introduction to the history of the site</li>
              <li>
                information on the design and construction of the building
              </li>
              <li>environmentally themed educational displays</li>
            </ul>
            <p>
              The building forms a natural gateway into the wide-open spaces of
              Eastbrookend Country Park and the Dagenham Chase Local Nature
              Reserve. The centre acts as the focal point for visitors and
              provides a comfortable venue for walkers, school groups and anyone
              wanting to learn more about the local countryside or environment.
              There are toilets and baby-changing facilities on site.
            </p>
          </div>
        </section>
        <section className="about-section-two-main">
          <FullScreenImage
            id="TheMillenniumCentreWildlifeImage"
            image={TheMillenniumCentreWildlifeImage}
            alt="TheMillenniumCentreWildlifeImage"
          />
          <div className="about-section-two">
            <h2>The Millennium Centre Wildlife </h2>
            <p>
              There is a great variety of wildlife in the area including birds,
              bees and butterflies.
            </p>
            <h3>Dragonflies</h3>
            <p>
              Dragonflies are fierce hunters of flying insects.The dragonfly
              larvae lives under water and will eat most other water creatures
              and small fish.
            </p>
            <FullScreenText
              textBtn="Read more"
              id="TheMillenniumCentreWildlife"
              text={this.TheMillenniumCentreWildlife()}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default About;
