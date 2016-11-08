(function () {
    "use strict"

    angular
    .module("common.services")
        .factory("currentUser",
                ["$cookies", currentUser])

    function currentUser($cookies){
        var profile;
        
        var removeProfile = function(){
            profile = {
                isLoggedIn: false,
                username: "",
                token: ""
            }
        };

        var setProfile = function (username, token) {
             profile = {
                username: username,
                token: token,
                isLoggedIn: true
            }
            $cookies.putObject('profileCookies', profile)
        };
        var getProfile = function(){
            return $cookies.getObject('profileCookies');
        }

        return{
            setProfile: setProfile,
            getProfile: getProfile,
            removeProfile: removeProfile
        }
        
    }
}());