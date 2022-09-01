import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const expectedMsg = "Hello Vitest";
    const wrapper = mount(HelloWorld, { props: { msg: expectedMsg } });
    expect(wrapper.text()).toContain(`${expectedMsg} 10`);
  });
});
