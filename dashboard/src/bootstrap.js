import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (ele) => {
  const app = createApp(Dashboard);
  app.mount(ele);
};

// If we are in dev and in isolation,
// call mount inmediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
