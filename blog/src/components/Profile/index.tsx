import { GithubLogo } from '@phosphor-icons/react'
import { ProfileContainer, ProfileTextContain, HeaderProfile, TagsProfile, TagsContainer } from './styles'

export function Profile() {
    return (
        <ProfileContainer>
            <div>
                <img src='src/assets/avatar.png' />
            </div>
            <ProfileTextContain>
                <HeaderProfile>
                    <strong>
                        Cameron Williamson
                    </strong>
                    <a>
                        GITHUB
                    </a>
                </HeaderProfile>
                <span>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </span>
                <TagsContainer>
                    <TagsProfile>
                        <GithubLogo size={18} />
                        <span>cameronwll</span>
                    </TagsProfile>
                    <TagsProfile>
                        <GithubLogo size={18} />
                        <span>Rocketseat</span>
                    </TagsProfile>
                    <TagsProfile>
                        <GithubLogo size={18} />
                        <span>32 seguidores</span>
                    </TagsProfile>
                </TagsContainer>
            </ProfileTextContain>
        </ProfileContainer>
    )
}