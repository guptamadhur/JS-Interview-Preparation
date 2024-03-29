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
  render2() {
    this.asyncGet(() => {
      this.parse();
    }
    );
  },
};

myObj.render();
myObj.render2();

// Parse Called
