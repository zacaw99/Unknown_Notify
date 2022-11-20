fx_version 'cerulean'
game 'gta5'

description 'Unknown Notify. Easily create notifications with 1 line.'
author 'Unknown Scripts | zacaw99'
version '1.0'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/css/main.css',
    'html/js/main.js'
}

client_scripts {
    'unknownnotify.js'
}

exports {
    'createNotification',
    'createNotificationStyle'
}