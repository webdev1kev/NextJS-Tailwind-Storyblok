import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

//If using Google Fonts in NEXTJS 13^ you can import fonts as such
// https://nextjs.org/docs/basic-features/font-optimization
import { Jost } from "next/font/google";

const jost = Jost({
  weight,
});

export default function Header({ blok }) {
  return <div className="header">This is a header!</div>;
}
