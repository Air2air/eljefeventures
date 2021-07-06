import React from "react";
import { PieChart } from "./../components/charts/pie";

const data1 = [
  {
    id: "css",
    label: "css",
    value: 313,
    color: "hsl(174, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 375,
    color: "hsl(207, 70%, 50%)",
  },
  {
    id: "hack",
    label: "hack",
    value: 327,
    color: "hsl(115, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 308,
    color: "hsl(127, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 257,
    color: "hsl(164, 70%, 50%)",
  },
];

const AllocationPage = () => {
  return (
    <>
      <PieChart title="Allocations" data={data1} updatedTime="12" />
    </>
  );
};

export default AllocationPage;
