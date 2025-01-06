import type { InjectionKey, Ref, SVGAttributes } from "vue";
const providerKey = Symbol("HealthiconsProvider") as InjectionKey<
  Ref<SVGAttributes>
>;
export default providerKey;
