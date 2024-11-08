import Image from "next/image";

export const Heroes = () => {
    return (
        // Main Container
        <div className="flex flex-col items-center justify-center">
            {/* Image Container */}
            <div className="flex items-center">
                {/* Image */}
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    {/* Image */}
                    <Image src="/jump.gif" fill className="object-contain dark:hidden" alt="Documents" />
                </div>
            </div>
        </div>
    )
}