import { ScrollViewStyleReset } from "expo-router/html";
import { PropsWithChildren } from "react";

import { Colors } from "@/constants/theme";

const globalStyles = `
html, body {
  background-color: ${Colors.background};
  color: ${Colors.text};
  color-scheme: dark;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
[role="button"], [role="link"] {
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease, border-color 160ms ease, opacity 160ms ease;
}
:focus {
  outline: none;
}
:focus-visible {
  outline: 2px solid ${Colors.primary} !important;
  outline-offset: 2px;
}
::selection {
  background-color: ${Colors.primaryMuted};
}
@media (prefers-reduced-motion: reduce) {
  [role="button"], [role="link"] {
    transition: none;
  }
}
`;

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content={Colors.background} />
        <meta
          name="description"
          content="Browse recipes by category, explore ingredients and steps, and save your favorite meals."
        />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
