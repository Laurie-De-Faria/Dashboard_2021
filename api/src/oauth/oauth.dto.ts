const msal = require('@azure/msal-node');

const config = {
    auth: {
        clientId: "0e63e88d-d336-4428-8782-2b7d7dd386e7",
        authority: "https://login.microsoftonline.com/common",
        clientSecret: "Bs2~nV1cos0b_K5fl737y9cG-Gs_Cm_cYs"
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

export const cca = new msal.ConfidentialClientApplication(config);