const BREAKPOINTS: Record<"height" | "width", Record<string, string>> = {
  height: {
    xxl: "820px",
    xl: "790px",
    l: "700px",
    m: "600px",
  },
  width: {
    xxs: "320px",
    xs: "375px",
    xs2: "475px",
    ssm: "576px",
    sm: "768px",
    sm2: "850px",
    md: "992px",
    lg: "1024px",
    lg2: "1140px",
    sxl: "1200px",
    sl: "1280px",
    msl: "1330px",
    ml: "1366px",
    xl: "1440px",
    xxl: "1920px",
  },
};

const MAX_WIDTH = "1500px";
export { BREAKPOINTS, MAX_WIDTH };
