import React from "react";
import { openModal } from "@mantine/modals";

// For slice the data acording to the pagination and perpage drop down change
export const dataSlice = ({ data, page, total }) => {
  const datas = data.slice((page - 1) * total, (page - 1) * total + total);
  return datas;
};

// For filter the data for select only value and label
export const selectFilter = async ({ data }) => {
  var clean = await data.map((data) => ({
    value: data.value.toString(),
    label: data.label.toString(),
  }));
  return clean;
};

export const imageModal = async ({ data, title }) => {
  return openModal({
    title: title,
    children: (
      <>
        <img src={data} alt="" width="100%" />
      </>
    ),
  });
};
