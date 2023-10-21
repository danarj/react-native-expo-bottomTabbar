import { StyleSheet } from "react-native";
import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import colors from "../../colors";
const circleContainerSize = 72;

const AnimatedCircle = ({ circleX }) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: circleX.value - circleContainerSize / 2 }],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -circleContainerSize / 1.5,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
