import { GithubLogo } from '@phosphor-icons/react'
import { ProfileContainer, TagsProfile, TagsContainer } from './styles'

export function Profile() {
    return (
        <ProfileContainer>
            <div>
                <img src='src/assets/avatar.png' />
            </div>
            <div>
                <div>
                    <strong>
                        Cameron Williamson
                    </strong>
                    <section>
                        github
                    </section>
                </div>
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
            </div>
        </ProfileContainer>
    )
}