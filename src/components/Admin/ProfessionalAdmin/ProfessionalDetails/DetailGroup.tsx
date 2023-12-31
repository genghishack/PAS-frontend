import React from 'react';
import {DetailItemType, ItemGroup} from "../ProfessionalDetails";
import DetailItem from "./DetailItem";

interface IDetailGroup {
  label: string;
  items: ItemGroup;
}

const DetailGroup = (props: IDetailGroup) => {
  const {label, items} = props;

  return (
    <div className={`DetailGroup ${label}`}>
      <div className="groupLabel">{label}</div>
      <div className="itemGroup">
        {items.map((item: DetailItemType) => (
          <DetailItem label={item.label}
                      value={item.value}/>
        ))}
      </div>
    </div>
  )
}

export default DetailGroup;
