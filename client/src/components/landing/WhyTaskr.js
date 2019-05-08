import React from "react";
import {
  StyledInfo,
  StyledParentCard,
  StyledImg,
  StyledTaskrInfo,
  StyledH3,
  StyledUl,
  StyledSmall
} from "../../elements/index";

const WhyTaskr = () => {
  return (
    <StyledParentCard>
      <StyledTaskrInfo>
        <StyledH3>Parents</StyledH3>
        <StyledInfo>
          <h4>
            task'r is a task managment app designed to help kids develop
            executive functioning.
          </h4>
        </StyledInfo>
      </StyledTaskrInfo>
      <StyledImg src={require("../../resources/superhero.jpg")} />
      <StyledImg src={require("../../resources/kids.jpg")} />
      <StyledInfo>
        <StyledTaskrInfo>
          <StyledH3>
            Executive functioning is responsible for many skills
          </StyledH3>
          <br /> <br />
          <StyledUl>
            <li>Paying attention</li>
            <li>Organizing, planning, and prioritizing</li>
            <li>Starting tasks and staying focused on them to completion</li>
          </StyledUl>
        </StyledTaskrInfo>
      </StyledInfo>
      <StyledInfo>
        <StyledTaskrInfo>
          Having children do chores is one of the most effective methods of
          teaching these skills, and is also one of the top indicators of
          whether or not a child will be successful or not later in life.
        </StyledTaskrInfo>
      </StyledInfo>
      <StyledImg src={require("../../resources/girlWashingDishes.jpg")} />
      <StyledImg src={require("../../resources/class.jpg")} />
      <StyledInfo>
        <StyledTaskrInfo>
          "If kids aren't doing the dishes, it means someone else is doing that
          for them, and so they're absolved of not only the work, but of
          learning that work has to be done and that each one of us must
          contribute for the betterment of the whole." <br />
          <StyledSmall>
            - Julie Lythcott-Haims, former Dean of Freshmen at Stanford
            University and author of 'How to Raise an Adult'
          </StyledSmall>
        </StyledTaskrInfo>
      </StyledInfo>
    </StyledParentCard>
  );
};

export default WhyTaskr;
