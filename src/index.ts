/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />


console.log('Script started successfully');
// WA.openCoWebSite('https://workadventu.re');

let helloWorldPopup: any;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('popup', () => {
    WA.openPopup("popUp", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('popup', () => {
    helloWorldPopup.close();
});
