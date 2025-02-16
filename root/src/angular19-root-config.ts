import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* webpackIgnore: true */ name);
  },
});

registerApplication({
  name: "layout",
  app: () =>
    System.import("//localhost:4200/main.js").then((module: any) => module),
  activeWhen: (location) => location.pathname.startsWith("/"),
});

registerApplication({
  name: "profile",
  app: () =>
    System.import("//localhost:4201/main.js").then((module: any) => module),
  activeWhen: (location) => location.pathname.startsWith("/profile"),
});

registerApplication({
  name: "settings",
  app: () =>
    System.import("//localhost:4202/main.js").then((module: any) => module),
  activeWhen: (location) => location.pathname.startsWith("/settings"),
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
