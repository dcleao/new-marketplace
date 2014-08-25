/*
 * Copyright 2002 - 2014 Webdetails, a Pentaho company.  All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to  http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or  implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

'use strict';

define( [ 'marketplace' ],
    function ( app ) {
      console.log("Required devStageIcon/devStageIconController.js");

      app.controller('DevStageIconController',
          ['$scope', 'developmentStageService',
            function ( $scope, devStages ) {

              function update() {
                if ( $scope.lane && $scope.level ) {
                  var laneTemplate = $scope.lane.toLowerCase() + "-";
                  var levelTemplate = "0" + $scope.level;
                  $scope.devStageClass = "dev-stage-" + laneTemplate + levelTemplate;

                  $scope.stage = devStages.getStage( $scope.lane, $scope.level );
                }
              }

              $scope.$watch('lane',  update );
              $scope.$watch('level', update );

            }
          ]);

    }
);