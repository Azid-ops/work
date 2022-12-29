import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={styles.loginChild}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <View style={styles.form}>
        <View style={[styles.emailParent, styles.loginItemPosition]}>
          <Text style={[styles.email, styles.emailTypo]}>{`Email `}</Text>
          <Text
            style={[
              styles.rosinacompanycom,
              styles.textColor,
              styles.login1Typo,
              styles.textTypo,
            ]}
          >
            rosina@company.com
          </Text>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={styles.passwordParent}>
          <Text style={[styles.password, styles.emailTypo]}>Password</Text>
          <Text style={[styles.show, styles.showTypo, styles.showTypo1]}>
            Show
          </Text>
          <Text
            style={[styles.text, styles.textColor, styles.textTypo]}
          >{`* * * * * * * * `}</Text>
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
        <Text
          style={[styles.forgotPasscode, styles.showTypo, styles.showTypo1]}
        >
          Forgot passcode?
        </Text>
        <View style={styles.buttonLarge}>
          <View style={styles.buttonLargeChild} />
          <Text style={[styles.button, styles.buttonColor]}>Login</Text>
        </View>
      </View>
      <Text style={[styles.createAccount, styles.showTypo]}>
        Create account
      </Text>
      <Image
        style={[styles.loginItem, styles.loginItemPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={styles.loginInner}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Image
        style={styles.loginChild1}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.loginChild2}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Text style={[styles.welcomeBack, styles.buttonColor]}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.back}>back</Text>
      </Text>
      <Text style={[styles.login1, styles.textColor, styles.login1Typo]}>
        Login
      </Text>
      <Image
        style={[styles.iconlylightmessage, styles.iconlylightlockLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightmessage.png")}
      />
      <Image
        style={[styles.iconlylightlock, styles.iconlylightlockLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightlock.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginItemPosition: {
    top: 0,
    position: "absolute",
  },
  emailTypo: {
    color: GlobalStyles.Color.gray_300,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    fontWeight: "600",
    fontSize: GlobalStyles.FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  textColor: {
    color: GlobalStyles.Color.black,
    textAlign: "left",
    position: "absolute",
  },
  login1Typo: {
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    color: GlobalStyles.Color.black,
  },
  textTypo: {
    fontWeight: "600",
    fontSize: GlobalStyles.FontSize.size_base,
    left: 0,
  },
  groupLayout: {
    height: 1,
    width: 315,
    borderTopWidth: 1,
    borderColor: "#c9c9c9",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  showTypo: {
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    fontWeight: "600",
    position: "absolute",
  },
  showTypo1: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.indigo,
  },
  buttonColor: {
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.screenTitle,
    position: "absolute",
  },
  iconlylightlockLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "12.08%",
    right: "82.13%",
    width: "5.8%",
    height: "2.68%",
    position: "absolute",
    overflow: "hidden",
  },
  loginChild: {
    top: 261,
    width: 414,
    height: 647,
    left: 0,
    position: "absolute",
  },
  email: {
    left: 35,
    textAlign: "left",
  },
  rosinacompanycom: {
    top: 30,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  groupChild: {
    top: 62,
  },
  emailParent: {
    height: 62,
    width: 314,
    left: 0,
  },
  password: {
    left: 30,
    textAlign: "left",
  },
  show: {
    top: 21,
    left: 274,
  },
  text: {
    top: 28,
    fontFamily: GlobalStyles.FontFamily.sFProText,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  groupItem: {
    top: 60,
  },
  passwordParent: {
    top: 107,
    height: 60,
    width: 314,
    left: 0,
    position: "absolute",
  },
  forgotPasscode: {
    top: 191,
    left: 0,
  },
  buttonLargeChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_sm,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    position: "absolute",
    width: "100%",
    backgroundColor: GlobalStyles.Color.indigo,
  },
  button: {
    width: "92.36%",
    top: "35.71%",
    left: "3.82%",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
  },
  buttonLarge: {
    top: 271,
    height: 70,
    width: 314,
    left: 0,
    position: "absolute",
  },
  form: {
    top: 388,
    height: 341,
    width: 314,
    left: 50,
    position: "absolute",
  },
  createAccount: {
    top: 748,
    left: 146,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  loginItem: {
    left: 265,
    width: 125,
    height: 125,
  },
  loginInner: {
    top: 6,
    left: 69,
    width: 394,
    height: 176,
    position: "absolute",
  },
  ellipseIcon: {
    top: 215,
    left: 329,
    width: 35,
    height: 35,
    position: "absolute",
  },
  loginChild1: {
    top: 26,
    left: 89,
    width: 27,
    height: 27,
    position: "absolute",
  },
  loginChild2: {
    top: 233,
    left: 54,
    width: 23,
    height: 23,
    display: "none",
    position: "absolute",
  },
  welcome: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  back: {
    margin: GlobalStyles.Margin.margin_md,
  },
  welcomeBack: {
    top: 99,
    fontSize: 65,
    lineHeight: 63,
    fontWeight: "800",
    textAlign: "left",
    left: 50,
  },
  login1: {
    top: 323,
    fontSize: GlobalStyles.FontSize.screenTitle_size,
    fontWeight: "700",
    left: 50,
  },
  iconlylightmessage: {
    top: "42.97%",
    bottom: "54.35%",
  },
  iconlylightlock: {
    top: "54.69%",
    bottom: "42.63%",
  },
  login: {
    borderRadius: GlobalStyles.Border.br_md,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: GlobalStyles.Color.indigo,
  },
});

export default Login;
