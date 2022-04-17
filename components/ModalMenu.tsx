import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Colors } from '../constants/Colors';

interface ModalMenuProps {
  modalRef: {}
}

const ModalMenu: React.FC<ModalMenuProps> = ({ children, modalRef}) => {
  const windowPorp = Dimensions.get('window');

  return (
    <RBSheet
      ref={modalRef}
      height={windowPorp.height / 2}
      openDuration={380}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.5)'
        },
        draggableIcon: {
          backgroundColor: "#000"
        }
      }}
    >
      {children}
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default ModalMenu;