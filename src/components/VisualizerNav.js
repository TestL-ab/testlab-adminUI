const VisualizerNav = ( {currentDisplay, setCurrentDisplay, displays } ) => {
  return (
    <div className="visualizer-nav">
    {
      displays.map((display, idx) => {
        if (display === currentDisplay) {
          return (
            <a key={idx}
              className="disabled"
              onClick={(event) => event.preventDefault()}>
                {display}
            </a>);
        } else {

          return (
            <a key={idx}
              onClick={((event) => {
                event.preventDefault();
                setCurrentDisplay(display);
              })}>
            {display}
          </a>);
        }
      })
    }
    </div>)
};

export default VisualizerNav;