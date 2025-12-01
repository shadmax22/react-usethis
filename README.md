# react-usethis

Optimized Redux state management utility for React applications. `react-usethis` provides a simple and flexible way to manage global and local state with mutable updates, similar to Immer, but with a lightweight API.

## Installation

```bash
npm install react-usethis
```

## Features

- **Simple API**: Easy-to-use hooks and class-based instances.
- **Global State**: Share state across components using unique keys.
- **Mutable Updates**: Update state intuitively with mutable callbacks (powered by `js-upsert`).
- **Performance**: Optimized for efficient re-renders.
- **Flexible**: Supports standalone instances with a builder pattern.
- **Side Effects**: Built-in support for handling side effects with `onEffect`.
- **Utilities**: Built-in `set` utilities for common operations like generating UUIDs, random numbers, and dates.

## Usage

### 1. Instance State (Builder Pattern)

Create a standalone state instance using the builder pattern. This is the recommended approach for defining stores in separate files.

**store.ts**

```tsx
import { useThis } from "react-usethis";

type StoreSchema = {
  route: string;
  data: string[];
};

// Create a singleton instance
export const MainState = new useThis<StoreSchema>()
  .default({ route: "home", data: [] })
  .stateName("main_state")
  .create();
```

#### Hook Usage (In Components)

When you execute the instance as a function within a React component, it behaves as a **hook**. It subscribes the component to state updates, triggering re-renders when data changes.

**Component.tsx**

```tsx
import React from "react";
import { MainState } from "./store";

export default function App() {
  // Execute as a function to use as a hook
  const state = MainState();

  return (
    <div>
      <h1>Route: {state.get().route}</h1>
      <button onClick={() => state.upsert((s) => (s.route = "dashboard"))}>
        Go to Dashboard
      </button>
    </div>
  );
}
```

#### Non-Hook Usage (Static Access)

You can access the state instance directly via the `.use` property. This is useful for accessing state in loops, callbacks, or outside of React components (e.g., in utility functions) where you don't want to trigger re-renders or violate hook rules.

```tsx
import { MainState } from "./store";

function logCurrentRoute() {
  // Access state directly without subscribing
  const currentRoute = MainState.use.get().route;
  console.log("Current Route:", currentRoute);
}

function updateRouteExternally() {
  MainState.use.upsert((s) => (s.route = "settings"));
}
```

### 2. Handling Side Effects

You can define side effects that run when dependencies change. The `resolver` function can be used to clear or delete the state when the effect is resolved.

```tsx
import { useThis } from "react-usethis";

const MainState = new useThis()
  .default({ count: 0 })
  .stateName("main_state")
  .create();

const EffectState = new useThis()
  .default({ status: "idle" })
  .stateName("effect_state")
  .onEffect(
    ({ resolver, state }) => {
      // Monitor state changes
      const mainCount = state(MainState).count;

      if (mainCount > 5) {
        console.log("Count is greater than 5! Clearing state.");
        resolver(); // Clears/Deletes the state
      }
    },
    [MainState] // Dependencies
  )
  .create();
```

## API Reference

### `new useThis<T>()` (Builder)

Starts the builder for creating a state instance.

#### Builder Methods:

- **`.default(value: T)`**: Sets the initial default value.
- **`.stateName(name: string)`**: Sets the unique key for the state.
- **`.onEffect(callback, dependencies)`**: Registers a side effect.
  - `callback`: `({ resolver, state }) => void`
  - `dependencies`: Array of state instances or keys.
  - **Note**: Calling `resolver()` inside the callback will resolve and clear the state.
- **`.create()`**: Finalizes and returns the runnable instance.

### State Methods

The state object returned by the created instance (or `.use`) exposes:

#### `get()`

Returns the current reactive state object. Accessing properties tracks dependencies.

- **Note**: If functions are stored in the state, `get()` will return them as encrypted keys/placeholders. Use `fetch()` if you need to execute them.

```tsx
const value = state.get().someProperty;
```

#### `fetch()`

Returns the current state object with **executable functions** restored.

- **Note**: This is slightly slower than `get()` due to the decryption/restoration process. Use this when you need to call functions stored in the state.

```tsx
const value = state.fetch().someProperty;
state.fetch().myStoredFunction();
```

#### `upsert(callback: (state: T) => void)`

Updates the state using a mutable callback.

```tsx
state.upsert((s) => {
  s.count += 1;
  s.user.name = "John";
});
```

#### `update(newState: Partial<T> | (prev: T) => Partial<T>)`

Merges the provided object into the current state.

```tsx
state.update({ count: 10 });
```

#### `append(callback: (prev: T) => Partial<T>)`

Similar to update, used for appending/merging data.

#### `upsert.at(...path, value | callback)`

Updates a value at a specific path. You can pass multiple arguments for the path.

**Setting a value:**

```tsx
state.upsert.at("user", "profile", 25);
```

**Updating with previous value:**

```tsx
state.upsert.at("user", "profile", (prev) => prev + 1);
```

#### `upsert.funAt(path: string, callback: Function)`

Stores a function at a specific path in the state.

```tsx
state.upsert.funAt("actions.submit", () => console.log("Submitted"));
```

### Utilities (`set`)

The `set` object provides a collection of utility functions for common tasks, along with the ability to store functions in state.

#### Function Storage (`set.fun`)

Redux cannot natively store non-serializable data like functions. `react-usethis` handles this by safely encrypting and storing them.

**Storing a function:**

```tsx
MainState.use.upsert((t) => {
  t.callback_fun = set.fun(() => {
    console.log("This function is stored in redux");
  });
});
```

**Executing a stored function:**

```tsx
const state = MainState(); // or MainState.use
const data = state.fetch(); // Must use fetch() to get executable functions
data.callback_fun();
```

#### Date & Time

- **`set.currentTime()`**: Returns current time as ISO string.
- **`set.currentDate()`**: Returns current date (YYYY-MM-DD).
- **`set.currentDay()`**: Returns current day of the week (0-6).
- **`set.currentHour()`**: Returns current hour.
- **`set.currentMinute()`**: Returns current minute.
- **`set.currentSecond()`**: Returns current second.
- **`set.timestamp()`**: Returns current timestamp (ms).

#### Random Generators

- **`set.uuid()`**: Generates a UUID v4.
- **`set.randomInt(min, max)`**: Returns a random integer between min and max.
- **`set.randomFloat(min, max)`**: Returns a random float between min and max.
- **`set.randomBoolean()`**: Returns a random boolean.
- **`set.randomHexColor()`**: Returns a random hex color code.
- **`set.choice(array)`**: Returns a random element from an array.

## License

ISC
