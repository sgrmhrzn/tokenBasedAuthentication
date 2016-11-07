(function () {
    "use strict"

    angular
    .module("common.services")
        .factory("values",
                    ["$resource", "appSettings","currentUser",
                                        values])

    function values($resource, appSettings, currentUser) {
        return{
            get: $resource(appSettings.serverPath + "/api/Values", null,
            {
                'getValues': { 
                    headers: { 'Authorization': 'Bearer' + currentUser.getProfile().token }
                },
                //'save': { 
                //    headers: { 'Authorization': 'Bearer' + currentUser.getProfile().token }
                //},
                //'update': {
                //    method:'PUT',
                //    headers: { 'Authorization': 'Bearer' + currentUser.getProfile().token }
                //}
            })
        }
    }
})();