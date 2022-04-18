const details = {
  name: "vishal",
  telephone: 9816120038,
  skills: ["Javascript", "react", "html", "css"],
  address: {
    city: "Bilaspur",
    state: "Himachal Pradesh",
    pin: 174021,
  },
  experience: {
    current: {
      company: "PS",
      time: {
        joining: "30th May 2021",
      },
    },
    previous: {
      company: "Infosys",
      time: {
        joining: "3rd December 2018",
        leaving: "24th May 2021",
      },
    },
  },
};

const flattenObjFun = (obj, prefix, flattenObj) => {
  Object.keys(obj).forEach((key) => {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObjFun(obj[key], `${prefix}_${key}`, flattenObj);
    } else {
      flattenObj[`${prefix}_${key}`] = obj[key];
    }
  });

  return flattenObj;
};

const flatObj = flattenObjFun(details, "details", {});

console.log(flatObj);
