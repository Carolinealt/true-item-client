import { CiLinkedin } from 'react-icons/ci'
import css from './LinksList.module.css'
import { FaTelegram } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { SlSocialGithub } from 'react-icons/sl'
import { PiGithubLogoBold } from 'react-icons/pi'

const LinksList = () => {
    return (
        <div className={css.linksContainer}>
            <ul className={css.list}>
                <li className={css.item}><a href="https://www.linkedin.com/in/caroline-kudrits-ka/" target='_blank' className={css.link}>
                    <CiLinkedin className={css.icons} />
                    LinkedIn</a></li>
                <li className={css.item}><a href="https://t.me/rozhotgo" target='_blank' className={css.link}>
                    <FaTelegram className={css.icons} />

                    Telegram</a></li>
                <li className={css.item}><a href="mailto:e.scaroline@gmail.com" target='_blank' className={css.link}>
                    <MdOutlineMail className={css.icons} />
                    Email
                </a>
                </li>
                <li className={css.item}><a href="https://github.com/Carolinealt/true-item-client" className={css.link} target='_blank'>
                    <SlSocialGithub className={css.icons} />
                    GitHub/Client
                </a>
                </li>
                <li className={css.item}><a href="https://github.com/Carolinealt/true-item-server" className={css.link} target='_blank'>
                    <PiGithubLogoBold className={css.icons} />
                    GitHub/Server
                </a>
                </li>
            </ul>
        </div>
    )
}

export default LinksList