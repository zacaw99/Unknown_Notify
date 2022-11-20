# Unknown Notify Simple Notification System

Unknown Notify is one of our free scripts released. We created this script to allow for custom notification styling and easy notification adding to your FiveM server.

<img src="https://i.imgur.com/yIKPoB4.png">

## Installation

Download the latest version of Unknown Notify from the Releases section of the Github.

Copy the unknown_notify folder into your /resources of your FiveM server.

That's it! You are good to go!

## Exports

If you wish to use unknown_notify within your scripts. You should add unknown_notify to your dependencies in your fxmanifest file. Then you will have access to the exports offered.

```
exports.unknown_notify.createNotification(type, title, message, time)

type: 'success', 'warn', 'info', 'error' or your custom styling name.
title: Title to display at the top of the notification
message: Message to display with the notification.
time: Time to display the notification for (in ms. 1000 = 1 second)

```

```
exports.unknown_notify.createNotificationStyle(name, accentColour, iconName, iconColour)

name: name of your custom style. Can be used in place of type in createNotification
accentColour: Hex code including the # of your colour. E.g. #FFFFFF
iconName: code of the icon you wish to use from fontawesome.com. E.g. fa-bell.
iconColour: Hex code including the # of your colour to use. Recommended to use the same as accentColour.

This should be done during initial parts of your script. To ensure no failures.

```

Note: if you need to reload unknown_notify. You must reload all other resources that depend on it.
