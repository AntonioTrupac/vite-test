// eslint-disable-next-line react/prop-types
export const NavLinksMobile = ({ showMobile }) => {
    return showMobile ? (
        <div className="transition-transform translate-x-0 translate-y-24 bg-red-200 z-[1000] flex items-center flex-col fixed gap-8 
        pt-28 xl:transition-none inset-y-0 right-0 left-[0] md:hidden">
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Services</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </div>
    ) : null
}

// Another way of doing this is to use the hidden class from Tailwind CSS

// export const NavLinksMobile = ({ showMobile }) => {
//     return (
//         <div className={`transition-transform translate-x-0 translate-y-24 bg-red-200 z-[1000] ${showMobile ? "flex" : "hidden" } items-center flex-col fixed gap-8 
//         pt-28 xl:transition-none inset-y-0 right-0 left-[0] md:hidden`}>
//             <ul>
//                 <li>
//                     <a href='#'>Home</a>
//                 </li>
//                 <li>
//                     <a href='#'>About</a>
//                 </li>
//                 <li>
//                     <a href='#'>Services</a>
//                 </li>
//                 <li>
//                     <a href='#'>Contact</a>
//                 </li>
//             </ul>
//         </div>
//     )
// }
