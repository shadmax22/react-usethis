import { useEffect } from "react";
import { getThis, setFun, useThis } from "../index";
import { set } from "../index";

export default function DeepUpdaterTest() {
  let s = useThis("MY_STATE");

  let x = "pink";

  function testFunction() {
    const bigObject = {
      animal: {
        mammals: {
          carnivores: {
            examples: set(["Lion", "Tiger", "Leopard"]),
          },
          herbivores: {
            examples: set(["Elephant", "Giraffe", "Deer"]),
          },
          omnivores: {
            examples: set(() => () => alert("g")),
          },
        },
        birds: {
          predators: {
            examples: set(["Eagle", "Hawk", "Falcon"]),
          },
          scavengers: {
            examples: set(["Vulture", "Crow", "Hyena"]),
          },
          songbirds: {
            examples: set(["Nightingale", "Canary", "Robin"]),
          },
        },
      },
      plants: {
        flowering: {
          trees: {
            examples: set(["Cherry Blossom", "Maple", "Oak"]),
          },
          shrubs: {
            examples: set(["Rose", "Azalea", "Hibiscus"]),
          },
          herbs: {
            examples: set(["Basil", "Mint", "Oregano"]),
          },
        },
        nonFlowering: {
          ferns: {
            examples: set(["Boston Fern", "Staghorn Fern", "Maidenhair Fern"]),
          },
          mosses: {
            examples: set(["Sphagnum Moss", "Reindeer Moss", "Irish Moss"]),
          },
        },
      },
      vehicles: {
        land: {
          cars: {
            examples: set(["Sedan", "SUV", "Hatchback"]),
          },
          motorcycles: {
            examples: set(["Cruiser", "Sportbike", "Touring"]),
          },
          bicycles: {
            examples: set(["Mountain Bike", "Road Bike", "Hybrid"]),
          },
        },
        water: {
          boats: {
            examples: set(["Yacht", "Sailboat", "Fishing Boat"]),
          },
          submarines: {
            examples: set([
              "Nuclear Submarine",
              "Diesel Submarine",
              "Research Submarine",
            ]),
          },
        },
        air: {
          airplanes: {
            examples: set(["Jet", "Propeller Plane", "Glider"]),
          },
          helicopters: {
            examples: set([
              "Attack Helicopter",
              "Rescue Helicopter",
              "Transport Helicopter",
            ]),
          },
        },
      },
      technology: {
        computers: {
          hardware: {
            examples: set(["CPU", "GPU", "RAM"]),
          },
          software: {
            examples: set(["Operating System", "Application", "Utility"]),
          },
        },
        mobileDevices: {
          smartphones: {
            examples: set(["iPhone", "Android", "Windows Phone"]),
          },
          tablets: {
            examples: set(["iPad", "Samsung Galaxy Tab", "Amazon Fire"]),
          },
        },
        wearable: {
          watches: {
            examples: set(["Smartwatch", "Fitness Tracker", "Hybrid Watch"]),
          },
          glasses: {
            examples: set(["AR Glasses", "VR Headset", "Smart Glasses"]),
          },
        },
      },
    };

    console.time();
    s.upsert(bigObject);
    console.timeEnd();
  }

  function testFunction2() {
    s.upsert({
      g: set({
        green: "green",
        x: async (g) => {
          console.log(g);
          debugger;
          return g;
        },
      }),
    });
  }

  return (
    <>
      <button
        onClick={() => {
          s.fetch().g.x();
        }}
      >
        FETCH
      </button>
      <button onClick={testFunction2}>TEST FUNCTION 2</button>

      {/* {get()?.f?.g && (
        <>
          <button onClick={get().f.data}>GREEN</button>
        </>
      )} */}
    </>
  );
}
