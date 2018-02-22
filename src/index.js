/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangles = [];
  var result = 0;

  for (var i = 0; i < preferences.length; i++) {
    var firstIndex = i + 1;
    var secondIndex = preferences[i];
    var thirdIndex = preferences[secondIndex - 1];
    var belovedThird = preferences[thirdIndex - 1];

    if (
      isNotInLoveTriangle(firstIndex, triangles) && 
      isNotInLoveTriangle(secondIndex, triangles) &&
      secondIndex !== firstIndex &&
      thirdIndex !== firstIndex &&
      belovedThird === firstIndex
    ) {
      triangles.push(firstIndex, secondIndex, thirdIndex);
      result++;
    }
  }

  return result;
};

function isNotInLoveTriangle(item, triangles) {
  return triangles.indexOf(item) < 0;
}
