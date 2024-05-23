import { logger } from "@/utils/logger"
import { fetchAuthSession } from "aws-amplify/auth"
import { useEffect, useState } from "react"
import { useLoader } from "./useLoader"
import { start } from "repl"

export const useGetTokens = () => {

    const [token, setToken] = useState<null | string>(null)
    const { isLoading, stopLoading, startLoading } = useLoader()

    useEffect(() => {
        startLoading()
        const getTokens = async () => {

            try {

                const session = await fetchAuthSession();
                logger.log("Session", session)
                const token = session.tokens?.idToken?.toString();
                logger.log("token", token)
                if (token)
                    setToken(token)
            } catch (error) {

            }
            finally {
                stopLoading()
            }

        }
        getTokens()


    }, [])


    return { token, isLoading }



}