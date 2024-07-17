# React-UseThis

## Overview

**react-usethis** is a simplified and ready-to-use Redux state management tool, designed for better flow and easy integration.

## Installation

To install react-usethis, use the following npm command:

    npm i react-usethis

## Setup

Wrap your application with `ThisProvider` to provide `react-usethis` to your app:

    import { ThisProvider } from "react-usethis/thisProvider";

    <ThisProvider>
      <App />
    </ThisProvider>


Now `react-usethis` is ready to use inside `App`.

## Creating a New State

To create a new state, follow these steps:

1.  Import `useThis` and `set` from `react-usethis`:

    import { useThis, set } from "react-usethis";

2.  In `App.jsx`, create a new state:

    let MyState = useThis(STATE_NAME, INITIAL_OBJECT);

`useThis` will return an object with the following properties:

- `This`
- `get`
- `upsert`
- `append`

### Properties

- **This:** Returns the retrieved value from the state.
- **get():** Executes and fetches the state.
- **upsert({my_key: set(new_value)}):** Updates `my_key` with `new_value`.
- **update(new_obj):** Replaces state data with `new_obj`.

### Example Usage

    import { useThis, set } from "react-usethis";

    function App() {
      let MyState = useThis("myState", { count: 0 });

      const increment = () => {
        MyState.upsert({ count: set(MyState.This.count + 1) });
      };

      return (
        <div>
          <p>Count: {MyState.This.count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }


## Notes

`useThis()` can also be used outside of `ThisContext`, but when called outside, `useThis()` will return only `get()`, `upsert()`, and `update()`, not `This`.

### `set()` Usage in `upsert`

The `set()` function is used to define the updating value. It can also take an index for updating specific array elements.

#### Example

    let a = useThis("my_state", { data: [1, 2, 3, 4] });

    a.upsert({ data: set(20, 1) }); // This will update the value at index 1 from 2 to 20.


This will update the value at index 1 of `data` from 2 to 20.

For further information on the `upsert` function, read [js-upsert](https://www.npmjs.com/package/js-upsert).

## Conclusion

`react-usethis` is a powerful yet simple tool for managing state in your React application. By wrapping your application with `ThisProvider` and utilizing the `useThis` hook, you can easily manage and update your application's state with minimal effort.
