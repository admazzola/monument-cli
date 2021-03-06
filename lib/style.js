var style;

// this is a wrapped function
(function () {

  // the variables declared here will not be scoped anywhere and will only be accessible in this wrapped function
  var defaultColor = "white",
    highlightColor = "#FEFFD5";

  style = {
    navitem: {
      base: {
        font: '18pt',
        align: 'left',
        strokeThickness: 4
      },
      default: {
        fill: defaultColor,
        stroke: 'rgba(0,0,0,0)'
      },
      hover: {
        fill: highlightColor,
        stroke: 'rgba(200,200,200,0.5)'
      },
      inverse: {
        fill: 'black',
        stroke: 'black'
      },
    }
  };

  for (var key in style.navitem) {
    if (key !== "base") {
      Object.assign(style.navitem[key], style.navitem.base)
    }
  }

  //Object.assign(style.navitem.hover, style.navitem.base);
  //Object.assign(style.navitem.default, style.navitem.base);

})();
