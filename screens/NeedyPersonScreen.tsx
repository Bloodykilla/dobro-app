import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  useFoodBasketQuery,
  useNeedyPersonQuery,
} from "../api/generated/schema";
import Button from "../components/Button";
import CustomTab from "../components/CustomTab";
import DetailsButton from "../components/DetailsButton";
import FoodBasket from "../components/FoodBasket";
import Layout from "../components/Layout";
import NeedyCard from "../components/NeedyCard";
import Preloader from "../components/Preloader";
import { Api } from "../constants/ApiUrl";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/fontSize";
import { HomeStackParamList } from "../navigation/StackNavigation";

interface NeedyPersonScreenProps {
  homeStack: StackNavigationProp<HomeStackParamList>;
  route: {
    params: {
      personId: string;
    };
  };
}

const NeedyPersonScreen: React.FC<NeedyPersonScreenProps> = ({
  homeStack,
  route,
}) => {
  const personId = route?.params?.personId!;
  const { loading, error, data, refetch, networkStatus } = useNeedyPersonQuery({
    variables: {
      id: personId,
    },
  });
  const {
    loading: foodLoading,
    error: foodError,
    data: foodData,
  } = useFoodBasketQuery();

  const person = data?.needyPerson?.data?.attributes! || {};
  const foodBasketItems = foodData?.foodBasket?.data?.attributes?.items || [];

  //TODO: use reduce instead of forEach loop
  let foodBasketPrice = 0;
  foodBasketItems?.forEach((el) => {
    foodBasketPrice += el?.price!;
  });

  const [expand, setExpand] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);
  const navigation = useNavigation<typeof homeStack>();

  const onSelectSwitch = (index: number) => {
    setSelectedOption(index);
  };

  const expandButtonHandler = () => {
    setExpand(!expand);
  };

  const redirectButtonHandler = async () => {
    navigation.navigate("Payment", {
      needId: person?.persons_needs?.data[0]?.id,
    });
  };

  const getCurrentSum = (reqSum: number, curSum: number): string => {
    let sum: number = 0;
    if (reqSum && curSum) {
      sum = (curSum / reqSum) * 100;
    }
    return sum.toFixed().toString();
  };

  return (
    <Layout networkStatus={networkStatus} onRefresh={() => refetch}>
      {loading || foodLoading ? (
        <Preloader />
      ) : (
        <>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: Api.url + person?.thumbnail?.data?.attributes?.url,
                }}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            {person?.firstName && person?.lastName && person?.patronymic && (
              <Text style={styles.personTitle}>
                {person?.firstName} {person?.patronymic} {person?.lastName}
              </Text>
            )}
            {person?.years && (
              <Text style={styles.personSubTitle}>
                {person?.years} years old
              </Text>
            )}
          </View>
          <View style={styles.accordion}>
            <View>
              <Text style={styles.aboutNeedy}>About Person:</Text>
            </View>
            {person?.description?.length! > 250 && (
              <DetailsButton buttonAction={() => expandButtonHandler()} />
            )}
          </View>
          <View
            style={
              expand ? styles.descContainerExpand : styles.descContainerCollapse
            }
          >
            <Text style={styles.descText}>{person?.description}</Text>
          </View>
          <View style={styles.tabContainer}>
            <CustomTab
              activeCollection={true}
              foodBasket={true}
              onSelectSwitch={onSelectSwitch}
              optionNameActive="Active Finding"
              optionNameFood="Food Basket"
            />
          </View>
          <View>
            {selectedOption === 1 ? (
              <>
                {person?.persons_needs?.data?.map((need) => (
                  <NeedyCard
                    key={need?.id!}
                    title={need?.attributes?.title!}
                    currentProgress={getCurrentSum(
                      need?.attributes?.requestedSum!,
                      need?.attributes?.currentSum!
                    )}
                    rest={
                      need?.attributes?.requestedSum! -
                      need?.attributes?.currentSum!
                    }
                  />
                ))}
              </>
            ) : (
              <View>
                <Text style={styles.foodBasketText}>
                  You can also help with buying a food for a person. Here is our
                  partners subscription plan.
                </Text>
                {foodBasketItems?.length! > 0 && (
                  <FoodBasket
                    foodRest={foodBasketPrice}
                    foodDesc={foodBasketItems?.map((el) => el?.name).join(", ")}
                  />
                )}
              </View>
            )}
          </View>

          <View style={styles.buttonContainer}>
            {selectedOption === 1 ? (
              <Button
                label="Donate"
                buttonAction={() => redirectButtonHandler()}
              />
            ) : (
              <Text style={styles.redText}>Not Available.</Text>
            )}
          </View>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 320,
    borderRadius: 8,
  },
  imageContainer: {
    marginTop: 30,
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  personTitle: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.big,
    color: Colors.black,
  },
  personSubTitle: {
    paddingTop: 4,
    textAlign: "center",
    fontWeight: "400",
    fontSize: FontSize.label,
    color: Colors.gray,
  },
  aboutNeedy: {
    fontWeight: "500",
    color: Colors.black,
    fontSize: FontSize.label,
  },
  accordion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descContainerCollapse: {
    marginTop: 22,
    maxHeight: 90,
  },
  descContainerExpand: {
    marginTop: 22,
  },
  descText: {
    fontWeight: "400",
    color: Colors.black,
    fontSize: FontSize.regular,
  },
  tabContainer: {
    marginVertical: 20,
  },
  foodBasketText: {
    fontSize: FontSize.regular,
    fontWeight: "500",
    color: Colors.black,
    paddingBottom: 8,
    textAlign: "center",
  },
  smileImage: {
    width: 40,
    height: 40,
  },
  helpContainer: {
    marginTop: 15,
  },
  buttonContainer: {
    marginVertical: 30,
  },
  redText: {
    color: Colors.red,
    fontSize: FontSize.big,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default NeedyPersonScreen;
