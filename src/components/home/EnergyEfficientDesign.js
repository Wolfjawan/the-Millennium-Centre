import React, { Component } from "react";
import EnergyEfficientDesignImg from "../../images/Millennium-Centre-exterior-view.jpg";
import ImageBox from "./imageBox";
import "./index.css";

class EnergyEfficientDesign extends Component {
  render() {
    return (
      <div className="energy-efficient-design">
        <ImageBox
          h3="Energy Efficient Design"
          h3Styles={{ textAlign: "center" }}
          src={EnergyEfficientDesignImg}
          p={`The Millennium Centre has been 
              designed to be as energy efficient as possible 
              both in construction and in use. Many innovative
              techniques were used in the construction of the building.`}
          alt="Energy efficient design"
          imageStyles={{
            width: "100%",
            marginBottom: "1%"
          }}
          boxStyle={{
            width: "33.33%"
          }}
          pStyles={{padding:" 1% 4%"}}
        />
        <ImageBox
          h3="Foundations"
          h3Styles={{ textAlign: "center" }}
          src={EnergyEfficientDesignImg}
          p={`There are no conventional foundations under the centre. There are a
          number of large helical screws that anchor the building to the ground.
          The anchors can be taken out leaving the earth unspoilt should the
          building be removed at any time in the future.`}
          alt="Foundations"
          imageStyles={{
            width: "100%",
            marginBottom: "1%"
          }}
          boxStyle={{
            width: "33.33%"
          }}
          pStyles={{padding:" 1% 4%"}}
        />
        <ImageBox
          h3="Wind turbine"
          h3Styles={{ textAlign: "center" }}
          src={EnergyEfficientDesignImg}
          p={`This is a clean and sustainable way of generating energy. In this case
          it generates electricity to power all the lighting in the building.`}
          alt="Wind turbine"
          imageStyles={{
            width: "100%",
            marginBottom: "1%"
          }}
          boxStyle={{
            width: "33.33%"
          }}
          pStyles={{padding:" 1% 4%"}}
        />
        <ImageBox
          h3="Roof"
          h3Styles={{ textAlign: "center" }}
          src={EnergyEfficientDesignImg}
          p={`The roof is south facing to catch as much light and heat as possible.
          It’s made of recycled aluminium which means that the roof is made of
          old drink cans. It is supported by ‘glulam’ (or laminated) beams,
          constructed by using wood cut from young trees (from sustainable
          forests), and ‘pressure-glues’ them together creating a much stronger
          material. This process means old mature woodlands are left intact and
          only young trees of lesser conservation value are cut down.`}
          alt="Roof"
          imageStyles={{
            borderRadius: "10px",
            width: "100%",
            marginBottom: "1%"
          }}
          boxStyle={{
            width: "48%",
            margin: "1%"
          }}
        />
        <ImageBox
          h3="Walls and insulation"
          h3Styles={{ textAlign: "center" }}
          src={EnergyEfficientDesignImg}
          p={`The walls are constructed using masonite wood fibre composite studs;
          external walls (and roof) are insulated with recycled newspaper or
          ‘cellulose blown fibre’. This enables the walls to breathe eliminating
          condensation. The external walls are all clad in Canadian Douglas fir
          wood and 2 trees replace every tree harvested. The windows are doubled
          or triple glazed to allow maximum heat retention. Underneath the
          paving slabs the floor is made of layers of sand and gravel, there is
          also a layer of foam glass made in part from recycled windscreens,
          which acts as further insulation. In the summer the slabs keep the
          centre cool and in the winter they store heat and help keep it warm.`}
          alt="Walls and insulation"
          imageStyles={{
            borderRadius: "10px",
            width: "100%",
            marginBottom: "1%"
          }}
          boxStyle={{
            width: "48%",
            margin: "1%"
          }}
        />
        <ImageBox
          h3="Boiler"
          h3Styles={{ textAlign: "center" }}
          src={EnergyEfficientDesignImg}
          p={`Despite the building being 4-5 times bigger than an average house, the
          boiler used is the same size as one you'd find in most people's homes.`}
          alt="Boiler"
          imageStyles={{
            borderRadius: "10px",
            width: "100%",
            marginBottom: "1%"
          }}
          boxStyle={{
            width: "48%",
            margin: "1%"
          }}
        />
        <ImageBox
          h3="Rainwater recycling"
          h3Styles={{ textAlign: "center" }}
          src={EnergyEfficientDesignImg}
          p={`Rainwater from the roof is drawn into channels and collects in an
          underground reservoir to be recycled for watering the surrounding
          plants. These features all help to reduce energy consumption of the
          building, ensuring cost-effective building management.`}
          alt="Rainwater recycling"
          imageStyles={{
            borderRadius: "10px",
            width: "100%",
            marginBottom: "1%"
          }}
          boxStyle={{
            width: "48%",
            margin: "1%"
          }}
        />
      </div>
    );
  }
}

export default EnergyEfficientDesign;
