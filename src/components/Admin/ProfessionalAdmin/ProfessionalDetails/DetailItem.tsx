import React from 'react';

interface IDetailItem {
  label: string;
  value?: string;
}

const DetailItem = (props: IDetailItem) => {
  const {label, value} = props;

  return (
    <div className="DetailItem">
      <div className="itemLabel">
        {label}:
      </div>
      <div className="itemValue">
        {value}
      </div>
    </div>
  )
}

export default DetailItem;
