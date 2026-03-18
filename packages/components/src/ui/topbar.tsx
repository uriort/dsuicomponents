import { SearchInput } from "./input";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex h-[54px] items-center border-b border-ds-border bg-white px-6">
      <div className="w-full max-w-[270px]">
        <SearchInput placeholder="Search" className="h-9 rounded-lg bg-slate-50 shadow-none" />
      </div>
    </header>
  );
}
