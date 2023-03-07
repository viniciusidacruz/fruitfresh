import { useCMS } from "@hooks/index";

export function Home() {
  const {
    pages: { home },
  } = useCMS();

  return <h1>{home.display_title[0].text}</h1>;
}
