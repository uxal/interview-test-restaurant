/** This component renders each extra row from the details page */
import React, { FC } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import numeral from "numeral";
import { Wrapper, Price } from "./styled";

export interface IDetailsExtraItem {
  id: string;
  type: "crust" | "topping";
  name: string;
  selected: boolean;
  price: number;
  onChange(selected: boolean): void;
}

const DetailsExtraItem: FC<IDetailsExtraItem> = ({
  type,
  id,
  name,
  selected,
  price,
  onChange
}) => {
  return (
    <Wrapper>
      {type === "topping" ? (
        <FormControlLabel
          control={
            <Checkbox
              checked={selected}
              onChange={() => {
                onChange(!selected);
              }}
              value={id}
            />
          }
          label={name}
        />
      ) : (
        <FormControlLabel
          value={id}
          control={<Radio />}
          label={name}
          labelPlacement="end"
        />
      )}
      {price > 0 && <Price>+ {numeral(price).format("0.00")} RON</Price>}
    </Wrapper>
  );
};

export default DetailsExtraItem;
