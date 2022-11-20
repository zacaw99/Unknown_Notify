let defaultNotifications = {
    success: {
      accentColour: "#2BD800",
      icon: {
          iconName: "fa-circle-check",
          iconColour: "#2BD800"
      }
    },
    info: {
      accentColour: "#0070F3",
      icon: {
          iconName: "fa-circle-info",
          iconColour: "#0070F3"
      }
    },
    warn: {
      accentColour: "#FFD600",
      icon: {
          iconName: "fa-triangle-exclamation",
          iconColour: "#FFD600"
      }
    },
    error: {
      accentColour: "#DC0000",
      icon: {
          iconName: "fa-circle-exclamation",
          iconColour: "#DC0000"
      }
    },
  };

let customNotifications = {};
let notificationID = 0;

window.addEventListener('message', (event) => {
	let data = event.data
	if(data.action == 'createNotification') {
		createNotification(data.type, data.title, data.message, data.time)
	}
    if(data.action == 'createNotificationStyle') {
        addCustomNotification(data.name, data.accentColour, data.iconName, data.iconColour)
    }
})

const createNotification = (type, title, message, time) => {
    

    let notificationToUse = null;
    // Check Default Notifications
    let notificationIDCurrent = notificationID + 1;

    Object.keys(defaultNotifications).forEach(key => {
        if(type === key) {
            notificationToUse = defaultNotifications[key];
        }
    })

    if(notificationToUse == null) {
        Object.keys(customNotifications).forEach(key => {
            if(type === key) {
                notificationToUse = customNotifications[key];
            }
        })
    }
    if(notificationToUse != null) {
        const notificationSnippet = `
            <div id="${notificationIDCurrent}" class="notification" style="background: linear-gradient(90deg, ${notificationToUse.accentColour} 3%, #383838 3%)">
                <div class="top-bar">
                    <i class="fas ${notificationToUse.icon.iconName} fa-2x" style="color:${notificationToUse.icon.iconColour}"></i>
                    <p class="title">${title}</p>
                </div>
                <p class="text">${message}</p>
            </div>
        `

        const notifyContainer = document.querySelector('.notify-container');

        notifyContainer.insertAdjacentHTML("beforeEnd", notificationSnippet);
        notificationID++;

        setTimeout(() => {
            removeNotification(notificationIDCurrent);
        }, time);

    } else {
        console.log("No style with " + type);
    }
}

const removeNotification = (notificationID) => {
    const notification = document.getElementById(notificationID);

    notification.remove();
}

const addCustomNotification = (customName, customAccentColour, customIconName, customIconColour) => {
    console.log(`[Unknown_Notify] Custom Styling added with name ${customName}`)
    const newObject = {
        [customName]: {
            accentColour: customAccentColour,
            icon: {
                iconName: customIconName,
                iconColour: customIconColour
            }
        }
    }

    const updatedCustom = Object.assign(customNotifications, newObject);
}

