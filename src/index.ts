/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />


console.log('Script started successfully');
// WA.openCoWebSite('https://workadventu.re');
let currentPopup: any = undefined
const circlPopupText = 'The Computer Incident Response Center Luxembourg (CIRCL) is a government-driven initiative designed to gather, review, report and respond to computer security threats and incidents. CIRCL is operated by SMILE - “security made in Lëtzebuerg” GIE, which is also the host organization for CASES and the Cyber Competence Center (C3) of Luxembourg.'
const hitachiPopupText = 'Hitachi proceeds with the development of new technologies and products that respond to the increasing demand for safety and security in the Social Innovation Business.'
const openSysPopupText = 'Open Systems is a groundbreaking cybersecurity company delivering an experience way beyond expectations.'

let helloWorldPopup: any;

// const existingPopups = ['popup', 'testpopup']
// const existingPopups = [{
//     name: 'popup',
//     body: 'Hello World',
//     options: {lable: 'Close', className: 'primary', callback: (popup: any) =>{popup.close()}}
// }, {
//     name: 'popup_test',
//     body: 'Hello World NUMERO 2',
//     options: {}
// }]

// existingPopups.forEach((popup: any) => {
//     WA.onEnterZone(popup.name, () => {
//         currentPopup = WA.openPopup(popup.name, popup.body, [
//         popup.options
//     ]);
//     });
//     WA.onLeaveZone(popup.name, () => {
//         currentPopup.close();
//     });
// })

// Open the popup when we enter a given zone
WA.onEnterZone('circlPopup', () => {
    currentPopup = WA.openPopup("circlPopup", circlPopupText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('circlPopup', () => {
    currentPopup.close();
});

WA.onEnterZone('hitachiPopup', () => {
    currentPopup = WA.openPopup("hitachiPopup", hitachiPopupText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('hitachiPopup', () => {
    currentPopup.close();
});

WA.onEnterZone('openSysPopup', () => {
    currentPopup = WA.openPopup("openSysPopup", openSysPopupText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('openSysPopup', () => {
    currentPopup.close();
});

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
