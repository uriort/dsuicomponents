import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Area, AreaChart } from "recharts";
import { Card } from "./card";

const areaData = [
  { label: "Mar 13", value: 3 },
  { label: "Mar 14", value: 4 },
  { label: "Mar 15", value: 5 },
  { label: "Mar 16", value: 6 },
  { label: "Mar 17", value: 7 },
  { label: "Mar 18", value: 8 },
];

const barData = [
  { name: "Core Drivers", value: 1.2 },
  { name: "Core Logic", value: 2.0 },
  { name: "Core Values", value: 1.0 },
];

export function ChartGrid() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <Card className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-ds-ink">Registrations Over Time</h3>
          <span className="text-ds-primary">~</span>
        </div>
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="ds-area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f00056" stopOpacity={0.26} />
                  <stop offset="100%" stopColor="#f00056" stopOpacity={0.04} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#eceff5" />
              <XAxis axisLine={false} tickLine={false} dataKey="label" tick={{ fill: "#98a2b3", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#98a2b3", fontSize: 12 }} />
              <Area type="monotone" dataKey="value" stroke="#ff0a63" strokeWidth={3} fill="url(#ds-area)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-ds-ink">Completed Assessments by Library</h3>
          <span className="text-ds-primary">≣</span>
        </div>
        <div className="h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} layout="vertical" barSize={18} margin={{ left: 20 }}>
              <CartesianGrid horizontal={false} stroke="#eceff5" />
              <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: "#98a2b3", fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#667085", fontSize: 12 }}
                width={100}
              />
              <Bar dataKey="value" fill="#f00056" radius={[6, 6, 6, 6]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
