const primary = {
  one: "#E0E8F9",
  two: "#BED0F7",
  three: "#98AEEB",
  four: "#7B93DB",
  five: "#647ACB",
  six: "#4C63B6",
  seven: "#4055A8",
  eight: "#35469C",
  nine: "#2D3A8C",
  ten: "#19216C"
};

const neutral = {
  one: "#F5F7FA",
  two: "#E4E7EB",
  three: "#CBD2D9",
  four: "#9AA5B1",
  five: "#7B8794",
  six: "#616E7C",
  seven: "#52606D",
  eight: "#3E4C59",
  nine: "#323F4B",
  ten: "#1F2933"
};

const success = {
  one: "#EFFCF6",
  two: "#C6F7E2",
  three: "#8EEDC7",
  four: "#65D6AD",
  five: "#3EBD93",
  six: "#27AB83",
  seven: "#199473",
  eight: "#147D64",
  nine: "#0C6B58",
  ten: "#014D40"
};

const warn = {
  one: "#FFFBEA",
  two: "#FFF3C4",
  three: "#FCE588",
  four: "#FADB5F",
  five: "#F7C948",
  six: "#F0B429",
  seven: "#DE911D",
  eight: "#CB6E17",
  nine: "#B44D12",
  ten: "#8D2B0B"
};

const error = {
  one: "#FFE3E3",
  two: "#FFBDBD",
  three: "#FF9B9B",
  four: "#F86A6A",
  five: "#EF4E4E",
  six: "#E12D39",
  seven: "#CF1124",
  eight: "#AB091E",
  nine: "#8A041A",
  ten: "#610316"
};

const info = {
  one: "#E3F8FF",
  two: "#B3ECFF",
  three: "#81DEFD",
  four: "#5ED0FA",
  five: "#40C3F7",
  six: "#2BB0ED",
  seven: "#1992D4",
  eight: "#127FBF",
  nine: "#0B69A3",
  ten: "#035388"
};

const spacing = {
  padding: {
    small: 4,
    medium: 8,
    large: 16
  },
  borderRadius: {
    small: 5,
    default: 14
  }
};

export const theme = {
  primary,
  neutral,
  spacing,
  brand: {
    default: primary.five,
    text: primary.ten,
    wash: primary.one,
    border: primary.two
  },
  text: {
    primary: neutral.ten,
    secondary: neutral.nine,
    tertiary: neutral.eight
  },
  ui: {
    wash: neutral.one,
    border: neutral.two,
    background: "#2F3646"
  },
  accent: {
    error: {
      ...error,
      default: error.five,
      text: error.ten,
      wash: error.one,
      border: error.three
    },
    success: {
      ...success,
      default: success.five,
      text: success.ten,
      wash: success.one,
      border: success.three
    },
    warn: {
      ...warn,
      default: warn.five,
      text: warn.ten,
      wash: warn.one,
      border: warn.three
    },
    info: {
      ...info,
      default: info.five,
      text: info.ten,
      wash: info.one,
      border: info.three
    }
  },
  shadow: {
    small: "0px 4px 16px rgba(105, 104, 142, 0.12)",
    medium:
      "0px 5px 30px rgba(67, 67, 67, 0.12), 0px 4px 16px rgba(130, 130, 130, 0.07)",
    large: "0px 15px 70px rgba(3, 6, 33, 0.21)",
    xLarge: "0px 35px 60px rgba(1, 4, 31, 0.35)"
  },
  animation: {
    in: "0.2s ease-in",
    out: "0.2s ease-out"
  },
  fonts: {
    primary: '"Graphik", "Helvetica Neue", Helvetica, Arial, sans-serif'
  }
};
