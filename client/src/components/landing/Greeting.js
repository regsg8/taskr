import React from "react";
import taskr from "../../resources/taskr.png";
import WhyTaskr from "./WhyTaskr";

const Greeting = () => {
  const styles = {
    img: {
      height: "100px",
      margin: "10px"
    },
    greetingDiv: {
      padding: "10px",
      margin: "10px"
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#fbfbfb",
        borderRadius: "5px"
      }}
    >
      <img src={taskr} alt="dinosaur icon" style={styles.img} />

      <div style={styles.greetingDiv}>
        <span
          style={{
            color: "#fea42a",
            textTransform: "uppercase",
            fontSize: "5rem",
            fontFamily: "'Just Another Hand', 'cursive'"
          }}
        >
          {" "}
          Welcome!{" "}
        </span>{" "}
        <br /> Meet task'r, the taskosaurus-rex. <br />
        He needs your help, task'r is very hungry - complete tasks so he can
        eat!
      </div>
      <br />
      <br />
      <WhyTaskr />
    </div>
  );
};

export default Greeting;
