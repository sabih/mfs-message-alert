var CountMessage = {
    
    onLoad: function() {
        // Initialization code
        this.initialized = true;
    },

    onMenuItemCommand: function() {
        
        /* DISPLAYS UNREAD MESSAGES ON SAME PAGE */
        var message_id = content.document.getElementById("ucGPSMenu_lblUnReadMessage"),
        count_message = 0;
        
        // It outputs as (0)
        count_message = message_id.innerHTML;
        
        // Removed parenthesis
        count_message = count_message.slice(1,-1);
        
        // Coverted to int
        count_message = parseInt(count_message);
        
        if (count_message === 0) {
            
            alert("You don't have unread messages!");
            
        } else if (count_message === 1) {
            
            alert("You have " + count_message + " unread message!");
            
        } else {
            
            alert("You have " + count_message + " unread messages!");
            
        }
        
    }
    
};

window.addEventListener("load", function(e) { CountMessage.onLoad(e); }, false);
