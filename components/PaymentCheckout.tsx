import moment from "moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import BoldText from "./BoldText";
import Button from "./Button";

interface PaymentCheckoutProps {
  needTitle: string;
  total: number;
  id: string;
  firstName: string;
  lastName: string;
  date: Date;
}

const PaymentCheckout = ({
  needTitle,
  total,
  id,
  firstName,
  lastName,
  date,
}: PaymentCheckoutProps) => {
  return (
    <>
      <BoldText style={{ paddingVertical: 10 }}>Payment information</BoldText>
      <View style={styles.container}>
        {id && (
          <View style={styles.row}>
            <Text>Operation ID</Text>
            <Text>{id}</Text>
          </View>
        )}
        {firstName && lastName && (
          <View style={styles.row}>
            <Text>Credentials</Text>
            <Text>{`${firstName} ${lastName}`}</Text>
          </View>
        )}
        {needTitle && (
          <View style={styles.row}>
            <Text>Need</Text>
            <Text>{needTitle}</Text>
          </View>
        )}
        {date && (
          <View style={styles.row}>
            <Text>Date</Text>
            <Text>{moment(date).format("DD MMMM YYYY,  h:mm:ss a")}</Text>
          </View>
        )}
        {total && (
          <View style={[styles.row, { borderBottomWidth: 0 }]}>
            <Text>Total</Text>
            <Text>{total} $</Text>
          </View>
        )}
        <Button
          style={{ marginTop: 10 }}
          label={"View Details"}
          buttonAction={() => {}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#F4F4F6",
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.textGrey,
  },
});

export default PaymentCheckout;
