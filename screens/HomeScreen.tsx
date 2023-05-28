import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNeedyPersonsQuery } from "../api/generated/schema";
import Button from "../components/Button";
import CustomMarker from "../components/CustomMarker";
import Dropdown from "../components/Dropdown";
import IconButton from "../components/IconButton";
import ModalMenu from "../components/ModalMenu";
import Preloader from "../components/Preloader";
import { Api } from "../constants/ApiUrl";
import { Cities } from "../constants/CityArray";
import { Colors } from "../constants/Colors";
import { HomeStackParamList } from "../navigation/StackNavigation";

interface HomeScreenProps {
  homeStack: StackNavigationProp<HomeStackParamList>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ homeStack }) => {
  const { loading, error, data } = useNeedyPersonsQuery();
  const navigation = useNavigation<typeof homeStack>();
  const iconButtonRef = useRef<RBSheet | null>(null);
  const [selectedCity, setSelectedCity] = useState("All");

  const openMenuHandler = () => {
    iconButtonRef?.current?.open();
  };

  const markerHandler = (personId: string) => {
    navigation.navigate("NeedyPerson", {
      personId,
    });
  };

  const filterButtonHandler = () => {
    iconButtonRef?.current?.close();
  };

  console.log(data?.needyPersons?.data[1]?.attributes);

  return (
    <View style={styles.container}>
      {loading && <Preloader />}
      <MapView style={styles.map}>
        {data?.needyPersons?.data?.map((person) => (
          <CustomMarker
            key={person?.id}
            latitude={parseFloat(person?.attributes?.geolocation?.latitude!)}
            longitude={parseFloat(person?.attributes?.geolocation?.langitude!)}
            imgPath={
              person?.attributes?.thumbnail?.data?.attributes?.url &&
              Api.url +
                `${person?.attributes?.thumbnail?.data?.attributes?.url}`
            }
            buttonAction={() => markerHandler(person?.id!)}
          />
        ))}
      </MapView>
      <View style={styles.iconContainer}>
        <IconButton
          style={styles.iconStyle}
          size={24}
          name="sliders"
          color={Colors.red}
          buttonAction={() => openMenuHandler()}
        />
        <ModalMenu modalRef={iconButtonRef}>
          <View style={styles.filterContainer}>
            <Text
              style={{
                textAlign: "center",
                color: Colors.textGrey,
                paddingBottom: 6,
              }}
            >
              Chose City
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Dropdown
                data={Cities}
                onSelect={setSelectedCity}
                label={selectedCity}
              />
            </View>
            <View style={styles.filterButton}>
              <Button
                label="Filter"
                buttonAction={() => filterButtonHandler()}
              />
            </View>
          </View>
        </ModalMenu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  iconStyle: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 40,
    marginLeft: "auto",
    marginRight: 16,
  },
  filterContainer: {
    marginTop: 40,
    paddingHorizontal: 32,
    flexDirection: "column",
    flex: 1,
  },
  filterButton: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 60,
  },
});

export default HomeScreen;
