import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SelectItem from "./SelectItem";

interface SelectBoxProps {
  items: { value: string }[];
  isSelected: boolean;
}

const SelectBox: React.FC<SelectBoxProps> = ({ items, isSelected }) => {
  return (
    <View style={styles.container}>
      {items.length > 0 && (
        <ScrollView contentContainerStyle={{ maxHeight: 200 }}>
          {items.map((item, id) => (
            <SelectItem isSelected={isSelected} key={id} value={item?.value} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
  },
});

export default SelectBox;
