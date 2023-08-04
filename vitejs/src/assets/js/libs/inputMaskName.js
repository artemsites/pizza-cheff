export function inputMaskName(inputData) {
  return inputData.match(/[ёЁа-яА-Яa-zA-Z\s]{1,}/g);
}