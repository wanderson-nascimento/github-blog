import { TagsContainer, TagsProfile } from "../Profile/styles";
import { PostInfoContainer } from "./styles";
import { GithubLogo } from '@phosphor-icons/react'
import arrow from '../../assets/arrow.svg'
import icon from '../../assets/icon.svg'

export function PostInfo() {
    return (
        <PostInfoContainer>
            <header>
                <a>
                    <img src={arrow} />
                    VOLTAR
                </a>
                <a>
                    VER NO GITHUB
                    <img src={icon} />
                </a>
            </header>
            <h2>
                JavaScript data types and data structures
            </h2>
            <TagsContainer>
                <TagsProfile>
                    <GithubLogo size={18} />
                    <span>cameronwll</span>
                </TagsProfile>
                <TagsProfile>
                    <GithubLogo size={18} />
                    <span>Há 1 dia</span>
                </TagsProfile>
                <TagsProfile>
                    <GithubLogo size={18} />
                    <span>5 comentários</span>
                </TagsProfile>
            </TagsContainer>
        </PostInfoContainer>
    )
}