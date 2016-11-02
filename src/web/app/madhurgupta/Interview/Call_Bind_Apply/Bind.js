let myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log("Parse Called");
  },
  render() {
    this.asyncGet(
      function () {
        this.parse();
      }.bind(this)
    );
  },
};

myObj.render();

// Parse Called
