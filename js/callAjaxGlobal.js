let _apiLinkGlobal = "https://dev-api.beekids.edu.vn";
let _idEventJoin = "63e305b22359cd0006f18d73";
//let _apiLinkGlobal = "https://api.beekids.edu.vn";
//let _idEventJoin = "62f918316148170007c184a9";
let _tokenLoginGlobal = localStorage.getItem("mytokelogin");

var callApiGlobal = (function () {
    var obj = {};
    obj.getRequestGlobalNotToken = function (urlRequest) {
        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });

        return ajaxCall;
    }

    obj.getRequestGlobal = function (urlRequest, ajaxLoading) {
        if (ajaxLoading != "" && ajaxLoading != undefined && ajaxLoading != null) {
            if (ajaxLoading != "0") {
                jQuery(document).ajaxStart(function () {
                    jQuery("#" + ajaxLoading).css("display", "block");
                });
                jQuery(document).ajaxComplete(function () {
                    jQuery("#" + ajaxLoading).css("display", "none");
                });
            }
        }
        else {
            jQuery(document).ajaxStart(function () {
                jQuery("#pre-loader").css("display", "block");
            });
            jQuery(document).ajaxComplete(function () {
                jQuery("#pre-loader").css("display", "none");
            });
        }


        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "GET",
            url: url,
            headers: { 'Authorization': 'Bearer ' + _tokenLoginGlobal },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });

        return ajaxCall;
    }
    obj.getRequestGlobalDelay = function (urlRequest) {
        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "GET",
            url: url,
            headers: { 'Authorization': 'Bearer ' + _tokenLoginGlobal },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            timeout: 3000,
        });

        return ajaxCall;
    }

    obj.getRequestDelayGlobalNotToken = function (urlRequest) {
        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            contentType: false,
            processData: false,
            async: false,
            timeout: 3000,
        });

        return ajaxCall;
    }

    obj.postRequestGlobalNotToken = function (urlRequest, info) {
        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(info),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });
        return ajaxCall;
    }

    obj.postRequestGlobalDelayNotToken = function (urlRequest, info) {
        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(info),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            timeout: 3000,
        });
        return ajaxCall;
    }

    obj.postRequestNoAsyncGlobal = function (urlRequest, info) {

        jQuery(document).ajaxStart(function () {
            jQuery("#pre-loader").css("display", "block");
        });
        jQuery(document).ajaxComplete(function () {
            jQuery("#pre-loader").css("display", "none");
        });
        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(info),
            contentType: false,
            processData: false,
            async: false,
            timeout: 20000,
            headers: { 'Authorization': 'Bearer ' + _tokenLoginGlobal },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });
        return ajaxCall;
    }

    obj.postRequestNoAsyncGlobalNotToken = function (urlRequest, info) {
        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(info),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            processData: false,
            async: false,
            timeout: 3000,
        });
        return ajaxCall;
    }


    obj.postRequestGlobal = function (urlRequest, info, ajaxLoading) {
        if (ajaxLoading != "" && ajaxLoading != undefined && ajaxLoading != null) {
            if (ajaxLoading != "0") {
                jQuery(document).ajaxStart(function () {
                    jQuery("#" + ajaxLoading).css("display", "block");
                });
                jQuery(document).ajaxComplete(function () {
                    jQuery("#" + ajaxLoading).css("display", "none");
                });
            }
        }
        else {
            jQuery(document).ajaxStart(function () {
                jQuery("#pre-loader").css("display", "block");
            });
            jQuery(document).ajaxComplete(function () {
                jQuery("#pre-loader").css("display", "none");
            });
        }

        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(info),
            headers: { 'Authorization': 'Bearer ' + _tokenLoginGlobal },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });
        return ajaxCall;
    }

    obj.putRequestNoAsyncGlobal = function (urlRequest, info) {

        jQuery(document).ajaxStart(function () {
            jQuery("#pre-loader").css("display", "block");
        });
        jQuery(document).ajaxComplete(function () {
            jQuery("#pre-loader").css("display", "none");
        });

        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "PUT",
            url: url,
            data: JSON.stringify(info),
            contentType: false,
            processData: false,
            async: false,
            timeout: 20000,
            headers: { 'Authorization': 'Bearer ' + _tokenLoginGlobal },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });
        return ajaxCall;
    }

    obj.putRequestGlobal = function (urlRequest, info, ajaxLoading) {
        if (ajaxLoading != "" && ajaxLoading != undefined && ajaxLoading != null) {
            if (ajaxLoading != "0") {
                jQuery(document).ajaxStart(function () {
                    jQuery("#" + ajaxLoading).css("display", "block");
                });
                jQuery(document).ajaxComplete(function () {
                    jQuery("#" + ajaxLoading).css("display", "none");
                });
            }
        }
        else {
            jQuery(document).ajaxStart(function () {
                jQuery("#pre-loader").css("display", "block");
            });
            jQuery(document).ajaxComplete(function () {
                jQuery("#pre-loader").css("display", "none");
            });
        }

        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "PUT",
            url: url,
            data: JSON.stringify(info),
            headers: { 'Authorization': 'Bearer ' + _tokenLoginGlobal },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });
        return ajaxCall;
    }

    obj.deleteinfoRequestGlobal = function (urlRequest, info, ajaxLoading) {
        if (ajaxLoading != "" && ajaxLoading != undefined && ajaxLoading != null) {
            if (ajaxLoading != "0") {
                jQuery(document).ajaxStart(function () {
                    jQuery("#" + ajaxLoading).css("display", "block");
                });
                jQuery(document).ajaxComplete(function () {
                    jQuery("#" + ajaxLoading).css("display", "none");
                });
            }
        }
        else {
            jQuery(document).ajaxStart(function () {
                jQuery("#pre-loader").css("display", "block");
            });
            jQuery(document).ajaxComplete(function () {
                jQuery("#pre-loader").css("display", "none");
            });
        }

        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "DELETE",
            url: url,
            data: JSON.stringify(info),
            headers: { 'Authorization': 'Bearer ' + _tokenLoginGlobal },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });
        return ajaxCall;
    }

    obj.deleteRequestGlobal = function (urlRequest, ajaxLoading) {
        if (ajaxLoading != "" && ajaxLoading != undefined && ajaxLoading != null) {
            if (ajaxLoading != "0") {
                jQuery(document).ajaxStart(function () {
                    jQuery("#" + ajaxLoading).css("display", "block");
                });
                jQuery(document).ajaxComplete(function () {
                    jQuery("#" + ajaxLoading).css("display", "none");
                });
            }
        }
        else {
            jQuery(document).ajaxStart(function () {
                jQuery("#pre-loader").css("display", "block");
            });
            jQuery(document).ajaxComplete(function () {
                jQuery("#pre-loader").css("display", "none");
            });
        }

        var url = _apiLinkGlobal + urlRequest;
        let ajaxCall = jQuery.ajax({
            type: "DELETE",
            url: url,
            headers: { 'Authorization': 'Bearer ' + _tokenLoginGlobal },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        });

        return ajaxCall;

    }

    return obj;

})();

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}