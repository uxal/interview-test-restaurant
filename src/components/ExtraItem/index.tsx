/**
 * This is the "tags" extra item components shown on the main menu page under category/product
 */
import React, { FC, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Close";
import StoreContext from "../../api/storeContext";
import { Wrapper } from "./styled";

export interface IExtraItemProps {
  extraItemId: string;
  onRemove?(e: any): void;
}

const ExtraItem: FC<IExtraItemProps> = ({ extraItemId, onRemove }) => {
  const { data } = useContext(StoreContext);
  if (!data) {
    return null;
  }

  const extraItem = data.choicesItems.find(item => item.id === extraItemId);
  if (!extraItem) {
    return null;
  }

  return (
    <Wrapper>
      <span>{extraItem.name}</span>
      <IconButton
        aria-label="delete"
        color="secondary"
        size="small"
        onClick={onRemove}
      >
        <DeleteIcon />
      </IconButton>
    </Wrapper>
  );
};

export default ExtraItem;
