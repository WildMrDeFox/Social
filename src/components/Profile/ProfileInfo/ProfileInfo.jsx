import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "./../../../assets/placeholder-man-circle.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} alt="" className={s.mainPhoto} />
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;