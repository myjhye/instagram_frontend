import StoryViewer from "../../components/story/StoryViewer";

export default function Story() {

    const story = [
        {
            image: "https://images.pexels.com/photos/15868390/pexels-photo-15868390.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/19684417/pexels-photo-19684417.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/20218457/pexels-photo-20218457.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/17425770/pexels-photo-17425770.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
    ]

    return (
        <div>
            <StoryViewer stories={story} />
        </div>
    )
}