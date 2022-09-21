const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// This  statement cannot be said to not be true and several life experiences will prove it to be absolute truth, this statement became real to me when my father died few years ago, this was when i finally understood that my life is determined by what i choose to do, even when others are not seeing it or it’s unpopular and it’s all had to run through i just have to keep going because process can be doubted and argued  but  results cannot be denied. So I have learnt to keep going and achieving even when it’s hard.
