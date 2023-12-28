import { SSTConfig } from "sst";
import { API } from "./stacks/DefaultStack";

export default {
  config(_input) {
    return {
      name: "test-sst",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
