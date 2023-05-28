import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/fontSize";

interface PaymentItemProps {
  needLabel: string | undefined;
  name: string | undefined;
  surname: string | undefined;
  patronymic?: string | undefined;
  sum: number | undefined;
  date: string | undefined;
}

const PaymentItem: React.FC<PaymentItemProps> = ({
  needLabel,
  name,
  surname,
  patronymic,
  sum,
  date,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {surname} {name} {patronymic}
        </Text>
        {needLabel && <Text style={styles.need}>{needLabel}</Text>}
        {date && <Text style={styles.date}>{date}</Text>}
      </View>
      {sum && <Text style={styles.sum}>{sum} $</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 9,
    backgroundColor: Colors.white,
    padding: 15,
  },
  textContainer: {
    flexDirection: "column",
    maxWidth: "75%",
  },
  need: {
    paddingBottom: 4,
  },
  sum: {
    fontSize: FontSize.big,
    color: Colors.black,
    fontWeight: "bold",
  },
  name: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.regular,
    paddingBottom: 4,
  },
  date: {
    fontSize: FontSize.middle,
    color: Colors.textGrey,
  },
});

export default PaymentItem;
