import { useMemo } from "react";

function useQuickSort(items) {

  function quickSort(arr) {

    if (arr.length <= 1) {
      return arr;
    };

    let subArr1 = [];
    let subArr2 = [];
    const pivot = arr[arr.length - 1].timestamp;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].timestamp < pivot) {
        subArr1.push(arr[i]);
      } else {
        subArr2.push(arr[i]);
      };
    };

    return [...quickSort(subArr2), arr[arr.length - 1], ...quickSort(subArr1)];

  };

  const sorted = useMemo(() => quickSort(items), [items]);
  return sorted;
};

export default useQuickSort;
