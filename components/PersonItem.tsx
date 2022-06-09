import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardTypeOptions } from 'react-native';
import { Colors } from '../constants/Colors';
import { FontSize } from '../constants/fontSize';
import IconButton from './IconButton';

interface PersonItemProps {
  fadeText: string;
  value: string;
  setValue?: (str:string) => void;
  submitEdit?: () => void;
  textValue?: string;
  editable?: boolean;
  keyType?: KeyboardTypeOptions;
  action?: () => void
}

const PersonItem: React.FC<PersonItemProps> = ({
  fadeText, 
  value,
  setValue, 
  submitEdit,
  editable,
  keyType,
  action
  }) => {
  const inputRef = useRef(null);
  const [isEdit, setEdit] = useState(editable);

  const editFieldsHandler = () => {
    if (action) {
      action();
    } else {
      setEdit(!isEdit);
    }
  }

  const onSubmitHandler = () => {
    submitEdit()
    editFieldsHandler();
  }

  useEffect(() => {
    if (isEdit) {
      inputRef?.current?.focus();
    }
  })
  
  return (
    <View style={styles.container}>
        <View style={{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}
        >
          <View>
            <View>
              <Text style={styles.fadeText}>{fadeText}</Text>
            </View>
            <View>
              <TextInput
                keyboardType={keyType ? keyType : 'default'}
                editable={isEdit} 
                style={styles.mainText}
                onChangeText={setValue}
                value={value}
                onSubmitEditing={onSubmitHandler}
                ref={inputRef}
              />
            </View>
          </View>
          <View>
            <IconButton
              style={{ paddingHorizontal: 16 }}
              name="edit" 
              size={19}
              color={Colors.red}
              buttonAction={() =>                 
                editFieldsHandler()
              }
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 9,
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginBottom: 8
  },
  fadeText: {
    color: Colors.textGrey,
    fontSize: FontSize.middle,
    paddingBottom: 2
  },
  mainText: {
    color: Colors.black,
    paddingTop: 0,
  },
  iconStyle: {
    paddingLeft: 20, 
    paddingRight: 20, 
    paddingVertical: 8
  },
});

export default PersonItem;