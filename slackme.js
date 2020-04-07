const div = document.createElement('div');

div.style.cssText = 'font-size: smaller; font-weight: bold; padding: 5px; position: absolute; width: 400px; height: 50px; opacity: 0.7; z-index: 10000; background: gray none repeat scroll 0% 0%; top: 0px; right: 200px;';
div.id = 'slackMeInfoBox';
div.innerHTML = '<p>Last click:</p>';

document.body.appendChild(div);

setInterval(
    () => {
        let successfulClick = false;

        const selectedItem = document.querySelectorAll('[data-qa-channel-sidebar-channel-is-selected="true"]');

        if (selectedItem.length > 0) {
            selectedItem[0].click();
            successfulClick = true;
        } else {
            const channelList = document.querySelectorAll('[data-qa-channel-sidebar-channel-type="channel"]');

            if (channelList.length > 0) {
                channelList[Math.floor(Math.random() * channelList.length)].click();
                successfulClick = true;
            } else {
                const usersConversationList = document.querySelectorAll('[data-qa-channel-sidebar-channel-type="im"]');

                if (usersConversationList.length > 0) {
                    usersConversationList[Math.floor(Math.random() * usersConversationList.length)].click();
                    successfulClick = true;
                }
            }
        }

        if (successfulClick) {
            div.innerHTML = '<p>Last click: ' + (new Date()) + '</p>';
        }
    },
    60000
);
