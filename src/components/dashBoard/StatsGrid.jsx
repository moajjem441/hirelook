import React from "react";
import { Card } from "@heroui/react";

// Reusable Card Component
const StatsCard = ({ label, value, icon: Icon }) => (
  <Card className="bg-[#141414] border border-white/10 shadow-none rounded-xl p-4">
    <div className="flex flex-col gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#1f1f1f] flex items-center justify-center text-gray-400">
        <Icon size={20} />
      </div>

      <div>
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <h3 className="text-white text-3xl font-semibold">{value}</h3>
      </div>
    </div>
  </Card>
);

// Main Reusable Grid
const StatsGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <StatsCard
          key={index}
          label={item.label}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default StatsGrid;