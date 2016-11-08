(function () {
    "use strict"

    angular
    .module("common.services")
        .factory("valuesResource",
                    ["$resource", "appSettings","currentUser",
                                        valuesResource])

    function valuesResource($resource, appSettings, currentUser) {
        return{
            get: $resource(appSettings.serverPath + "/api/Values", null,
            {
                'getValues': { 
                    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                },
                //'save': { 
                //    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                //},
                //'update': {
                //    method:'PUT',
                //    headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
                //}
            })
        }
    }
}());