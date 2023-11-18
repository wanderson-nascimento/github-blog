import { TagsContainer, TagsProfile } from "../Profile/styles";
import { PostInfoContainer } from "./styles";
import { GithubLogo } from '@phosphor-icons/react'

export function PostInfo() {
    return (
        <PostInfoContainer>
            <header>
                <a>
                    VOLTAR
                </a>
                <a>
                    VER NO GITHUB
                </a>
            </header>
            <h2>
                JavaScript data types and data structures
            </h2>
            <TagsContainer>
                <TagsProfile>
                    <GithubLogo size={18} />
                    <span>Rocketseat</span>
                </TagsProfile>
                <TagsProfile>
                    <GithubLogo size={18} />
                    <span>Rocketseat</span>
                </TagsProfile>
                <TagsProfile>
                    <GithubLogo size={18} />
                    <span>Rocketseat</span>
                </TagsProfile>
            </TagsContainer>
        </PostInfoContainer>
    )
}