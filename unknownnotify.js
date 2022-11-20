// Create your own custom notifications here

on("onClientResourceStart", (resourceName) => {
  if(GetCurrentResourceName() != resourceName) {
    return;
  }

  console.log("[UNKNOWN] Loaded Unknown_Notify");
});

const createNotification = (type, title, message, time) => {
  SendNUIMessage({
    "action": "createNotification",
    "type": type,
    "title": title,
    "message": message,
    "time": time
  })
}
exports('createNotification', createNotification);

const createNotificationStyle = (name, accentColour, iconName, iconColour) => {
  SendNUIMessage({
    "action": "createNotificationStyle",
    "name": name,
    "accentColour": accentColour,
    "iconName": iconName,
    "iconColour": iconColour
  })
}
exports('createNotificationStyle', createNotificationStyle)

