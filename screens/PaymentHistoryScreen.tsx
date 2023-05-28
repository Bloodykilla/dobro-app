import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  UserPaymentsQuery,
  useUserPaymentQuery,
  useUserPaymentsQuery,
} from "../api/generated/schema";
import ModalMenu from "../components/ModalMenu";
import PaymentCheckout from "../components/PaymentCheckout";
import PaymentItem from "../components/PaymentItem";
import Preloader from "../components/Preloader";
import RadioButton from "../components/RadioButton";
import TextButton from "../components/TextButton";
import { Colors } from "../constants/Colors";
import { timeCodeOptions } from "../constants/TimeCodeOptions";
import { FontSize } from "../constants/fontSize";
import { LoadMoreHandler } from "../functions/LoadMoreHandler/LoadMoreHandler";
import { TimeRangeItemProps } from "../interfaces/TimeRange";

interface PaymentHistoryScreenProps {}

interface NeedProps {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  sum: number;
  date: string | null;
}

const PAGE_SIZE = 6;

const PaymentHistoryScreen: React.FC<PaymentHistoryScreenProps> = ({}) => {
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [needsCollection, setNeedsCollection] = useState<NeedProps[]>();
  const [selectedDateRange, setSelectedDateRange] =
    useState<TimeRangeItemProps>(timeCodeOptions[0]);

  const { loading, error, data, refetch, networkStatus, fetchMore } =
    useUserPaymentsQuery({
      variables: {
        start: 0,
        limit: PAGE_SIZE,
        sort:
          selectedDateRange?.id === "0" || selectedDateRange?.id === "5"
            ? "createdAt:desc"
            : "createdAt:asc",
        where: {
          users_permissions_users: {
            //@ts-ignore
            id: {
              in: ["1"],
            },
          },

          //@ts-ignore
          createdAt: {
            gte: selectedDateRange?.from,
            lte: selectedDateRange?.to,
          },
        },
      },
    });

  const {
    loading: loadingPayment,
    error: errorPayment,
    data: dataPayment,
  } = useUserPaymentQuery({
    variables: {
      id: selectedPayment,
    },
  });

  const menuRef = useRef<RBSheet | null>(null);
  const singlePaymentMenuRef = useRef<RBSheet | null>(null);

  const renderPaymentItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => singleSelectedPaymentHandler(item.id)}>
      <PaymentItem
        needLabel={item.title}
        name={item.firstName}
        surname={item.lastName}
        sum={item.sum}
        date={moment(item.date).format("DD MMMM YYYY")}
      />
    </TouchableOpacity>
  );

  const singleSelectedPaymentHandler = (id: string) => {
    setSelectedPayment(id);
    singlePaymentMenuRef?.current?.open();
  };

  const openMenuHandler = () => {
    menuRef?.current?.open();
  };

  const itemTapHandler = (item: TimeRangeItemProps) => {
    menuRef?.current?.close();
    setSelectedDateRange(item);
  };

  const fetchMorePaymentsHandler = () => {
    const length = data?.userPayments?.data?.length || 0;
    const total = data?.userPayments?.meta?.pagination?.total;

    if (length === total) return;

    setTimeout(() => {
      LoadMoreHandler<UserPaymentsQuery>(length, PAGE_SIZE, fetchMore);
    }, 500);
  };

  useEffect(() => {
    if (data?.userPayments?.data?.length! > 0) {
      const acc: NeedProps[] = [];
      data?.userPayments?.data?.forEach((el) => {
        acc.push({
          id: el?.id!,
          title: el?.attributes?.persons_needs?.data[0]?.attributes?.title!,
          firstName:
            el?.attributes?.persons_needs?.data[0]?.attributes?.needy_person
              ?.data?.attributes?.firstName!,
          lastName:
            el?.attributes?.persons_needs?.data[0]?.attributes?.needy_person
              ?.data?.attributes?.lastName!,
          sum: el?.attributes?.amount!,
          date: el?.attributes?.createdAt
            ? moment(el?.attributes?.createdAt).format("DD MMMM YYYY")
            : null,
        });
      });

      setNeedsCollection(acc);
    }
  }, [data?.userPayments]);

  useEffect(() => {
    refetch();
  }, [selectedDateRange.id]);

  return (
    <View style={styles.layout}>
      {loading ? (
        <Preloader />
      ) : (
        <View style={styles.container}>
          <View style={[styles.textButtonContainer, styles.screenContainer]}>
            <TextButton
              text="Chose date"
              buttonAction={() => openMenuHandler()}
            />
            <ModalMenu style={{ paddingHorizontal: 32 }} modalRef={menuRef}>
              <View style={{ marginVertical: 30, flex: 1 }}>
                {timeCodeOptions.map((item, id) => (
                  <RadioButton
                    key={id}
                    value={+item.id}
                    label={item.label}
                    isActive={+selectedDateRange.id === id ? true : false}
                    onSelect={() => itemTapHandler(item)}
                  />
                ))}
                {/* <Button
                  style={styles.filterButton}
                  label="Filter"
                  buttonAction={() => closeDateRangeMenuHandler()}
                /> */}
              </View>
            </ModalMenu>
          </View>
          {needsCollection?.length! > 0 ? (
            <>
              <FlatList
                data={needsCollection}
                keyExtractor={(_, index) => index.toString()}
                refreshControl={
                  <RefreshControl
                    refreshing={networkStatus === 4}
                    onRefresh={refetch}
                  />
                }
                style={styles.screenContainer}
                renderItem={renderPaymentItem}
                onEndReached={() => fetchMorePaymentsHandler()}
              />
              <ModalMenu
                style={{ paddingHorizontal: 16 }}
                modalRef={singlePaymentMenuRef}
              >
                {!loadingPayment && (
                  <PaymentCheckout
                    date={dataPayment?.userPayment?.data?.attributes?.createdAt}
                    id={dataPayment?.userPayment?.data?.id!}
                    needTitle={
                      dataPayment?.userPayment?.data?.attributes?.persons_needs
                        ?.data[0]?.attributes?.title!
                    }
                    firstName={
                      dataPayment?.userPayment?.data?.attributes?.persons_needs
                        ?.data[0]?.attributes?.needy_person?.data?.attributes
                        ?.firstName!
                    }
                    lastName={
                      dataPayment?.userPayment?.data?.attributes?.persons_needs
                        ?.data[0]?.attributes?.needy_person?.data?.attributes
                        ?.lastName!
                    }
                    total={dataPayment?.userPayment?.data?.attributes?.amount!}
                  />
                )}
              </ModalMenu>
            </>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: Colors.textGrey }}>
                Payments are empty.
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  screenContainer: {
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    marginTop: 15,
  },
  textButtonContainer: {
    paddingBottom: 15,
    alignSelf: "flex-end",
  },
  noPaymentText: {
    color: Colors.textGrey,
    textAlign: "center",
    fontSize: FontSize.label,
  },
  filterButton: {
    marginTop: "auto",
  },
});

export default PaymentHistoryScreen;
