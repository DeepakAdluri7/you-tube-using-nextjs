import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    },
    {
        thumbImage: "channels4_profile.jpg",
        title: "How to learn coading in 30 days | 30 days plan | Code with me",
        author: "Deepak Adluri",
        image: "photo1.jpg",
        views: "29M",
        timestamp: "30 days ago"
    }

]


export function VideoGrid() {

    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map(video => <div><VideoCard thumbImage={video.thumbImage} title={video.title} author={video.author} image={video.image} views={video.views} timestamp={video.timestamp}></VideoCard></div>)}

    </div>

}

