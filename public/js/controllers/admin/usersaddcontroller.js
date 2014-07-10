/**
 * Created by juliarietveld on 25/06/14.
 */
app00.controller("usersaddcontroller", function($scope,
                                                   routerFactory,
                                                   compileFactory,
                                                   $routeParams,
                                                   $location) {


        /***
         * Submenu
         * @type {Array}
         */
        $scope.submenu  = [
            {
                url : routerFactory.adminUrl('users'),
                title : 'Users',
                current : false
            }
        ];

        $scope.edit = {};

        /**
         * myObj
         * @type {Object}
         */

        $scope.currentMenu = "users";

        /**
         * myObj
         * @type {Object}
         */
        $scope.myObj = {
            'Username' : 'Username',
            'Password' : 'Password',
            'Email' : 'Email',
            'Created' : 'Created',
            'Edit' : 'Edit',
            'Delete' : 'Delete',
            'No records to display' : 'No records to display'
        }

        /**
         * Users
         * @type {null}
         */
        $scope.users = [];


        /**
         * Users
         */
        routerFactory.http({
            method: 'GET',
            url:  routerFactory.serverAdminUrl("users/listview")
        }, function(res){
            $scope.categories = res.data;
        });


        /**
         * Routeparam EDIT
         */
        if( angular.isDefined($routeParams.id) && $routeParams.id !== null ){
            $scope.edit._id = $routeParams.id;

            /**
             * It cannot be subcategory of itself
             */
            $scope.$watch("users", function(cn){
                angular.forEach(cn,function(val, index){
                    if( val._id === $routeParams.id ){
                        $scope.users.splice(index,1);
                    }
                });
            });


            /**
             * Get one user
             */
            routerFactory.http({
                method: 'GET',
                url:  routerFactory.serverAdminUrl("users/add"),
                params: ({id : $routeParams.id})
            }, function(res){

                if( angular.isDefined( res.error ) && res.error === false ){
                    $scope.edit = res.data;
                }else{
                    $scope.title = "Oops something is wrong :)";
                    $scope.close_button_title = "Close";
                    $scope.errors = [];
                    $scope.close = function(){
                        angular.element(document.querySelector("#overlay_wrapper")).removeClass("show");
                    }
                    compileFactory.compileErrorOverly( $scope );
                }

            });

            /**
             * On edit select selected id
             */
            $scope.$watch("edit", function(n){
                angular.forEach($scope.users,function(val){
                    if(val._id === Number(n.parent_category)){
                        val.selected = "selected";
                    }else{
                        val.selected = null;
                    }

                });
                $scope.$watch("users", function(cn){
                    angular.forEach(cn,function(cnv){
                        if(cnv._id === Number(n.parent_category)){
                            cnv.selected = "selected";
                        }else{
                            cnv.selected = null;
                        }
                    });
                });
            });
        }






        /**
         * Save user
         */
        $scope.save = function(){
            var form = document.getElementById("add_user"),
                title = form.querySelector('input[name="username"]'),

                parent_category = form.querySelector('[name="parent_category"]'),
                id = form.querySelector('input[name="id"]');

            var selected = parent_category.value;

            if( selected === "Select" || selected === ""){
                selected = null;
            }


            /**
             * Router
             */
            routerFactory.http({
                url:  routerFactory.serverAdminUrl("users/add"),
                data: ({username : username.value, id: id.value })
            }, function(res) {

                if( angular.isDefined( res.error ) && res.error === false ){
                    $location.url(routerFactory.adminUrl('users/listview'));
                }else{
                    $scope.title = "Oops something is wrong :)";
                    $scope.close_button_title = "Close";
                    $scope.errors = res.myObj;
                    $scope.close = function(){
                        angular.element(document.querySelector("#overlay_wrapper")).removeClass("show");
                    }
                    compileFactory.compileErrorOverly( $scope );
                }

            });

        }

    }
);
