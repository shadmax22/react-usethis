import { useThis } from "../../../src/useThis/useThis";
export type test_instance_view_main_schema = {
  name: string;
  name2?: string;
  utwp?: string;
  utwpFun?: () => void;
  fun?: () => void;
  upsertAt?: string;
  upsertAtFun?: () => {};
  val?: {
    val2?: string;
  };
};

export const test_state = new useThis<test_instance_view_main_schema>()
  .default({ name: "Doe" })
  .create();
