import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const SocialLinksData = [
    {
        id: 1,
        child: <>LinkedIn <FaLinkedin size={25} /></>,
        href: 'https://www.linkedin.com/in/sagar-thapa-chhetri-630165261/',
        style: 'rounded-tr-md',
        delay: 100
    },
    {
        id: 2,
        child: <>Github <FaGithub size={25} /></>,
        href: 'https://github.com/R3yz0n',
        delay: 300
    },
    {
        id: 3,
        child: <>Mail <HiOutlineMail size={25} /></>,
        href: 'mailto:foo@gmail.com',
        delay: 500
    },
    {
        id: 4,
        child: <>Resume <BsFillPersonLinesFill size={25} /></>,
        href: '/resume.pdf',
        style: 'rounded-br-md',
        download: true,
        delay: 700
    },
];
export { SocialLinksData };