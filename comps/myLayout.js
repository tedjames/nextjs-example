import Header from "./header";
import styled from "styled-components";

const LayoutContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #333;
`;

const Layout = props => (
  <LayoutContainer>
    <Header />
    {props.children}
  </LayoutContainer>
);

export default Layout;
