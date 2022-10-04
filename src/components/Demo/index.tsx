import GridLayout from "react-grid-layout";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import styled from "@emotion/styled";

const layout = [
  { i: "a", x: 0, y: 0, w: 3, h: 8, static: true },
  { i: "b", x: 3, y: 0, w: 3, h: 8, minW: 3, maxW: 4 },
  { i: "c", x: 6, y: 0, w: 6, h: 8},
  { i: "d", x: 0, y: 1, w: 3, h: 8},
  { i: "e", x: 3, y: 1, w: 3, h: 8},
  { i: "f", x: 6, y: 1, w: 6, h: 8},
];

const layout1 = [
  { i: "a", x: 0, y: 0, w: 3, h: 8, static: true },
  { i: "b", x: 3, y: 0, w: 3, h: 8, minW: 3, maxW: 4 },
  { i: "c", x: 6, y: 0, w: 6, h: 8},
  { i: "d", x: 0, y: 1, w: 3, h: 8},
  { i: "e", x: 3, y: 1, w: 3, h: 8},
  { i: "f", x: 6, y: 1, w: 6, h: 8},
];
const layout2 = [
  { i: "a", x: 0, y: 0, w: 6, h: 8, static: true },
  { i: "b", x: 6, y: 0, w: 6, h: 8, minW: 3, maxW: 6 },
  { i: "c", x: 0, y: 1, w: 12, h: 8},
  { i: "d", x: 0, y: 2, w: 6, h: 8},
  { i: "e", x: 6, y: 2, w: 6, h: 8},
  { i: "f", x: 12, y: 3, w: 12, h: 8},
];

const layouts = {
  lg: layout1,
  md: layout2,
}

const Item = styled.div`
  /* width: 30%;
  height: 100px; */
  border: 1px solid #ccc;
`;

function Demo() {
  return ( 
    // <GridLayout
    //   className="layout"
    //   layout={layout}
    //   cols={12}
    //   rowHeight={30}
    //   width={1200}
    // >
    //   <Item key="a">a</Item>
    //   <Item key="b">b</Item>
    //   <Item key="c">c</Item>
    //   <Item key="d">d</Item>
    //   <Item key="e">e</Item>
    //   <Item key="f">f</Item>
    // </GridLayout>
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      rowHeight={30} width={1200}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
    >
      <Item key="a">a</Item>
      <Item key="b">b</Item>
      <Item key="c">c</Item>
      <Item key="d">d</Item>
      <Item key="e">e</Item>
      <Item key="f">f</Item>
    </ResponsiveGridLayout>
  );
}

export default Demo;