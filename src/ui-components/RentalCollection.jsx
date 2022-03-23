/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Rental } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardB from "./CardB";
import { Collection } from "@aws-amplify/ui-react";
export default function RentalCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.price(SortDirection.ASCENDING) };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Rental,
          pagination: itemsPagination,
        }).items;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "RentalCollection")}
    >
      {(item, index) => (
        <CardB
          rental={item}
          height="auto"
          margin="0 5px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardB>
      )}
    </Collection>
  );
}
