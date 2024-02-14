import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";
import HighlightSyntaxSelector from "./HighlightSyntaxSelector";
import AutoExpandSelector from "./AutoExpandSelector";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Right = styled.div`
  display: flex;
  grid-gap: 5px;
  position: absolute;
  right: 5px;
`;

const Options = styled.div`
  display: flex;
  grid-gap: 10px;
  flex-direction: row;
`;

export default () => {
  return (
    <Wrapper>
      <div></div>
      {/* <NavItems>{navItems}</NavItems> */}
      <Right>
        {" "}
        <Options>
          <HighlightSyntaxSelector />
          <ThemeSelector />
          <AutoExpandSelector />
        </Options>
      </Right>
    </Wrapper>
  );
};
