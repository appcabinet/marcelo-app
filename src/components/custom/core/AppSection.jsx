/*
    This component is responsible for widths contained within the app. Feel free to modify for your use case.
*/

export default function AppSection({ children }) {
    return (
        <section
            className={"w-screen h-screen flex justify-center mb-12"}>
            <div className={"w-11/12 md:w-[650px] mb-12"}>
                {children}
            </div>
        </section>

    );
}