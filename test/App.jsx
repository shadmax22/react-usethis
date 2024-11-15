import { useEffect, useState } from "react";
import { setFun, useThis } from "../index";
import { set } from "../index";
import "./index.css";

export default function App() {
  let state = useThis("test_state", { name: "John" });
  return (
    <>
      <h1>Test Cases</h1>
      <div className="test-cases">
        <h1>Default Value</h1>

        <h2 data-testid={"default-value"}>{state?.get()?.name}</h2>
        <h2 data-testid={"default-value-replace-check"}>
          <SecondComponent></SecondComponent>
        </h2>
        <h2 data-testid={"append-test"}>{state?.get()?.name2}</h2>

        <button
          data-testid={"default-value-replacer"}
          onClick={() => {
            state.upsert({
              name: set("Max"),
            });
          }}
        >
          CLICK ME
        </button>
        <button
          data-testid={"function-setter"}
          onClick={() => {
            state.upsert({
              fun: set(
                setFun(() => {
                  state.upsert({
                    name: set("Denver"),
                  });
                })
              ),
            });
          }}
        >
          CLICK ME
        </button>
        <button data-testid={"function-runner"} onClick={state.fetch()?.fun}>
          CLICK ME
        </button>
        <button
          data-testid={"updater"}
          onClick={() => {
            state.update({
              name: "Hopper",
            });
          }}
        >
          CLICK ME
        </button>
        <button
          data-testid={"updater-with-pv-value"}
          onClick={() => {
            state.update((pv) => ({
              name: pv?.name + "Hopper",
            }));
          }}
        >
          CLICK ME
        </button>
        <button
          data-testid={"appender"}
          onClick={() => {
            state.append((pv) => ({
              name2: "BOB",
            }));
          }}
        >
          CLICK ME
        </button>
        <button
          data-testid={"appender-with-pvvalue"}
          onClick={() => {
            state.append((pv) => ({
              name2: pv?.name2 + "BOB",
            }));
          }}
        >
          CLICK ME
        </button>
      </div>

      <UseEffectDiff />

      <h1 data-testid={"utwp-value"} className="USETHIS WITHOUT UTWP">
        {state?.get()?.utwp}
      </h1>
      <h1 data-testid={"utwp-value-2"} className="USETHIS WITHOUT UTWP">
        {state?.get()?.utwp}
      </h1>

      <button
        data-testid={"upserter-utwp-value"}
        onClick={() => {
          let x = useThis("test_state");

          x.upsert(set.append({ utwp: "John" }));
        }}
      >
        UTWP UPSERT
      </button>
      <button
        data-testid={"upserter-utwp-value-fun"}
        onClick={() => {
          let x = useThis("test_state");

          x.upsert(
            set.append({
              utwpFun: set.fun(() => {
                x.upsert(set.append({ utwp: "Johnx" }));
              }),
            })
          );
        }}
      >
        UTWP UPSERT FUN
      </button>
      <button
        data-testid={"upserter-utwp-value-fun-verify"}
        onClick={state.fetch().utwpFun}
      >
        UTWP UPSERT FUN VERIFY
      </button>
    </>
  );
}

function SecondComponent() {
  let state = useThis("test_state", { name: "Doe" });

  return <>{state?.get()?.name}</>;
}

function UseEffectDiff() {
  const [rendered, setRedered] = useState(0);

  const data = useThis("test_state");
  const [data2, setData2] = useState({});
  useEffect(() => {
    if (rendered > 5 || rendered == -1) {
      return setRedered(-1);
    }
    // setData2({
    //   val: {
    //     val2: set("Success"),
    //   },
    // });

    data.upsert({
      val: {
        val2: set("geeen"),
      },
    });

    setRedered((r) => (r ?? 0) + 1);
  }, [data?.get().val]);

  return <h2 data-testid={"total-rendered"}>{rendered}</h2>;
}
