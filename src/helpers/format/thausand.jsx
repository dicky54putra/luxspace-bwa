/* eslint no-extend-native: ["error", {"exceptions": ["Number"]}] */
if (!Number.hasOwnProperty("thousand")) {
  Number.prototype.thousand = function (decimals = 0) {
    const thausand = new Intl.NumberFormat(navigator.language);

    return thausand.format(this);
  };
}
