

function GodsSafeIds() {
  let chars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", "§"];

  let Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var Spec1 = chars[Math.floor(Math.random() * chars.length)];
  var Spec2 = chars[Math.floor(Math.random() * chars.length)];
  var Spec3 = chars[Math.floor(Math.random() * chars.length)];
  var Spec4 = chars[Math.floor(Math.random() * chars.length)];

  var Up1 = Upper[Math.floor(Math.random() * Upper.length)];
  var Up2 = Upper[Math.floor(Math.random() * Upper.length)];
  var Up3 = Upper[Math.floor(Math.random() * Upper.length)];
  var Up4 = Upper[Math.floor(Math.random() * Upper.length)];

  var New = Math.random().toString(36).substring(2, 15) + Spec1 + Math.random().toString(36).substring(2, 15) + Up1 + Math.random().toString(36).substring(2, 15) + Spec2 + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Up2 + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Spec3 + Math.random().toString(36).substring(2, 15) + Up3 + Math.random().toString(36).substring(2, 15) + Spec4 + Math.random().toString(36).substring(2, 15) + Up4;

  return New;
}

module.exports = {
  GodsSafeIds
};

