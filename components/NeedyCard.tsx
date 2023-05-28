import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/fontSize";
import ProgressBar from "./ProgressBar";

interface NeedyCardProps {
  title: string;
  rest: number;
  currentProgress: string;
}

const NeedyCard: React.FC<NeedyCardProps> = ({
  title,
  rest,
  currentProgress,
}) => {
  return (
    <>
      {rest && rest > 0 ? (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Rest for complete</Text>
          </View>
          <View>
            <Text style={styles.rest}>{rest}$</Text>
            <ProgressBar progress={currentProgress} style={styles.progress} />
          </View>
        </View>
      ) : (
        <View style={styles.outlineContainer}>
          <View>
            <Text style={styles.outlineTitle}>Active Finding is missed.</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    flexDirection: "column",
    backgroundColor: Colors.black,
    justifyContent: "center",
    paddingVertical: 38,
    paddingHorizontal: 17,
  },
  outlineContainer: {
    width: "100%",
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "center",
    paddingVertical: 38,
    paddingHorizontal: 17,
  },
  outlineTitle: {
    fontWeight: "400",
    fontSize: FontSize.label,
    color: Colors.textGrey,
    textAlign: "center",
  },
  title: {
    fontWeight: "400",
    fontSize: FontSize.big,
    color: Colors.white,
    textAlign: "center",
  },
  subTitle: {
    fontWeight: "500",
    fontSize: FontSize.middle,
    color: Colors.white,
    textAlign: "center",
    paddingTop: 10,
  },
  rest: {
    paddingTop: 10,
    fontWeight: "600",
    fontSize: FontSize.large,
    color: Colors.white,
    textAlign: "center",
  },
  progress: {
    paddingTop: 15,
  },
});

export default NeedyCard;
