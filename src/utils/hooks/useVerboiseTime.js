function useVerboiseTime(time) {

  function convertTimestamp() {
    const dif = Date.now() - time;
    const seconds = Math.floor(dif / 1000);

    const timeUnits = [
      { unit: 'year', value: 31536000 },
      { unit: 'month', value: 2592000 },
      { unit: 'day', value: 86400 },
      { unit: 'hour', value: 3600 },
      { unit: 'minute', value: 60 }
    ];

    for (let i = 0; i < timeUnits.length; i++) {
      const unit = timeUnits[i].unit;
      const value = timeUnits[i].value;
      const elapsed = Math.floor(seconds / value);

      if (elapsed >= 1) {
        let unitStr = unit;
        if (elapsed > 1) {
          unitStr = unit + 's';
        };
        return elapsed + ' ' + unitStr + ' ago'
      };
    };
    return 'Just now'
  };

  const verboiseTime = convertTimestamp(time);
  return verboiseTime;
};

export default useVerboiseTime;
