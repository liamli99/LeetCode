const obj = {
  name: "Amy",
  outer1: {
    inner1: () => {
      return this;
    }
  },
  outer2: function() {
    const inner2 = () => {
      return this
    };
    return inner2(); 
  }
};

console.log(obj.outer1.inner1());
console.log(obj.outer2())



