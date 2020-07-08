/*
 * MIT License
 *
 *  Copyright (c) 2020 PaoloB
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var app = angular.module("NotesManagement", []);

// Controller
app.controller("NotesManagementController", function ($scope, $http) {

  // Initialize page with default data which is blank in this example
  $scope.notes = [];

  $scope.form = {
    id: -1,
    name: "",
    contents: ""
  };

  // Now load the data from server
  _refreshPageData();

  // HTTP POST/PUT methods for add/edit notes
  $scope.update = function () {
    var method = "";
    var url = "";
    var data = {};
    if ($scope.form.id == -1) {
      // Id is absent so add the new note - POST operation
      method = "POST";
      $scope.form.id = Math.floor((Math.random() * 2000) + 1); // Generate a random integer
      url = '/notes';
      data.id = $scope.form.id;
      data.name = $scope.form.name;
      data.contents = $scope.form.contents;
    } else {
      // If Id is present, it's an edit - PUT operation
      method = "PUT";
      url = '/notes/' + $scope.form.id;
      data.name = $scope.form.name;
      data.contents = $scope.form.contents;
    }

    $http({
      method: method,
      url: url,
      data: angular.toJson(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(_success, _error);
  };

  // HTTP DELETE - delete note by id
  $scope.remove = function (note) {
    $http({
      method: 'DELETE',
      url: '/notes/' + note.id
    }).then(_success, _error);
  };

  // In case of an edit opetation, populate form with note data
  $scope.edit = function (note) {
    $scope.form.id = note.id;
    $scope.form.name = note.name;
    $scope.form.contents = note.contents;
  };

  /* Private Methods */

  // HTTP GET - get all notes
  function _refreshPageData() {
    $http({
      method: 'GET',
      url: '/notes'
    }).then(function successCallback(response) {
      $scope.notes = angular.fromJson(response.data);
    }, function errorCallback(response) {
      //console.log(response.statusText);
    });
  }

  function _success(response) {
    _refreshPageData();
    _clearForm()
  }

  function _error(response) {
    alert(response.data.message || response.statusText);
  }

  // Clear the form
  function _clearForm() {
    $scope.form.id = -1;
    $scope.form.name = "";
    $scope.form.contents = "";
  }
});
