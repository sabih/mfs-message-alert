var CountMessage = {
    
    onLoad: function() {
        // initialization code
        this.initialized = true;
    },

    onMenuItemCommand: function() {
        /*window.open("chrome://mfs-message-alert/content/message-alert.xul", "", "chrome");*/
        
        var popupWidth = 300;
        var popupHeight = 100;
        var left = (screen.width / 2) - (popupWidth / 2);
        var top = (screen.height / 2) - (popupHeight / 2) - 50;
        
        window.open("chrome://mfs-message-alert/content/message-alert.xul", "", 
	'chrome, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=YES, copyhistory=no, width='        + popupWidth + ',height=' + popupHeight + ', top=' + top + ', left=' + left);
    }
    
};

window.addEventListener("load", function(e) { CountMessage.onLoad(e); }, false); 