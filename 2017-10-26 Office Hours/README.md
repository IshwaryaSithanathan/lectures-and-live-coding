# 2017-10-26 Office Hours

## Running the code

1. Run `yarn` or `npm i` from the `/simple-app/` directory.
2. Run `yarn start` or `npm start`

## Notes

Declarative - "my address 123 sesame street." or "please do X" (instead of "first do a, then b, then c, then d")
declaring what I want, what I want the thing to do.
abstract, simpler sometimes

Imperative - HOW to do the thing.
"in the weeds"

Functional programming - paradigm. structuring things as a combination of functions. "compose" functions together. "pure" functional programming does not allow "side effects". Outputs are predictable given inputs. Like: `y = 2x + 17`

Today:

1. Build a simple react app
  - Hello world
  - ES6+ syntax you might not have seen
    - `class`
    - `import`
  - What's going on under the hood: webpack, babel, watchman, web server.
  - Adding state to a component.
    - must update state using `this.setState`
2. How to set up a react app alongside an API
  - https://daveceddia.com/create-react-app-express-production/
3. React design decisions. When to do redux, local state, etc

## Q&A:
- In React why do we need to use `.bind(this)` when we're assigning functions to click events (or other events)?

Answer: Oftentimes you will want `this` to refer to your component itself. If you've defined a function using normal function syntax, `this` will actually refer to the function itself, not the component. By assigning an event handler like this: `this.clickFunction.bind(this)` you're setting the `this` for that function to be the component object.

The other common pattern with this is to bind all your functions in the constructor like this: `this.clickFunction = this.clickFunction.bind(this);`

https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers

- In cases when you need to update state based on a previous state, you can pass setState a function that takes the previous state and your component's props:

```javascript
this.setState((prevState, props) => {
  return {counter: prevState.counter + props.step};
});
```
`setState()` does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall.

`prevState` is a reference to the previous state. It should not be directly mutated. Instead, changes should be represented by building a new object based on the input from prevState and props. Both prevState and props received by the updater function are guaranteed to be up-to-date. The output of the updater is shallowly merged with prevState.

- How to choose whether to use component state, redux, mobx, etc? Justin says: stick with component state a) while you're learning, and b) while your apps have relatively simple state needs. Use Redux if your app clearly needs it (see the article below) and/or if you're really keen on learning it.

https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
