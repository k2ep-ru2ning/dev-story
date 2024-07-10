import LogoLink from "./logo-link";
import ThemeSwitchDropdown from "./theme-switch-dropdown";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <LogoLink />
      <ThemeSwitchDropdown />
    </header>
  );
}
