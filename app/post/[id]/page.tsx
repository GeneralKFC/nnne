import Post from "@/app/Components/Post";
async function fetchdata(id:string){
    const res:any=await fetch('https://jsonplaceholder.typicode.com/posts/'+ id);
    const result:any= await res.json();
    return result;
  
}

const PagePost=async({params:{id}}:any)=>{
    const res=await fetchdata(id);
    return(
        <div className="post">
            <Post res={res}/>
        </div>
    )
}
export default PagePost