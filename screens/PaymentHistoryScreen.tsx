import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Button from "../components/Button";
import Layout from "../components/Layout";
import ModalMenu from "../components/ModalMenu";
import PaymentItem from "../components/PaymentItem";
import RadioButton from "../components/RadioButton";
import TextButton from "../components/TextButton";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/fontSize";
import { timeCodeOptions } from "../constants/TimeCodeOptions";
import { PaymentItemModel } from "../models/PaymentItem";
interface PaymentHistoryScreenProps {}

const PaymentHistoryScreen: React.FC<PaymentHistoryScreenProps> = ({}) => {
  const openMenuRef = useRef<RBSheet | null>(null);
  const [isActive, setActive] = useState<null | number>(0);
  const [paymentItems, setPaymentItems] = useState(
    PaymentItemModel.paymentsList
  );

  const openMenuHandler = () => {
    openMenuRef?.current?.open();
  };

  const itemTapHandler = (id: number) => {
    setActive(id);
  };

  const setActiveOptionHandler = () => {
    openMenuRef?.current?.close();
  };

  useEffect(() => {});

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.textButtonContainer}>
          <TextButton
            text="Обрати період"
            buttonAction={() => openMenuHandler()}
          />
          <ModalMenu modalRef={openMenuRef}>
            <View style={{ paddingHorizontal: 32, marginTop: 30, flex: 1 }}>
              {timeCodeOptions.map((item, id) => (
                <RadioButton
                  key={id}
                  value={item.value}
                  label={item.label}
                  isActive={isActive === id ? true : false}
                  onSelect={() => itemTapHandler(id)}
                />
              ))}
              <Button
                style={styles.filterButton}
                label="Фільтр"
                buttonAction={() => setActiveOptionHandler()}
              />
            </View>
          </ModalMenu>
        </View>
        <View>
          <PaymentItem
            needLabel={"Лікування альцгеймеру"}
            name={"Джо"}
            surname={"Байден"}
            patronymic={""}
            sum={200}
            date={"12/01/2023"}
          />
          <PaymentItem
            needLabel={"Лікування альцгеймеру"}
            name={"Джо"}
            surname={"Байден"}
            patronymic={""}
            sum={400}
            date={"12/01/2023"}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  textButtonContainer: {
    marginBottom: 15,
    alignSelf: "flex-end",
  },
  noPaymentText: {
    color: Colors.textGrey,
    textAlign: "center",
    fontSize: FontSize.label,
  },
  filterButton: {
    marginTop: "15%",
  },
});

export default PaymentHistoryScreen;
