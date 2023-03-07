import Graph from './Graph';
import ClickPercentageChart from './ClickPercentageChart'

const DataDisplayToggle = ({ clickData, currentDisplay, displays }) => {
  switch(currentDisplay) {
    case displays[0]:
      return <Graph clickData={clickData} />
    case displays[1]:
      return <ClickPercentageChart clickData={clickData} />
  }
};

export default DataDisplayToggle;
