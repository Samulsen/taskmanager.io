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

//----------PRE---------------\

//__p-types_________

interface ContextValueType {
  ItemControl: { state: boolean; setState: Dispatch<SetStateAction<boolean>> };
}

//__p-others________

const ItemControlContextLocal = createContext<ContextValueType | null>(null);

//---------COMPONENT----------\

const ItemControlContextProvider: FC<{ children: ReactNode }> = function ({
  children,
}) {
  //__c-hooks________

  const [controlState, setControlState] = useState(false);

  //__c-structure____

  const ItemControlContextValues: ContextValueType = {
    ItemControl: { state: controlState, setState: setControlState },
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
