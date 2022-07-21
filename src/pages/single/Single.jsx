import SideBar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
     <SinglePost/>
     <SideBar/>
    </div>
  )
}
