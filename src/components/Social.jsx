import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Link from "next/link";

const socials = [
    { icon: <FaGithub/>, path: "https://github.com/EVL44" },
    { icon: <FaInstagram/>, path: "https://www.instagram.com/abdoidboubrik" },
    { icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/abdelouahed-id" },
    { icon: <FaTwitter/>, path: "https://x.com/evl_44" },
]

function Social({containerStyles, iconStyles}) {
  return (
    <div className={containerStyles}>
        {socials.map((social, index)=> {
            return <Link key={index} href={social.path} target="_blank" className={iconStyles}> {social.icon} </Link>
        })}
    </div>
  )
}

export default Social;