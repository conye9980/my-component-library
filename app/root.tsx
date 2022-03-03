import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { LinksFunction, LoaderFunction } from "remix";
import type { MetaFunction } from "remix";
import tailwindUrl from "./styles/tailwind.css";
import NavBar from "./components/molecules/NavBar/NavBar";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <NavBar />
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
