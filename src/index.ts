/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />


console.log('Script started successfully');
// WA.openCoWebSite('https://workadventu.re');
let currentPopup: any = undefined
const circlPopupText = 'The Computer Incident Response Center Luxembourg (CIRCL) is a government-driven initiative designed to gather, review, report and respond to computer security threats and incidents. CIRCL is operated by SMILE - “security made in Lëtzebuerg” GIE, which is also the host organization for CASES and the Cyber Competence Center (C3) of Luxembourg.'
const hitachiPopupText = 'Hitachi proceeds with the development of new technologies and products that respond to the increasing demand for safety and security in the Social Innovation Business.'
const openSysPopupText = 'Open Systems is a groundbreaking cybersecurity company delivering an experience way beyond expectations.';
const womenFirstText = "To further develop the success of FIRST through increased female participation, leading to innovation in the field through diversity and inclusion.";
const cymruText = "Thank you for visiting the Team Cymru team! Your scavenger hunt code word for the Team Cymru sponsor booth is:  kualalumpur";
const ericssonText = "Thank you for visiting the Ericsson team! Your scavenger hunt code word for the Ericsson sponsor booth is:  fukuoka";
const otrsText = "Thank you for visiting the OTRS AG team! Your scavenger hunt code word for the OTRS AG sponsor booth is: boston";
const virustotalText = "Thank you for visiting the VirusTotal team! Your scavenger hunt code word for the VirusTotal sponsor booth is: berlin";
const microsoftText = "Thank you for visiting the Microsoft team! Your scavenger hunt code word for the Microsoft sponsor booth is: malta";
const rapidText = "Thank you for visiting the Rapid7 team! Your scavenger hunt code word for the Rapid7 sponsor booth is: sanjaun";
const secureworksText = "Thank you for visiting the Secureworks team! Your scavenger hunt code word for the Secureworks sponsor booth is: hawaii";
const oasisText = "Thank you for visiting the OASIS team! Your scavenger hunt code word for the OASIS sponsor booth is: ontario";
const quarkslabText = "Thank you for visiting the Quarkslab team! Your scavenger hunt code word for the Quarkslab sponsor booth is: baltimore";
const facebookText = "Thank you for visiting the Facebook team! Your scavenger hunt code word for the Facebook sponsor booth is: singapore";
const ciscoText ="Thank you for visiting the Cisco team! Your scavenger hunt code word for the Cisco sponsor booth is: montreal";
const cywareText = "Thank you for visiting the Cyware team! Your scavenger hunt code word for the Cyware booth is: tallinn"
const isocText = "Thank you for visiting the Internet Society team! Your scavenger hunt code is: muscat";

const scavangerText = "You found a scavenger item! The last in-person conference was held in Edinburgh, Scotland. Your scavenger hunt code word is: Scot1an6";
const gameText = "You found a scavenger item! All work and no play makes for a boring conference. Play a game with a friend. Your code word is: seville";
const flagText = "You found a scavenger item! Within the CTF challenge, every submitted flag contributes to the team's score. A number of new challenges are released every day during the conference and are categorized as network, web, ICS, cryptography, reverse engineering, programming, miscellaneous, puzzle, and so on. Your code word is: vancouver"
const soccerText = "You found a scavenger item! At the in-person conferences attendees regularly gather for an unofficial FIRST soccer/football match. Your scavenger hunt code word is: seoul"
const castleText = "You found a scavenger item! The last in-person conference was held in Edinburgh, Scotland. Your scavenger hunt code word is: Scot1an6";
const cloverText = "You found a scavenger item! The 2022 conference is set to be held in Dublin, Ireland. Your scavenger hunt code word is: Du61!n";
const kittyText = "You found a scavenger item! Hello Kitty stickers regularly attack in-person FIRST conferences as distributed by Masato Terada. Your scavenger hunt code word is: he110k!tty";
const handshakeText = "You found a scavenger item! The SIGs (Special Interest Groups) exist to provide a forum where FIRST Members can discuss topics of common interest to the Incident Response community. A SIG is a group of individuals composed of FIRST Members and invited parties, typically coming together to explore an area of interest or specific technology area, with a goal of collaborating and sharing expertise and experiences to address common challenges. Your code word is: kyoto";
const waveText = "You found a scavenger item! FIRST welcomes all, learn more about FIRST membership here. Your scavenger hunt code word is: miami";
const firstText = "You found a scavenger item! FIRST is the Forum of Incident Response and Security Teams. Your scavenger hunt code word is: vienna";
const piggyText = "“You found a scavenger item! Based on a military tradition, if you show your collectible conference Challenge Coin to someone who also attended the coin’s conference, and they cannot produce it – they buy the next round of drinks! Your scavenger hunt code word is: hamburg"

