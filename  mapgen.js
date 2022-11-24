const fs = require("fs");
const DottedMap = require("dotted-map").default;
// Or in the browser: import DottedMap from 'dotted-map';

const map = new DottedMap({ height: 60, grid: "diagonal" });

const svgMap = map.getSVG({
  radius: 0.22,
  color: "#423B38",
  shape: "circle",
  backgroundColor: "#020300",
});

fs.writeFileSync("./map.svg", svgMap);

// // So you do this first step only once, when developing your app
// const getMapJSON = require("dotted-map").getMapJSON;

// // This function accepts the same arguments as DottedMap in the example above.
// const mapJsonString = getMapJSON({ height: 60, grid: "diagonal" });
// console.log(mapJsonString);
