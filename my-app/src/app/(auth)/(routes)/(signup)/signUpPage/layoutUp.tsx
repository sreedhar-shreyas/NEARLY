import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import NextNodeServer from "nextjs-toploader";
export const metadata: Metadata = {
    title: 'Sign Up | my-app',
    description: 'Registering',
}

const SignUpLayout = ({
    children,
}: {
    children: React.ReactNode   
}) => {
    return (
        <>
           <NextTopLoader color="#000" showSpinner={false} />
           {children}
        </>
    )

}

export default SignUpLayout;