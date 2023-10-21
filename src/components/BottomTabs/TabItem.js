import { Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";

import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getPathXCenterByIndex } from "./../../utils/Path";
import usePath from "./../../hooks/usePath";
import { SCREEN_WIDTH } from "./../../constants/Screen";
import colors from "../../colors";
const ICON_SIZE = 36;
const LABEL_WIDTH = SCREEN_WIDTH / 4;
const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

const TabItem = ({ label, icon, index, activeIndex, onTabPress }) => {
  const { curvedPaths } = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -32 : 30;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: iconPositionX - ICON_SIZE / 2 },
      ],
    };
  });
  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 36 : 100;
    return {
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: labelPosition - LABEL_WIDTH / 2 },
      ],
    };
  });
  const iconColor = useSharedValue(
    activeIndex === index + 1 ? colors.background : colors.font75
  );

  //Adjust Icon color for this first render
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming(colors.background);
    } else {
      iconColor.value = withTiming(colors.font75);
    }
  }, [activeIndex]);

  const animatedIconProps = useAnimatedProps(() => ({
    color: iconColor.value,
  }));
  return (
    <>
      <Animated.View
        style={[tabStyle, { justifyContent: "center", alignItems: "center" }]}
      >
        <Pressable
          testID={`tab${label}`}
          //Increasing touchable Area
          hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
          onPress={onTabPress}
        >
          {/* <AnimatedIcon
            name={icon}
            size={32}
            animatedProps={animatedIconProps}
          /> */}
          <Image style={{ width: 32, height: 32 }} source={icon} />
          <Text
            style={{
              fontSize: 10,
              color: colors.background,
              textAlign: "center",
            }}
          >
            {label}
          </Text>
        </Pressable>
      </Animated.View>
      {/* <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View> */}
    </>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  labelContainer: {
    position: "absolute",
    alignItems: "center",
    width: LABEL_WIDTH,
  },
  label: {
    color: colors.font75,
    fontSize: 17,
  },
});
