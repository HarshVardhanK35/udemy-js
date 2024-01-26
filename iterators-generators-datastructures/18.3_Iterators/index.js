const app = {
  teams: ["red rangers", "astros"],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        if (nextIndex >= this.teams.length) {
          return { done: true };
        } else {
          const returnValue = { value: this.teams[nextIndex], done: false };
          nextIndex = nextIndex + 1
          return(returnValue)
        }
      },
    };
  },
};

const iterator = app[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for(const teams of app){
//   console.log(teams)
// }