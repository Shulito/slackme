setInterval(
    () => {
        const selectedItem = document.querySelectorAll('[data-qa-channel-sidebar-channel-is-selected="true"]');

        if (selectedItem.length > 0) {
            selectedItem[0].click();
        } else {
            const channelList = document.querySelectorAll('[data-qa-channel-sidebar-channel-type="channel"]');

            if (channelList.length > 0) {
                channelList[Math.floor(Math.random() * channelList.length)].click();
            } else {
                const usersConversationList = document.querySelectorAll('[data-qa-channel-sidebar-channel-type="im"]');

                if (usersConversationList.length > 0) {
                    usersConversationList[Math.floor(Math.random() * usersConversationList.length)].click();
                }
            }
        }
    },
    60000
);
