let selectChannel = false;

setInterval(
    () => {
        if (selectChannel) {
            const channelList = document.querySelectorAll('[data-qa-channel-sidebar-channel-type="channel"]');

            if (channelList.length > 0) {
                const channel = channelList[Math.floor(Math.random() * channelList.length)];
                channel.click();
            }
        } else {
            const usersConversationList = document.querySelectorAll('[data-qa-channel-sidebar-channel-type="im"]');

            if (usersConversationList.length > 0) {
                const usersConversation = usersConversationList[Math.floor(Math.random() * usersConversationList.length)];
                usersConversation.click();
            }
        }

        selectChannel = !selectChannel;
    },
    30000
);
