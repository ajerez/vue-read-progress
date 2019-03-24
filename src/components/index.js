import VueReadProgress from "@/components/VueReadProgress";

const install = function(Vue) {
  Vue.component(VueReadProgress.name, VueReadProgress);
};

if (typeof window !== "undefined" && window.Vue) {
  window.VueReadProgress = VueReadProgress;
  window.Vue.use(VueReadProgress);
}

VueReadProgress.install = install;

export default VueReadProgress;
export { VueReadProgress };
