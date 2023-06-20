//---------IMPORTS------------\

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { itemOrigin } from "../components/0-independent/board_related/ItemBase/ItemBase";

//----------PRE---------------\

//__p-types_________

interface ContextValueType {
  itemControl: { state: boolean; setState: Dispatch<SetStateAction<boolean>> };
  closingMode: { state: boolean; setState: Dispatch<SetStateAction<boolean>> };
  itemSelection: {
    list: itemOrigin[];
    update: Dispatch<SetStateAction<itemOrigin[]>>;
  };
}

//__p-others________

const ItemControlContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const ItemControlContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const [controlState, setControlState] = useState(false);
  const [activeClosing, setActiveClosing] = useState(false);
  const [selectionArray, updateSelectionArray] = useState<itemOrigin[]>([]);

  //__c-structure____

  const ItemControlContextValues: ContextValueType = {
    closingMode: { state: activeClosing, setState: setActiveClosing },
    itemControl: { state: controlState, setState: setControlState },
    itemSelection: { list: selectionArray, update: updateSelectionArray },
  };

  return (
    <ItemControlContextLocal.Provider value={ItemControlContextValues}>
      {children}
    </ItemControlContextLocal.Provider>
  );
};

//---------EXPORTS------------\

export default ItemControlContextProvider;
export const ItemControlContext = function () {
  return useContext(ItemControlContextLocal);
};
