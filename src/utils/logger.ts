
const maps = {
    error: "red",
    warn: "yellow",
    info: "black",
}

class Logger {
    private isServer;

    constructor(private isDevLoggingEnabled: boolean) {
        this.isServer = typeof window === 'undefined';
    }

    log(...log: any) {
        if (this.isDevLoggingEnabled) {
            console.log(...log);
        }
    }

    error(...log: any) {
        if (this.isDevLoggingEnabled) {
            console.error(...log);
        }
    }

    warn(...log: any) {
        if (this.isDevLoggingEnabled) {
            console.warn(...log);
        }
    }


    prod(...log: any) {
        if (!this.isDevLoggingEnabled) {
            console.log(...log);
        }
    }




}
let isServer = typeof window === 'undefined';
const isProd = isServer ? process.env.APP_ENV === 'prod' : process.env.NEXT_PUBLIC_APP_ENV === 'prod';
export const logger = new Logger(false);

