import React, { LegacyRef } from "react";
import { Dimensions, ScrollView } from "react-native";

import RBSheet from "react-native-raw-bottom-sheet";

interface ModalMenuProps {
  modalRef: LegacyRef<RBSheet> | null;
  style?: {};
}

const ModalMenu: React.FC<ModalMenuProps> = ({ children, modalRef, style }) => {
  const windowProp = Dimensions.get("window");

  return (
    <RBSheet
      ref={modalRef}
      height={windowProp.height / 2}
      openDuration={280}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        draggableIcon: {
          backgroundColor: "#000",
        },
      }}
    >
      <ScrollView contentContainerStyle={[{ flex: 1 }, style]}>
        {children}
      </ScrollView>
    </RBSheet>
  );
};

export default ModalMenu;
