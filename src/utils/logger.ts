class Logger {
    private isServer;

    constructor(private isProd: boolean) {
        this.isServer = typeof window === 'undefined';
    }

    log(...log: any) {
        if ((this.isProd && this.isServer) || !isProd) {
            console.log(...log);
        }
    }

    error(...log: any) {
        if ((this.isProd && this.isServer) || !isProd) {
            console.error(...log);
        }
    }

    warn(...log: any) {
        if ((this.isProd && this.isServer) || !isProd) {
            console.warn(...log);
        }
    }


    prod(...log: any) {
        if ((this.isProd && this.isServer) || !isProd) {
            console.log(...log);
        }
    }




}
let isServer = typeof window === 'undefined';
const isProd = isServer ? process.env.APP_ENV === 'prod' : process.env.NEXT_PUBLIC_APP_ENV === 'prod';
export const logger = new Logger(isProd);

