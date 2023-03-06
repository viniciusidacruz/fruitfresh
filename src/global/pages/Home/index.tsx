import { useCMS } from "@hooks/index";

import { AvatarComponent } from "@/global/components";

export function Home() {
  const {
    pages: { home },
  } = useCMS();

  return <h1>{home.display_title[0].text}</h1>;
}
