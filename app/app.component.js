"use strict";
// ENTER A NUMBER IN THE INPUT BOX TO ADJUST THE HEIGHT AND WIDTH OF THE SHAPE. CLICK THE CHECKBOX TO CHANGE THE SQUARE TO A CIRCLE
const diameter = {
    template: `
    <input ng-model="$ctrl.number" type="number">
    <input ng-click="$ctrl.changeClass();" type="checkbox">Change to circle</input> 
    <div ng-style="{height: $ctrl.number +'px', width: $ctrl.number + 'px'}" ng-class="{'shape': $ctrl.enabled, 'circle': $ctrl.disabled}"</div>
    `,
    controller: [function() {
        const vm = this;
        vm.number = 0;
        vm.changeSize = function() {
            vm.number = vm.number;
            console.log(vm.number);
        }
        vm.disabled = false;
        vm.enabled = true;
        vm.changeClass = function() {
            vm.disabled = !vm.disabled;
            vm.enable = !vm.enable;
        }
    }]
};


angular.module("App").component("diameter", diameter);