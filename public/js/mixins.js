var BreakpointsMixin = {
  getDefaultProps: function() {
    return {
      breakpoints: {}
    }
  },

  getInitialState: function() {
    return {
      windowSize: window.innerWidth
    };
  },

  handleResize: function(e) {
    var nextState = {
      windowSize: window.innerWidth,
    };

    //Update state variables for each breakpoint
    //"True" if within breakpoint, "false" if outside
    for(i in this.props.breakpoints) {
      var name = this.props.breakpoints[i].name;
      var width = this.props.breakpoints[i].width;
      var type = this.props.breakpoints[i].type;

      if(type === "lt") {
        nextState[name] = (this.state.windowSize < width);
      } else if (type === "gt") {
        //I arbitrarily chose greater than to include equality
        nextState[name] = (this.state.windowSize >= width);
      }
    };

    //Fire enter/exit hooks if appropriate
    for(i in this.state) {
      //Entering a breakpoint, call enter handler if provided
      if(!this.state[i] && nextState[i] && this.props.breakpoints[i]) {
        if(typeof this.props.breakpoints[i].onEnter === "function") {
          this.props.breakpoints[i].onEnter();
        };
      };
      //Exiting a breakpoint, call exit handler if provided
      if(this.state[i] && !nextState[i] && this.props.breakpoints[i]) {
        if(typeof this.props.breakpoints[i].onExit === "function") {
          this.props.breakpoints[i].onExit();
        };
      };
    };

    this.setState(nextState);
  },

  addBreakpoint: function(newBreakpoint) {
    var nextState = {};

    var name = newBreakpoint.name;
    var width = newBreakpoint.width;
    var type = newBreakpoint.type;

    //Create and initialize state variable (bool) for new breakpoint
    //"True" if within breakpoint, "false" if outside
    if(type === "lt") {
      nextState[name] = (this.state.windowSize < width);
    } else if (type === "gt") {
      //I arbitrarily chose greater than to include equality
      nextState[name] = (this.state.windowSize >= width);
    }

    this.setState(nextState);
    this.props.breakpoints[newBreakpoint.name] = newBreakpoint;
  },

  componentWillMount: function() {
    //Example breakpoint
    //state.mobileWidth (boolean) will reflect whether the window width is inside or outside the breakpoint
    //onEnter will fire upon enterng the breakpoint, onExit will fire upon leaving
    this.addBreakpoint({
      name: 'mobileWidth',
      width: 768,
      type: 'lt',
      onEnter: function(){console.log("entering mobile")},
      onExit: function(){console.log("exiting mobile")}
    });
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  }
};

exports.BreakpointsMixin = BreakpointsMixin;