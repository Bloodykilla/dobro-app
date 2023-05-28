import { gql, useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useMemo, useState } from "react";
import { Alert, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSingleNeedQuery } from "../api/generated/schema";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import { Api } from "../constants/ApiUrl";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/fontSize";
import { HomeStackParamList } from "../navigation/StackNavigation";
interface PaymentScreenProps {
  route: {
    params: {
      needId: string;
      selectedOption: number;
    };
  };
  mainStack: StackNavigationProp<HomeStackParamList>;
}

// Mutation Queries
const UPDATE_NEED_CURRENT_SUM = gql`
  mutation UpdatePersonNeedCurrentSum($needId: ID!, $sum: Int) {
    updatePersonsNeed(id: $needId, data: { currentSum: $sum }) {
      data {
        id
      }
    }
  }
`;

const CREATE_USER_PAYMENT_ENTRY = gql`
  mutation CreateUserPaymentEntry($input: UserPaymentInput!) {
    createUserPayment(data: $input) {
      data {
        id
      }
    }
  }
`;

const PaymentScreen: React.FC<PaymentScreenProps> = ({ route, mainStack }) => {
  const [amount, setMount] = useState("");
  const { needId } = route?.params;

  const { loading, error, data } = useSingleNeedQuery({
    variables: {
      id: needId,
    },
  });

  const [
    updateNeedCurrentSum,
    {
      loading: loadingUpdateNeedCurrentSum,
      error: errorUpdateNeedCurrentSum,
      data: dataUpdateNeedCurrentSum,
    },
  ] = useMutation(UPDATE_NEED_CURRENT_SUM);

  const [
    createUserPaymentEntry,
    {
      loading: loadingCreateUserPaymentEntry,
      error: errorCreateUserPaymentEntry,
      data: dataCreateUserPaymentEntry,
    },
  ] = useMutation(CREATE_USER_PAYMENT_ENTRY);

  const need = data?.personsNeed?.data?.attributes! || {};
  const navigation = useNavigation<typeof mainStack>();

  const payForCurrentNeed = async () => {
    const { requestedSum, currentSum } = need;
    let value = currentSum! + +amount;

    if (value > requestedSum! || +amount < 0) {
      Alert.alert(
        "The Value is higher then requested. Please, enter valid value."
      );
      return;
    }

    try {
      await Promise.all([
        updateNeedCurrentSum({
          variables: {
            needId: data?.personsNeed?.data?.id,
            sum: currentSum! + +amount,
          },
        }),
        createUserPaymentEntry({
          variables: {
            input: {
              persons_needs: [needId],
              users_permissions_users: ["1"],
              amount: +amount,
              publishedAt: new Date(),
            },
          },
        }),
      ]).then(() => {
        navigation.navigate("Thanks");
      });
    } catch (error) {
      Alert.alert("Something went wrong. Please, try again.");
    }
  };

  const calculateRestOfSum = useMemo(() => {
    if (need) {
      let value = 0;
      const reqSum = need?.requestedSum!;
      const curSum = need?.currentSum!;

      return (value = reqSum - curSum);
    }
  }, [data]);

  return (
    <Layout style={styles.container}>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <View style={styles.warningTextContainer}>
            <Text style={styles.warningText}>
              Remember! Every time you help a person in need, you get points
              that can be spent on the services of our partners.
            </Text>
          </View>
          <View style={styles.paymentCardContainer}>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  source={{
                    uri:
                      Api?.url +
                      need?.needy_person?.data?.attributes?.thumbnail?.data
                        ?.attributes?.url,
                  }}
                  style={styles.image}
                />
              </View>
              <View style={{ paddingLeft: 20 }}>
                <View style={styles.initialsContainer}>
                  {need?.needy_person?.data?.attributes?.firstName &&
                    need?.needy_person?.data?.attributes?.lastName && (
                      <Text
                        style={[
                          styles.needyName,
                          { maxWidth: Dimensions.get("window").width - 150 },
                        ]}
                      >
                        {`${need?.needy_person?.data?.attributes?.firstName} ${need?.needy_person?.data?.attributes?.lastName}`}
                      </Text>
                    )}
                </View>
                <View style={{ paddingVertical: 4 }}>
                  {need?.title && (
                    <Text
                      style={{
                        maxWidth: Dimensions.get("window").width - 150,
                      }}
                    >
                      {need?.title}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.restContainer}>
            <Text style={styles.restText}>
              Rest to complete: {calculateRestOfSum}$
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholderTextColor="#BEBEBE"
              placeholder="Enter the value"
              keyboardType="numeric"
              style={styles.input}
              value={amount}
              onChangeText={setMount}
            />
          </View>
          <View>
            <Button label="Pay" buttonAction={() => payForCurrentNeed()} />
          </View>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    flexDirection: "column",
  },
  paymentCardContainer: {
    height: "auto",
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 9,
  },
  input: {
    padding: 12,
    fontSize: FontSize.label,
    textAlign: "center",
    borderWidth: 1,
    borderColor: Colors.red,
    borderRadius: 8,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
  needyName: {
    textAlign: "left",
    fontSize: FontSize.regular,
    fontWeight: "500",
    maxWidth: 280,
  },
  inputContainer: {
    marginBottom: 40,
  },
  initialsContainer: {
    paddingVertical: 4,
  },
  warningTextContainer: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginVertical: 50,
    backgroundColor: Colors.black,
  },
  warningText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: FontSize.regular,
    color: Colors.white,
  },
  restText: {
    fontSize: FontSize.label,
    color: Colors.black,
    textAlign: "center",
  },
  restContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
});

export default PaymentScreen;
