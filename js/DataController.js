$scope.meanStuff = {};
try {
    $scope.meanStuff = meanService.getMeanStuff();
} catch (error) {
    console.error(error);
}