let helloWorldPopup: any;
let circlPop: any;
let hitachiPop: any;
let openSysPop: any;

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
    circlPop = WA.openPopup("circlPopup", circlPopupText, [
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
    circlPop.close();
});

WA.onEnterZone('hitachiPopup', () => {
    hitachiPop = WA.openPopup("hitachiPopup", hitachiPopupText, [
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
    hitachiPop.close();
});

WA.onEnterZone('openSysPopup', () => {
    openSysPop = WA.openPopup("openSysPopup", openSysPopupText, [
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
    openSysPop.close();
});

WA.onEnterZone('womenFirst', () => {
    currentPopup = WA.openPopup("womenFirst", womenFirstText, [
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
WA.onLeaveZone('womenFirst', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('cymru', () => {
    currentPopup = WA.openPopup("cymru", cymruText, [
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
WA.onLeaveZone('cymru', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('ericsson', () => {
    currentPopup = WA.openPopup("ericsson", ericssonText, [
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
WA.onLeaveZone('ericsson', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('otrs', () => {
    currentPopup = WA.openPopup("otrs", otrsText, [
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
WA.onLeaveZone('otrs', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('virustotal', () => {
    currentPopup = WA.openPopup("virustotal", virustotalText, [
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
WA.onLeaveZone('virustotal', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('microsoft', () => {
    currentPopup = WA.openPopup("microsoft", microsoftText, [
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
WA.onLeaveZone('microsoft', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('rapid', () => {
    currentPopup = WA.openPopup("rapid", rapidText, [
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
WA.onLeaveZone('rapid', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('secureworks', () => {
    currentPopup = WA.openPopup("secureworks", secureworksText, [
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
WA.onLeaveZone('secureworks', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('oasis', () => {
    currentPopup = WA.openPopup("oasis", oasisText, [
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
WA.onLeaveZone('oasis', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('quarkslab', () => {
    currentPopup = WA.openPopup("quarkslab", quarkslabText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('quarkslab', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('facebook', () => {
    currentPopup = WA.openPopup("facebook", facebookText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('facebook', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('cisco', () => {
    currentPopup = WA.openPopup("cisco", ciscoText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('cisco', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('isoc', () => {
    currentPopup = WA.openPopup("isoc", isocText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('isoc', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('cyware', () => {
    currentPopup = WA.openPopup("cyware", cywareText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('cyware', () => {
    // currentPopup.close();
    closePopUp()
});




WA.onEnterZone('scavanger', () => {
    currentPopup = WA.openPopup("scavanger", scavangerText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('scavanger', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('game', () => {
    currentPopup = WA.openPopup("game", gameText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('game', () => {
    // currentPopup.close();
    closePopUp()
});


WA.onEnterZone('flag', () => {
    currentPopup = WA.openPopup("flag", flagText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('soccer', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('soccer', () => {
    currentPopup = WA.openPopup("soccer", soccerText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('soccer', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('castle', () => {
    currentPopup = WA.openPopup("castle", castleText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('castle', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('clover', () => {
    currentPopup = WA.openPopup("clover", cloverText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('clover', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('kitty', () => {
    currentPopup = WA.openPopup("kitty", kittyText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('kitty', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('handshake', () => {
    currentPopup = WA.openPopup("handshake", handshakeText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('handshake', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('wave', () => {
    currentPopup = WA.openPopup("wave", waveText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('wave', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('first', () => {
    currentPopup = WA.openPopup("first", firstText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('first', () => {
    // currentPopup.close();
    closePopUp()
});

WA.onEnterZone('piggy', () => {
    currentPopup = WA.openPopup("piggy", piggyText, [
        {
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            currentPopup = undefined;
        }
    }
]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('piggy', () => {
    // currentPopup.close();
    closePopUp()
});




function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
