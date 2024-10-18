import { ROUTES } from "@/utils/routes";
import { ThemeButton } from "./ThemeButton";

export const Header = () => (
  <header className="flex justify-between items-center py-2">
    <a href={ROUTES.root}>
      <img alt="icon" src="/logo.svg" className="w-28" />
    </a>
    <ThemeButton />
  </header>
);
