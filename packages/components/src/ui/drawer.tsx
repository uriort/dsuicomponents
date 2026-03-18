import { X, Upload, Users } from "lucide-react";
import { Card, SectionTitle } from "./card";
import { Button } from "./button";
import { Input, SearchInput } from "./input";

export function TeamCreationDrawer() {
  return (
    <div className="grid overflow-hidden rounded-[20px] border border-ds-border bg-white shadow-panel lg:grid-cols-[1.08fr_0.92fr]">
      <div className="border-r border-ds-border bg-ds-canvas/60 p-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-ds-primary">Backdrop preview</p>
          <Card className="overflow-hidden">
            <div className="border-b border-ds-border bg-white px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Teams</h3>
                <div className="flex gap-2">
                  <Button variant="secondary">Download team scores</Button>
                  <Button variant="secondary">New team</Button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-lg bg-slate-100 p-1">
                  <span className="rounded-ds bg-white px-3 py-1.5 text-sm font-medium shadow-panel">All</span>
                  <span className="px-3 py-1.5 text-sm text-ds-textMuted">Custom</span>
                  <span className="px-3 py-1.5 text-sm text-ds-textMuted">System</span>
                </div>
                <div className="w-[270px]">
                  <SearchInput placeholder="Search" />
                </div>
              </div>
            </div>
            <div className="h-[320px] bg-white/80" />
          </Card>
        </div>
      </div>
      <div className="min-h-[640px] bg-white">
        <div className="flex items-center gap-4 border-b border-ds-border px-5 py-4">
          <button type="button" className="grid size-8 place-items-center rounded-ds text-ds-textMuted hover:bg-slate-100">
            <X className="size-4" />
          </button>
          <h3 className="text-lg font-semibold">New team</h3>
        </div>
        <div className="grid grid-cols-4 gap-2 px-5 pt-4">
          <div className="h-1 rounded-pill bg-ds-primary" />
          <div className="h-1 rounded-pill bg-slate-200" />
          <div className="h-1 rounded-pill bg-slate-200" />
          <div className="h-1 rounded-pill bg-slate-200" />
        </div>
        <div className="space-y-6 px-5 py-8">
          <SectionTitle
            title="How would you like to add a team?"
            description="Select method that best fits your needs."
          />
          <div className="grid gap-3">
            <Card className="flex items-center gap-4 p-4">
              <div className="grid size-16 place-items-center rounded-lg border border-ds-border bg-white text-ds-primary">
                <Users className="size-7" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold">Add team manually</p>
                <p className="text-sm text-ds-textMuted">Select users to create new team.</p>
              </div>
            </Card>
            <Card className="flex items-center gap-4 p-4">
              <div className="grid size-16 place-items-center rounded-lg border border-ds-border bg-white text-ds-primary">
                <Upload className="size-7" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold">Add teams with file upload</p>
                <p className="text-sm text-ds-textMuted">Upload a file to add many teams.</p>
              </div>
            </Card>
          </div>
          <div className="space-y-4 border-t border-ds-border pt-6">
            <SectionTitle
              title="Name the team and select a manager"
              description="Search users to add as the team manager. This action can be updated later as needed."
            />
            <Input label="Team name" placeholder="Team name" />
            <div className="grid gap-2">
              <span className="text-sm font-medium text-ds-ink">Team manager (optional)</span>
              <SearchInput placeholder="Search users" />
            </div>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-ds-border px-5 py-5">
          <Button variant="secondary" className="min-w-52">Previous</Button>
          <Button variant="secondary" className="min-w-52 bg-slate-200 text-white hover:bg-slate-200" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
