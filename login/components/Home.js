import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Home = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([]);
  const [drawerItemsActive] = useState([]);
  const stateIndex = !state ? 0 : state.index;
  return (
    <View style={styles.home}>
      <Text style={styles.orderOnlineCollectInStore}>
        <Text style={styles.orderOnline}>Order online</Text>
        <Text style={styles.collectInStore}>collect in store</Text>
      </Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.seeMore}>see more</Text>
      <Text style={styles.wearable}>Wearable</Text>
      <Text style={[styles.laptops, styles.phonesTypo]}>Laptops</Text>
      <Text style={[styles.phones, styles.phonesTypo]}>Phones</Text>
      <Text style={[styles.drones, styles.phonesTypo]}>Drones</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={styles.appleWatch}>Apple Watch</Text>
        <Text
          style={[styles.series6Red, styles.appleTypo, styles.series6RedTypo]}
        >
          Series 6 . Red
        </Text>
        <Text style={[styles.text, styles.textTypo]}>$ 359</Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
          resizeMode="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Text style={styles.samsungGalaxyWatch}>SAMSUNG Galaxy Watch</Text>
        <Text
          style={[styles.activeGreen, styles.appleTypo, styles.series6RedTypo]}
        >
          Active . Green
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>$ 159</Text>
      </View>
      <View style={styles.homeChild} />
      <Image
        style={[styles.menuIcon, styles.iconLayout, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <View style={styles.searchField}>
        <View style={[styles.searchFieldChild, styles.searchBorder]} />
        <Text style={[styles.apple, styles.appleTypo]}>Search</Text>
        <View style={[styles.searchFieldItem, styles.searchBorder]} />
        <Image
          style={[styles.iconlylightsearch, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconlylightsearch.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phonesTypo: {
    color: GlobalStyles.Color.gray_200,
    fontWeight: "600",
    fontSize: GlobalStyles.FontSize.size_base,
    top: 298,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    position: "absolute",
  },
  groupLayout: {
    height: 270,
    shadowColor: "rgba(57, 57, 57, 0.1)",
    backgroundColor: GlobalStyles.Color.white,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    width: 220,
    position: "absolute",
    borderRadius: GlobalStyles.Border.br_md,
  },
  maskGroupPosition: {
    top: 0,
    position: "absolute",
  },
  appleTypo: {
    color: GlobalStyles.Color.gray_300,
    fontWeight: "600",
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    position: "absolute",
  },
  series6RedTypo: {
    fontSize: GlobalStyles.FontSize.size_sm,
    color: GlobalStyles.Color.gray_300,
    opacity: 0.9,
    height: 52,
    width: 138,
    textAlign: "center",
  },
  textTypo: {
    height: 19,
    width: 172,
    left: 24,
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo,
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  searchBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  orderOnline: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  collectInStore: {
    margin: GlobalStyles.Margin.margin_md,
  },
  orderOnlineCollectInStore: {
    top: 162,
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    fontWeight: "700",
    left: 50,
    position: "absolute",
  },
  vectorIcon: {
    top: 67,
    height: 17,
    width: 24,
    left: 54,
    position: "absolute",
  },
  seeMore: {
    top: 745,
    left: 295,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    fontWeight: "700",
    position: "absolute",
  },
  wearable: {
    fontWeight: "600",
    top: 298,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo,
    left: 54,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    position: "absolute",
  },
  laptops: {
    left: 157,
  },
  phones: {
    left: 249,
  },
  drones: {
    left: 333,
  },
  groupChild: {
    top: 48,
    shadowRadius: 60,
    elevation: 60,
  },
  maskGroupIcon: {
    left: -5,
    width: 237,
    height: 237,
  },
  appleWatch: {
    top: 193,
    opacity: 0.9,
    height: 52,
    width: 138,
    textAlign: "center",
    lineHeight: 22,
    fontSize: GlobalStyles.FontSize.size_xl,
    left: 41,
    fontWeight: "600",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    position: "absolute",
  },
  series6Red: {
    top: 224,
    left: 41,
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  text: {
    top: 260,
  },
  rectangleParent: {
    top: 398,
    height: 318,
    width: 220,
    left: 50,
    position: "absolute",
  },
  groupItem: {
    top: 51,
    shadowRadius: 50,
    elevation: 50,
  },
  maskGroupIcon1: {
    left: -9,
    width: 164,
    height: 242,
  },
  samsungGalaxyWatch: {
    top: 196,
    left: 24,
    opacity: 0.9,
    textAlign: "center",
    lineHeight: 22,
    fontSize: GlobalStyles.FontSize.size_xl,
    fontWeight: "600",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    position: "absolute",
  },
  activeGreen: {
    top: 227,
    left: 44,
  },
  text1: {
    top: 263,
  },
  rectangleGroup: {
    top: 395,
    left: 304,
    width: 282,
    height: 321,
    position: "absolute",
  },
  homeChild: {
    top: 328,
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.indigo,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 40,
    elevation: 40,
    width: 87,
    height: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    left: 50,
    position: "absolute",
  },
  menuIcon: {
    height: "7.31%",
    width: "79.29%",
    top: "89.87%",
    right: "12.56%",
    bottom: "2.82%",
    left: "8.15%",
  },
  searchFieldChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    borderColor: "#c9c9c9",
    borderWidth: 2,
    width: "100%",
    borderStyle: "solid",
  },
  apple: {
    top: "33.33%",
    left: 57,
    color: GlobalStyles.Color.gray_300,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
  },
  searchFieldItem: {
    height: "45%",
    width: "0.37%",
    top: "29.17%",
    right: "63.6%",
    bottom: "25.83%",
    left: "36.03%",
    borderColor: "#000",
    borderRightWidth: 1,
    display: "none",
  },
  iconlylightsearch: {
    height: "40%",
    top: "30%",
    bottom: "30%",
    left: 21,
    width: 24,
  },
  searchField: {
    top: 47,
    left: 103,
    width: 267,
    height: 60,
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.79%",
    width: "3.86%",
    top: "83.37%",
    right: "6.76%",
    bottom: "14.84%",
    left: "89.37%",
  },
  home: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    height: 896,
    overflow: "hidden",
    borderRadius: GlobalStyles.Border.br_md,
    width: "100%",
  },
});

export default Home;
