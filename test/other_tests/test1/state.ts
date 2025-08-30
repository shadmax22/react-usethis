import { useThis } from "../../../index";

type VFormState = {
  showing_fields: {
    req: string[];
    optional: string[];
    shown_yet: Record<number, string[]>;
  };
};

export const VFormStateInit = () =>
  useThis<VFormState>("mainFormState", {
    showing_fields: {
      req: [],
      optional: [],
      shown_yet: {},
    },
  });
export const useVFormState = () => useThis<VFormState>("mainFormState");
