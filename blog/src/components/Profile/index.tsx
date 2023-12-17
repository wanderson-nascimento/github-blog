import { ProfileContainer, ProfileTextContain, HeaderProfile, TagsProfile, TagsContainer } from './styles'
import { useContext } from 'react'
import { GitContext } from '../../contexts/GitContext'
import seta from '../../assets/seta.svg'
import building from '../../assets/building.svg'
import usergroup from '../../assets/usergroup.svg'
import githubbrands from '../../assets/github-brands.svg'

export function Profile() {
    const { userInfo } = useContext(GitContext)

    // console.log(userInfo)



    return (
        <ProfileContainer>
            <div>
                <img src={`${userInfo.avatar_url}`} />
            </div>
            <ProfileTextContain>
                <HeaderProfile>
                    <strong>
                        {userInfo.name}
                    </strong>
                    <a href={userInfo.url}>
                        <span>GITHUB</span>
                        <img src={seta} />
                    </a>
                </HeaderProfile>
                <span>
                    {userInfo.bio}
                </span>
                <TagsContainer>
                    <TagsProfile>
                        <img src={githubbrands} />
                        <span>{userInfo.login}</span>
                    </TagsProfile>
                    <TagsProfile>
                        <img src={building} />
                        <span>{userInfo.company}</span>
                    </TagsProfile>
                    <TagsProfile>
                        <img src={usergroup} />
                        <span>{userInfo.followers}</span>
                    </TagsProfile>
                </TagsContainer>
            </ProfileTextContain>
        </ProfileContainer>
    )
}