import s from './ProfileInfo.module.css'
function ProfileInfo() {
    return (
        <div>
            <div >
                <img src="https://i.redd.it/bohmf1gew2y61.jpg" alt="" className={s.infoImg} />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;