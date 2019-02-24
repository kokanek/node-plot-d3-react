import React, { Component } from 'react';
import logo from './logo.svg';
import { Graph } from 'react-d3-graph';
import './App.css';
import seedData from './seed.js';
import myConfig from './chartConfig.js';
import colorConfig from './colorConfig.js';
import sizeConfig from './sizeConfig.js';

const parseNodeSize = function(cpu, ram, disk) {
  let scaledSize = sizeConfig.MAX_NODE_SIZE*cpu*ram*disk/(sizeConfig.MAX_CPU_CORES*sizeConfig.MAX_DISK*sizeConfig.MAX_RAM);

  return scaledSize;
}

const parseNodeColor = function(totalMemory, usedMemory) {
  let usage = usedMemory/totalMemory*10;

  if (usage > 0 && usage <= 3) {
    return colorConfig.green;
  } else if (usage > 3 && usage <= 5) {
    return colorConfig.yellow;
  } else if (usage > 5 && usage <= 7) {
    return colorConfig.amber;
  } else if (usage > 7 && usage <= 9) {
    return colorConfig.orange;
  } else if (usage > 9 && usage <= 10) {
    return colorConfig.red;
  }

  return colorConfig.grey;
}

const parseNodes = function(origNodes) {
  let parsedNodes = origNodes.map(node => ({
    id: node.id,
    color: parseNodeColor(node.totalMemory, node.usedMemory),
    size: parseNodeSize(node.cpuCores, node.totalMemory, node.diskSpace)
  }))

  return parsedNodes;
}

const parseLinks = function(origLinks) {

}

// graph payload (with minimalist structure)
const parseData = function(seedData) {
  let parsedNodes = parseNodes(seedData.nodes);
  let parsedLinks = seedData.links;

  return {
    nodes: parsedNodes,
    links: parsedLinks
  }
}

// graph event callbacks
const onClickGraph = function() {
  console.log(`Clicked the graph background`);
};

const onClickNode = function(nodeId) {
  console.log(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  console.log(`Clicked link between ${source} and ${target}`);
};

class App extends Component {
  render() {
    let parsedData = parseData(seedData);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={parsedData}
          config={myConfig}
          onClickNode={onClickNode}
          onClickGraph={onClickGraph}
          onClickLink={onClickLink}
        />
      </div>
    );
  }
}

export default App;
