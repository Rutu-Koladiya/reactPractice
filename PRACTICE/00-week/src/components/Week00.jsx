import pic from '../assets/IMG_20230120_112657_442.jpg'

const user = {
    name: 'Rutu Koladiya',
    imageUrl: pic,
    imageSize: 90,
};

export function Profile() {
    return(
        <>
        <h1>{user.name}</h1>
        <img src={user.imageUrl} alt={'Picture of ' + user.name} style={{
            width: user.imageSize,
            height: user.imageSize,
            borderRadius: '50%'
        }}/>
        </>
    )
}