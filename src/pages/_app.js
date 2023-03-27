import "@/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react"; // - npm Docs https://www.npmjs.com/package/@storyblok/react

//Component map to access and store all Storyblok components that will be used throughout the app
// *** ADD BLOK COMPONENTS HERE ***
const components = {};

storyblokInit({
  //Create .env.development/production file
  accessToken: process.env.STORYBLOCK_ACCESS_TOKEN,

  //Specifying using the Storyblok API client; can use custom API plugin by specifying our own API function in use parameter.
  use: [apiPlugin],

  //apiOptions must be set if the Storyblok Space was created with US as the server location, otherwise it doesn't need it
  apiOptions: { region: "us" },
  components,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
