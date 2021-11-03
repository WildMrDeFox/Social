import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div >
                <img src="https://i.redd.it/bohmf1gew2y61.jpg" alt="" className={s.infoImg} />
            </div>*/}



            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={"Hello World"}/>
            </div>
        </div>
    )
}

export default ProfileInfo;