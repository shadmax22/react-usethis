import { useEffect } from "react";
import { useThis } from "../";
import { set } from "../";

export default function App() {
  let NewState = useThis("HelloWorld");

  let { This } = NewState;

  let Unkown1 = "key1";
  let Unkown2 = "key2";
  let Unkown3 = 0;
  let Unkown4 = 1;

  let newUnknown = "from";

  let Unkown5 = {
    [newUnknown]: 56,
  };
  useEffect(() => {
    This = NewState.update({
      g: {},
      gr: {},
    });

    let [T1, T2] = [0, 0];

    This = NewState.upsert({
      g: {
        gr: {
          blue: { g: { green: set(12) } },
        },
      },
    });

    // for (let i = 0; i < 1000; i++) {
    //   const startTime = performance.now();

    //   if (i % 2 == 0) {
    //     This = NewState.update({
    //       ...This,
    //       gr: {
    //         ...This.gr,
    //         grk: {
    //           ...This.gr.grk,
    //           glkL: {
    //             ...This.gr.grk.glkL,
    //             value: 2,
    //           },
    //         },
    //       },
    //     });
    //   } else {
    //     This = NewState.update({
    //       ...This,
    //       g: "hoho",
    //     });
    //   }

    //   const endTime = performance.now();

    //   const startTime2 = performance.now();
    //   if (i % 2 == 0) {
    //     This = NewState.upsert({
    //       gr: {
    //         grk: {
    //           glkL: {
    //             value: set(2),
    //           },
    //         },
    //       },
    //     });
    //   } else {
    //     This = NewState.upsert({
    //       g: set("hoho"),
    //     });
    //   }
    //   const endTime2 = performance.now();

    //   const timeElapsed = endTime - startTime;
    //   const timeElapsed2 = endTime2 - startTime2;

    //   T1 += timeElapsed;
    //   T2 += timeElapsed2;
    // }

    console.log("1: " + T1 + ", 2:" + T2);
  }, []);

  return (
    <>
      <h2>HEEHE</h2>
    </>
  );
}
